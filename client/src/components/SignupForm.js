import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Modal from "./Modal";
import "../App.css";

const SignupForm = () => {
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState({
    
    firstName: "",
    surname: "",
    role: "Student",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    classId: "",
    githubName: "",
    slackHandler: "",
  });
  function handleChange(event) {
    let updateInput = {
      ...input,
      [event.target.name]: event.target.value,
    };
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(updateInput);
    setInput(updateInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
    setInput({
      firstName: "",
      surname: "",
      role: "",
      email: "",
      password: "",
      confirmPassword: "",
      city: "",
      classId: "",
      githubName: "",
      slackHandler: "",
    });
  }
  return (
    <div>
      {submit ? (
        <Modal />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="sign-form">
            <label for="firstName">First Name</label>
            <input
              type="text"
              placeholder="First name"
              value={input.firstName}
              onChange={handleChange}
              name="firstName"
              required
            />
            <label for="surname">Surname</label>
            <input
              type="text"
              placeholder="Surname"
              value={input.surname}
              onChange={handleChange}
              name="surname"
              required
            />

            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              name="email"
              required
            />
            <label for="password">password</label>
            <input
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              name="password"
              required
            />
            <label for="">Conform Password</label>
            <input
              type="password"
              placeholder="Conform Password"
              value={input.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              required
            />
            <label for="city">City</label>
            <input
              type="text"
              placeholder="city"
              value={input.city}
              onChange={handleChange}
              name="city"
              required
            />
            <label for="classId">Class</label>
            <input
              type="number"
              placeholder="Class-id"
              value={input.classId}
              onChange={handleChange}
              name="classId"
              required
            />
            <label for="githubName">Github Name</label>
            <input
              type="text"
              placeholder="Github Name"
              value={input.githubName}
              onChange={handleChange}
              name="githubName"
              required
            />
            <label for="slackHandler">Slack Handler</label>
            <input
              type="text"
              placeholder="Slack Handler"
              value={input.slackHandler}
              onChange={handleChange}
              name="slackHandler"
              required
            />

<label for="role">Please select a role</label>
            <select name="role"  onChange={handleChange} required>
          
            <option  value= "Student" >Student</option>
            <option  value= "Mentor" >Mentor</option>
            </select>

            <Link to="/modal">
              <input type="submit" value="Submit" className="submit" />
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
