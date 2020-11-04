import React from "react";
//import { useRoutes, A } from "hookrouter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import EditBox from "../components/EditBox";
import StudentDetail from "./StudentDetail";

import Header from "../components/Header";

export default function MentorsEdit() {
  return (
    <Router>
      <div >
        <Header />
      </div>
      <div className="skills-container">
        <Switch>
          <Route path="/mentorsedit/:id" children={<EditBox />} />
        </Switch>
        <h2>Skills</h2>
        <Link to="/mentorsedit/html">HTML</Link>
        <Link to="/mentorsedit/css">CSS</Link>
        <Link to="/mentorsedit/javascript">JavaScript</Link>
        <Link to="/mentorsedit/react">React.js</Link>
        <Link to="/mentorsedit/node">Node</Link>
        <Link to="/mentorsedit/sql">SQL</Link>
      </div>
    </Router>
  );
}
