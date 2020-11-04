import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Form, Col, Row } from "react-bootstrap";

import useFormValidation from "./useFormValidation";
import "../App.css";
import loginValidation from "./loginValidation";
import { Link, useHistory } from "react-router-dom";

export default function LoginForm() {
  let history = useHistory();
  const [serverError, setServerError] = useState("");
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

          window.localStorage.setItem("token", data.token);

          const test = window.localStorage.setItem("user", data.id);
          console.log(test);
          window.localStorage.setItem("role", data.role);
          let role = data.role;
          role === "Student"
            ? history.push("/skills")
            : history.push("/MentorsView");
        })
        .catch(({error}) => setServerError(error));
    }
  }, [isValid]);

  return (
    <Jumbotron fluid>
      <Container>
        <Form onSubmit={handleSubmit} className="login-page">
          <p className="error">{serverError}</p>
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
          <br />
          <em> Don't have an account then</em>
          <Link to="/signup" className="signup-link">
            signup
          </Link>
        </Form>
      </Container>
    </Jumbotron>
  );
}
