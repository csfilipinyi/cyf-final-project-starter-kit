import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

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
        src="https://scontent.fman1-1.fna.fbcdn.net/v/t1.0-9/79578286_2464400743836747_4092696502684614656_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=pq3QvjFuDlcAX-ruQJI&_nc_ht=scontent.fman1-1.fna&oh=c56c5a6c959fbdb2232100b79d85d982&oe=5FCAF53F"
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
          <button className="submit" type="submit" size="lg" p-2 active>
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
