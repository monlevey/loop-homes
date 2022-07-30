import React from "react";
import { useState } from "react";

import "../../styles/login.css";
import emailjs from "emailjs-com";


export default function Login() {
  //declare new state variable call formState and initializing
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    nameError: false,
    emailError: false,
    IsSuccess: false,
  });

  //sumit method handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //setting all validations to true
    setFormState({ ...formState, nameError: false });
    setFormState({ ...formState, emailError: false });
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //checking name is empty
    if (formState.name === "") {
      setFormState({ ...formState, nameError: true });
      return;
      
    } else if (formState.email === "" || !regEx.test(formState.email)) {
      //checking email is empty or invalid email; using rajex expression
      setFormState({ ...formState, emailError: true });
      return;
    } else {
      //if validation success then send email
      emailjs
        .sendForm(
          "service_ylgeemq",
          "template_oeiqrnl",
          event.target,
          "Ko41R982TrglANG9T"
        )
        .then(
          (result) => {
            setFormState({
              ...formState,
              IsSuccess: true,
              name: "",
              email: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  //textbox on text change validation method
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      if (value === "") {
        setFormState({ ...formState, emailError: true });
      } else {
        setFormState({ ...formState, [name]: value, emailError: false });
      }
    } else if (name === "name") {
      if (value === "") {
        setFormState({ ...formState, nameError: true });
      } else {
        setFormState({ ...formState, [name]: value, nameError: false });
      }
    } else {
      if (value === "") {
        setFormState({ ...formState, messageError: true });
      } else {
        setFormState({ ...formState, [name]: value, messageError: false });
      }
    }
  };
  return (
    <div>
    <div className="logincontainer">
      <form onSubmit={handleFormSubmit} method="POST" className="formcontainer">
      <h1>Login</h1>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username..."
            name="username"
            className="form-input"
            onChange={handleChange}
            value={formState.name}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email..."
            className="form-input"
            aria-describedby="emailHelp"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {formState.nameError && (
        <span className="error">Username is required. Please enter your username.</span>
      )}
      {formState.emailError && (
        <span className="error">
          Email address is required. Please enter a valid email address.
        </span>
      )}
      {formState.IsSuccess && (
        <span className="success">
          Logging you in ...
        </span>
      )}
    </div>
    </div>
  );
}