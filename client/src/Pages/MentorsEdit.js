import React from "react";
//import { useRoutes, A } from "hookrouter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";
import EditBox from "../components/EditBox";
import StudentDetail from "./StudentDetail";

import Header from "../components/Header";

import Footer from "../components/Footer";

export default function MentorsEdit() {
  let back = "Back"
  return (
    <Router>

      <Header />
      <div className="mentorsedit-page"></div>

//       <div className="mentorsedit-page">
//         <Header back={back} />
//       </div>

      <div className="edit-display-container">
        <Switch>
          <Route path="/mentorsedit/:id" children={<EditBox />} />
        </Switch>
        <div className="skillNav-display skills-container">
          <ul>
            <li>
              <NavLink
                to="/mentorsedit/html"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                HTML
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/css"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                CSS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/javascript"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                JavaScript
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/react"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                React.js
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/node"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                Node
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentorsedit/sql"
                activeClassName="active-skill-display"
                className="default-skill-display"
              >
                SQL
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/mentorsedit/:id" children={<EditBox />} />
        </Switch>

      </div>
      <Footer />
    </Router>
  );
}

