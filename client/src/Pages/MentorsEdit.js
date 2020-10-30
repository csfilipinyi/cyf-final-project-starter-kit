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
      <div className="skills-container">
        <h2>Skill</h2>

        <ul>
          <li>
           <h2><Link to="/mentorsedit/html">HTML</Link></h2> 
          </li>
          <li>
            <h2><Link to="/mentorsedit/css">CSS</Link></h2>
          </li>
          <li>
            <h2><Link to="/mentorsedit/javascript">JavaScript</Link></h2>
          </li>
          <li>
            <h2><Link to="/mentorsedit/react">React.js</Link></h2>
          </li>
          <li>
            <h2><Link to="/mentorsedit/node">Node</Link></h2>
          </li>
          <li>
           <h2><Link to="/mentorsedit/sql">SQL</Link></h2> 
          </li>
        </ul>

        <Switch>
          <Route path="/mentorsedit/:id" children={<EditBox />} />
        </Switch>
      </div>
    </Router>
    )

}
