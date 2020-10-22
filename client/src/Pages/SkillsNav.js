import React from "react";
//import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {useRoutes, A} from 'hookrouter';
import SkillTracker from "./SkillsTracker";


const routes = {
  
  '/skills/html':() => <SkillTracker skill ="html"/>,
   '/skills/css': () => <SkillTracker skill ="css"/>,
   '/skills/javascript': () => <SkillTracker  skill ="javascript"/>,
   '/skills/react': () => <SkillTracker skill ="reactLib" />,
   '/skills/node': () => <SkillTracker  skill ="node"/>,
   '/skills/sql': () => <SkillTracker  skill ="sql"/>
};

export default function SkillsNav() {
  const routeResult = useRoutes(routes);
  return (
    <div className="skills-container">
     {routeResult}
     <h2> <A href="/skills/html">html</A></h2>
     <h2><A href="/skills/css">Css</A></h2> 
     <h2><A href="/skills/javascript">Javascript</A></h2> 
      <h2><A href="/skills/react">React</A></h2>
      <h2><A href="/skills/node">Node JS</A></h2>
      <h2><A href="/skills/sql">SQL</A></h2>
      </div>
  );
}
