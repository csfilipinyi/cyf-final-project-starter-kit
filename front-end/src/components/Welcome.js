import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="App">
      <div className="nav">
        <ul>
          <li>
            <FaRegUser size={25} />
            Username
          </li>
          <li>
            <img
              src="https://syllabus.codeyourfuture.io/img/logo.png"
              alt="cyf logo"
              width="200px"
              height="60px"
            />
          </li>
          <li>
            <Link to={"/"} className="Star">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      <h2>Welcome to the class</h2>
      <p>You are now logged in </p>
      <Link to={"/logout"} className="page-link">
        {" "}
        More ahead{" "}
      </Link>
    </div>
  );
}

export default Welcome;
