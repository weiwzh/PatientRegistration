### Overview
This project is intended to showcase a basic registration form, with the following requirements:
1. Form inputs should include name, DOB, phone, email, address, photo, appointment time.
2. Admin should be able to view all registered patients.

### Local setup
To run the project locally, pull down the repo and run `npm start` in the console.

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Areas of Improvement

#### Visual Design
Given more time, the design would look closer to this, adjusted for the specific inputs of this registration form: ![](https://github.com/weiwzh/PatientRegistration/blob/master/public/ideal_design.png?raw=true)

#### Features
Currently the photo input feature is not implemented. Further improvements will add this feature, as well as use Cloudinary to store and validate photos as described [here](https://github.com/funador/react-image-upload/).

Currently, the admin simply needs to click the Admin button to view a list of registered patients' names. Further development will require an admin username and password, which will then redirect to a new page with all registered patient's names. Each patient name will be clickable to display a card of all the registration information pertaining to the patient.

Currently, there is effectively no testing. Further development will include unit and E2E testing. 

#### Back End
Currently, patient registration data is stored locally, so there is no backend. Future improvements will include setting up a database - either a serverless option as described [here](https://www.freecodecamp.org/news/how-to-add-a-serverless-database-to-react-projects-and-web-apps/) or a server-side NoSQL database.

### Development Notes
As of 9/26/21, development used around 6 hours, and learning JS, React.js, CSS, Formik, and all other research for this project used around 10 hours.
