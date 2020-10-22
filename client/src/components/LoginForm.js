import React, { useState } from "react";
import { Jumbotron, Container, Form, Col, Row } from "react-bootstrap";
import useForm from "./useForm";
import "../App.css";
import loginValidation from "./loginValidation";
import { Link, useHistory } from "react-router-dom";

export default function LoginForm() {
  let history = useHistory();
  const intialState = {
    email: "",
    password: "",
  };
  const { handleChange, input, handleSubmit, errors, submit } = useForm(
    loginValidation,
    intialState
  );
  console.log(errors);

  if (submit) {
    history.push("/skills");
  }
  return (
    <Jumbotron fluid>
      <Container>
        <Form onSubmit={handleSubmit} className="login-page">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          {errors.email && <p className="error">*{errors.email} </p>}
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />
          {errors.password && <p className="error">*{errors.password} </p>}
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
