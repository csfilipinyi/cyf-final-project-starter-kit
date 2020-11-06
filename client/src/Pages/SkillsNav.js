import React, { useEffect } from "react";
import { useRoutes, A } from "hookrouter";
import SkillTracker from "./SkillsTracker";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const routes = {
  "/skills/html": () => <SkillTracker skill="html" />,
  "/skills/css": () => <SkillTracker skill="css" />,
  "/skills/git": () => <SkillTracker skill="git" />,
  "/skills/javascript": () => <SkillTracker skill="javascript" />,
  "/skills/react": () => <SkillTracker skill="react" />,
  "/skills/node": () => <SkillTracker skill="node" />,
  "/skills/sql": () => <SkillTracker skill="sql" />,
};

export default function SkillsNav() {
  let history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    console.log(token);
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
        console.log(data);
        window.localStorage.setItem("role", data.role);
        if (data == "not authorized" || data.role == "Mentor") {
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  const routeResult = useRoutes(routes);
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
        {routeResult}
        <A href="/skills/html">Html</A>
        <A href="/skills/css">CSS</A>
        <A href="/skills/git">GIT</A>
        <A href="/skills/javascript">Javascript</A>
        <A href="/skills/react">React</A>
        <A href="/skills/node">Node JS</A>
        <A href="/skills/sql">SQL</A>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
