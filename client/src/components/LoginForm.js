import React, { useState } from "react";
import { Jumbotron, Container, Form, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    let updateInput = {
      ...input,
      [event.target.name]: event.target.value,
    };
    console.log(updateInput);
    setInput(updateInput);
  }
  function handleSubmit(event) {
    event.prevendDefault();
    setInput({
      email: "",
      password: "",
    });
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
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />

          <Link to="/Skills">
            <button type="button" variant="secondary" size="lg" p-2 active>
              Login
            </button>
          </Link>
          <Link to="/signup" className="signup-link">
            signup
          </Link>
        </Form>
      </Container>
    </Jumbotron>
  );
}
