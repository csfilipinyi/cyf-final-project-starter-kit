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

// const routes2 = ['html', 'css', 'javascript', 'reactlib', 'node', 'sql'];

// const newRoute = routes2.map((skill) => {
//   return({
//   "/mentorsedit/": () => <EditBox skill="skill" />})
// })

// const routes = {
//   "/mentorsedit/html": () => <EditBox skill="html" />,
//   "/mentorsedit/css": () => <EditBox skill="css" />,
//   "/mentorsedit/javascript": () => <EditBox skill="javascript" />,
//   "/mentorsedit/react": () => <EditBox skill="reactLib" />,
//   "/mentorsedit/node": () => <EditBox skill="node" />,
//   "/mentorsedit/sql": () => <EditBox skill="sql" />,
// };

export default function MentorsEdit() {
  let { id } = useParams();
  console.log(id);
  //const routeResult = useRoutes(routes);
  //console.log(routeResult);
  return (
    //<div className="skills-container">
    /* {routeResult}
       <EditBox skill="html" /> 
      <h2>
        <A href="/mentorsedit/html">html</A>
      </h2>
      <h2>
        <A href="/mentorsedit/css">Css</A>
      </h2>
      <h2>
        <A href="/mentorsedit/javascript">Javascript</A>
      </h2>
      <h2>
        <A href="/mentorsedit/react">React</A>
      </h2>
      <h2>
        <A href="/mentorsedit/node">Node JS</A>
      </h2>
      <h2>
        <A href="/mentorsedit/sql">SQL</A>
      </h2> */
    <Router>
      <div>
        <h2>Skills</h2>

        <ul>
          <li>
            <Link to="/html">HTML</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
          <li>
            <Link to="/javascript">JavaScript</Link>
          </li>
          <li>
            <Link to="/react">React.js</Link>
          </li>
          <li>
            <Link to="/node">Node</Link>
          </li>
          <li>
            <Link to="/sql">SQL</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<EditBox skill={id} />} />
        </Switch>
      </div>
    </Router>
    //</div>
  );
}
