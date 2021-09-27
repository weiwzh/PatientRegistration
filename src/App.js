import React, { useState } from 'react';
import "./App.css";
import { useFormik } from 'formik';

// Registered patients
var patients = [];

// Required form input fields
const formValues = [
  {
    labelName:"First Name",
    inputType:"text",
  },
  {
    labelName:"Last Name",
    inputType:"text",
  },
  {
    labelName:"Date of Birth",
    inputType:"date",
  },
  {
    labelName:"Phone Number",
    inputType:"tel",
  },
  {
    labelName:"Email Address",
    inputType:"email",
  },
  {
    labelName:"Address",
    inputType:"text",
  },
  {
    labelName:"Appointment Time",
    inputType:"time",
  }
]

const Basic = () => {
  // Set state for admin view
  const [hidden, setHidden] = useState(true)

  // Custom validation function.
  const validate = values => {
    const errors = {};
    if (!values["First Name"]) {
      errors["First Name"] = 'Required';
    }
    if (!values["Last Name"]) {
      errors["Last Name"] = 'Required';
    }
    if (!values["Date of Birth"]) {
      errors["Date of Birth"] = 'Required';
    }
    if (!values["Phone Number"]) {
      errors["Phone Number"] = 'Required';
    } else if (!/^\d{10}$/i.test(values["Phone Number"])) {
      errors["Phone Number"] = 'Invalid phone number';
    }
    if (!values["Email Address"]) {
      errors["Email Address"] = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values["Email Address"])) {
      errors["Email Address"] = 'Invalid email address';
    }
    if (!values["Address"]) {
      errors["Address"] = 'Required';
    }
    if (!values["Appointment Time"]) {
      errors["Appointment Time"] = 'Required';
    }

    return errors;
  };

  // Registration form
  const formik = useFormik({
     initialValues: {
       "First Name": '',
       "Last Name": '',
       "Date of Birth": '',
       "Phone Number": '',
       "Email Address": '',
       "Address": '',
       "Appointment Time": ''
     },
     validate,
     onSubmit: values => {
       patients.push(values);
     },
   });

  return (
    <>
    <div className="center">
      <h1>Patient Registration</h1>
    <form onSubmit={formik.handleSubmit}>
      {formValues.map((formValue) => {
        return (
          <>
          <label>
            {formValue.labelName}
          </label>
          <input
            type={formValue.inputType}
            name={formValue.labelName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           />
           <br />
           {formik.touched[formValue.labelName] && formik.errors[formValue.labelName] ?
             <div>{formik.errors[formValue.labelName]}</div> : null}
           </>
         );
      })}
      <button type="submit">Register </button>
    </form>
    </div>
    <div className="right">
      <button onClick={() => {setHidden(false);}}>Admin </button>
      <button onClick={() => {setHidden(true);}}>Reset </button>
    </div>
    <LoadPatients hidden={hidden} />
    </>

)
};

// Loads list of registered patients for admin view
const LoadPatients = (props) => {
  var listNames = patients.map((patient, i) => {
    return (
      <tr key = {i}>
        <td>{patient['First Name']}</td>
        <td>{patient['Last Name']}</td>
      </tr>
    )
  });
  console.log(props.hidden)
  return(
    <div className={props.hidden ? "hidden" : ""}>
    <table>
      <tbody>
        <tr>
          <th> First Name</th>
          <th> Last Name</th>
        </tr>
      </tbody>
      {listNames}
    </table>
    </div>
  )
};



export default Basic;
