import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import LoginImage from "../login-image.jpg";
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

          window.localStorage.setItem("user", data.id);
          window.localStorage.setItem("name", data.name);
          window.localStorage.setItem("role", data.role);
          let role = data.role;
          role === "Student"
            ? history.push("/skills")
            : history.push("/MentorsView");
        })
        .catch(({ error }) => setServerError(error));
    }
  }, [isValid]);

  return (
    <div className="login-container">
      <Header />
      <img
        src={LoginImage}
        alt="code your future"
        border="0"
        className="login-image"
      ></img>

      <Container className="main-container">
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
          <button className="submit " type="submit" size="lg">
            Login
          </button>
          <br />
          <div className="signup-prompt">
            <em>Don't have an account? &nbsp;</em>
            <Link to="/signup" className="register">
              Signup
            </Link>
          </div>
        </Form>
      </Container>

      <Footer />
    </div>
  );
}
