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



export default function MentorsEdit() {
 
return(
    <Router>
      <div>
        <h2>Skills</h2>

        <ul>
          <li>
            <Link to="/mentorsedit/html">HTML</Link>
          </li>
          <li>
            <Link to="/mentorsedit/css">CSS</Link>
          </li>
          <li>
            <Link to="/mentorsedit/javascript">JavaScript</Link>
          </li>
          <li>
            <Link to="/mentorsedit/react">React.js</Link>
          </li>
          <li>
            <Link to="/mentorsedit/node">Node</Link>
          </li>
          <li>
            <Link to="/mentorsedit/sql">SQL</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/mentorsedit/:id" children={<EditBox />} />
        </Switch>
      </div>
    </Router>
    )

}
