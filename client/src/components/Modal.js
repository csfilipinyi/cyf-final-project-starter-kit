import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Modal({ role }) {
  console.log(role);
  return (
    <Jumbotron>
      <Container>
        <div className="modal-body">
          <p>Your account has been created successfully</p>
        </div>
        <div className="modal-footer">
          <Link to={role === "Student" ? "/skills" : "/MentorsView"}>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Dashboard
            </button>
          </Link>
        </div>
      </Container>
    </Jumbotron>
  );
}
