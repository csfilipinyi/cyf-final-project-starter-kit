import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function Header({ editLearningObjectives }) {
  // export default function Header({ editLoImg, back }) {
  return (
    <div className="header">
      <img
        src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
        alt="code your future"
        className="header-img"
      ></img>

      {editLearningObjectives}

      {/* <a href="/MentorsView">
        <h3>{back}</h3>
      </a> */}
      {/* <a href="/mentorsedit">{editLoImg}</a> */}

      <a href="/">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/159/159707.svg"
          alt="logout"
          className="logout-img"
        ></img>
      </a>
    </div>
  );
}
