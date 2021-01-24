import React, { useEffect } from "react";
import SkillTracker from "./SkillsTracker";
import { useHistory, Route, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { skills, skillLabel } from "../components/consts/skillsConst";

export default function SkillsNav() {
  let history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
    fetch(`/api/verify`, { headers: { token } })
      .then((res) => {
        if (res.status !== 200) {
          history.push("/");
        }
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem("role", data.role);
        if (data == "not authorized" || data.role == "Mentor") {
          history.push("/");
        }
      });
  }, []);
  let logout = (
    <a href="/">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/159/159707.svg"
        alt="logout"
        className="logout-img"
      ></img>
    </a>
  );

  return (
    <div className="skillsnav-page">
      <div>
        <Header logout={logout} />
      </div>
      <h1 className="welcome-msg">
        Welcome {window.localStorage.getItem("name")}
      </h1>
      <div className="skills-container  ">
        {skills.map((skill) => (
          <Route
            path={`/skills/${skill}`}
            component={() => <SkillTracker skill={skill} />}
          />
        ))}

        {skills.map((skill) => (
          <NavLink
            to={`/skills/${skill}`}
            activeClassName="active-skill-display"
            className="default-skill-display"
          >
            {skillLabel(skill)}
          </NavLink>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
