import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Modal from "./Modal";
import useForm from "./useForm"
import "../App.css";
import validate from "./validation"

const SignupForm = () => {
  
  const intialState = {
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
  }
const {handleChange, input, handleSubmit, errors, submit} = useForm(validate, intialState)
 console.log(errors)

  return (
    <div>
      {submit ? (
        <Modal />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="sign-form">
            <label for="firstName">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={input.firstName}
              onChange={handleChange}
              name="firstName"
            />
            {errors.firstName && <p className = "error">*{errors.firstName} </p>}
            <label for="surname">Surname</label>
            <input
              type="text"
              placeholder="Surname"
              value={input.surname}
              onChange={handleChange}
              name="surname"
            />
            {errors.surname && <p className = "error">*{errors.surname} </p>}
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              name="email"
            />
              {errors.email && <p className = "error">*{errors.email} </p>}
            <label for="password">password</label>
            <input
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              name="password"
            />
              {errors.password && <p className = "error">*{errors.password} </p>}
            <label for="">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={input.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
             {errors.confirmPassword && <p className = "error">*{errors.confirmPassword} </p>}
            <label for="city">City</label>
            <input
              type="text"
              placeholder="city"
              value={input.city}
              onChange={handleChange}
              name="city"
            />
             {errors.city && <p>{errors.city} </p>}
            <label for="classId">Class</label>
            <input
              type="number"
              placeholder="Class-id"
              value={input.classId}
              onChange={handleChange}
              name="classId"
            />
             {errors.classId && <p>{errors.classId} </p>}
            <label for="githubName">Github Name</label>
            <input
              type="text"
              placeholder="Github Name"
              value={input.githubName}
              onChange={handleChange}
              name="githubName"
            />
            <label for="slackHandler">Slack Handler</label>
            <input
              type="text"
              placeholder="Slack Handler"
              value={input.slackHandler}
              onChange={handleChange}
              name="slackHandler"
         
            />

     <label for="role">Please select a role</label>
            <select name="role"  onChange={handleChange} >
            <option  value= "select" >Select</option>
            <option  value= "Student" >Student</option>
            <option  value= "Mentor" >Mentor</option>
            </select>
            {errors.role && <p className = "error">*{errors.role} </p>}
            {/* <Link> */}
            {/* <input  to="/modal" type="submit" value="Submit" className="submit" /> */}
            {/* </Link> */}
            <button to="/modal" className="submit" type="submit" value="Submit" className="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
