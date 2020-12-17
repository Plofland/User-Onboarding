import React, { useState } from "react"
import "./App.css";
import Form from "./components/Form";
import formScheme from "./validation/formSchema"
import axios from "axios"
import * as yup from yup

const initialUsers = [];

const initialValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialErrors = {
  name: "",
  email: "",
  password: ""
};

const initialDisabled = true;

function App() {
  const [user, setUser] = useState(initialUsers);//array of users
  const [ formValues, setFormValues ] = useState(initialValues);
  const [ formErrors, setFormErrors ] = useState(initialErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users')
      .then((result) => {
        setUser(result.data);
    })
      .catch((error) => {
        console.log(error);
        debugger;
    })
    
  };

  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/users')
      .then((result) => {
        setUser([res.data, ...user]);
        setFormValues(initialValues);
    })
      .catch((error) => {
        console.log(error);
    })
    
  };

  const inputChange = ( name, value ) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        // console.log(err)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
          
        });
      });
    setFormValues({
      ...formErrors,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // termsOfService: ["terms"].filter((term) => formValues[term])//used for multiple checkboxes
      termsOfService: formValues.term//used for only one checkbox? Yes, yes it is.
    };
    postNewUser(newUser);
  };

  return;
  <div>
    <Form 
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    disabled={disabled}
    errors={formErrors}
    />
  </div>;
}

export default App;






let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore) -->  [0, 1, 2, 12]

numberStore = newNumber;
console.log(numberStore) --> 12

otherwise:
numberStore = [numberStore, newNumber];
console.log(numberStore) -->  [[0, 1, 2] 12]

