import React from "react";
//import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {useRoutes, A} from 'hookrouter';
import Css from "./Css";
import Html from "./Html";
import Javascript from "./Javascript";
import ReactLib from "./ReactLib";
import Node from "./Node";
import Sql from "./Sql";
 

const routes = {
  
  '/skills/html':() => <Html skill ="html"/>,
   '/skills/css': () => <Html  skill ="css"/>,
   '/skills/javascript': () => <Html   skill ="javascript"/>,
   '/skills/react': () => <Html  skill ="reactLib" />,
   '/skills/node': () => <Html   skill ="node"/>,
   '/skills/sql': () => <Html   skill ="sql"/>
};

export default function Skills() {
  const routeResult = useRoutes(routes);
  return (
    <div className="skills-container">
     
  
  
      <A href="/skills/html">html</A>
      <A href="/skills/css">Css</A>
      <A href="/skills/javascript">Javascript</A>
      <A href="/skills/react">React</A>
      <A href="/skills/node">Node JS</A>
      <A href="/skills/sql">SQL</A>
      {routeResult}
   
        {/* <BrowserRouter><Switch>
          
          <Route path="/html" component={Html} />
          <Route path="/css" component={Css} />
          <Route path="/javascript" component={Javascript} />
          <Route path="/react" component={ReactLib} />
          <Route path="/node" component={Node} />
          <Route path="/sql" component={Sql} />
        </Switch> </BrowserRouter>*/}
        {/* <Link to="/html">
          <h2>HTML</h2>
        </Link>
        <Link to="/css">
          <h2>CSS</h2>
        </Link>
        <Link to="/javascript">
          <h2>Javascript</h2>
        </Link>
        <Link to="/react">
          <h2>React</h2>
        </Link>
        <Link to="/node">
          <h2>Node</h2>
        </Link>
        <Link to="/sql">
          <h2>Sql</h2>
        </Link> */}
      
    </div>
  );
}
