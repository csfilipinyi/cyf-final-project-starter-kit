import React, { useState } from "react";
import { Jumbotron, Container, Form, Col, Row } from "react-bootstrap";

import useFormValidation from "./useFormValidation";
import "../App.css";
import loginValidation from "./loginValidation";
import { Link, useHistory } from "react-router-dom";

export default function LoginForm() {
  let history = useHistory();
  const intialState = {
    userEmail: "",
    userPassword: "",
  };
  const { handleChange, input, handleSubmit, errors, isValid } = useFormValidation(
    loginValidation,
    intialState
  );
  console.log(errors);

  if (isValid) {
    history.push("/skills");
  }
  return (
    <Jumbotron fluid>
      <Container>
        <Form onSubmit={handleSubmit} className="login-page">
          <label>userEmail</label>
          <input
            type="email"
            placeholder="Enter email"
            name="userEmail"
            onChange={handleChange}
            value={input.userEmail}
          />
          {errors.userEmail && <p className="error">*{errors.userEmail} </p>}
          <label>userPassword</label>
          <input
            type="password"
            placeholder="Enter password"
            name="userPassword"
            onChange={handleChange}
            value={input.userPassword}
          />
          {errors.userPassword && <p className="error">*{errors.userPassword} </p>}
          {/* <Link to="/Skills"> */}

          <button
            className="sumbit"
            type="submit"
            variant="secondary"
            size="lg"
            p-2
            active
          >
            Login
          </button>

          <Link to="/signup" className="signup-link">
            signup
          </Link>
        </Form>
      </Container>
    </Jumbotron>
  );
}
