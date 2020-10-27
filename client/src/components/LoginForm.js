import React, { useEffect } from "react";
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
  const {
    handleChange,
    input,
    handleSubmit,
    errors,
    isValid,
  } = useFormValidation(loginValidation, intialState);
  console.log(errors);

  useEffect(() => {
   
    if (isValid) {
      fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: input.userEmail,
          userPassword: input.userPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            throw data;
          }
          console.log(data);

          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("user", data.id)
          window.localStorage.setItem("role", data.role)
          history.push("/skills")
        
        })
        .catch((error) => console.log(error));
    }
  }, [isValid]);

  
  return (
    <Jumbotron fluid>
      <Container>
        <Form onSubmit={handleSubmit} className="login-page">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name="userEmail"
            onChange={handleChange}
            value={input.userEmail}
          />
          {errors.userEmail && <p className="error">*{errors.userEmail} </p>}
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="userPassword"
            onChange={handleChange}
            value={input.userPassword}
          />
          {errors.userPassword && (
            <p className="error">*{errors.userPassword} </p>
          )}
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
