import React, {useEffect} from "react";
import {useRoutes, A} from 'hookrouter';
import SkillTracker from "./SkillsTracker";
import { useHistory } from "react-router-dom";

const routes = {
  
  '/skills/html':() => <SkillTracker skill ="html"/>,
   '/skills/css': () => <SkillTracker skill ="css"/>,
   '/skills/javascript': () => <SkillTracker  skill ="javascript"/>,
   '/skills/react': () => <SkillTracker skill ="react" />,
   '/skills/node': () => <SkillTracker  skill ="node"/>,
   '/skills/sql': () => <SkillTracker  skill ="sql"/>
};

export default function SkillsNav() {
  
  let history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
 
console.log(token)
    if (!token) {
      history.push("/");
    }
    fetch(`/api/verify`, {headers: {token}})
    .then(res =>{
      if(res.status !==200){
        history.push("/");
      }
      return res.json()
    }) 
    .then(data =>{
       console.log(data)
       window.localStorage.setItem("role", data.role)
      if( data == "not authorized"||data.role == "Mentor"){
       history.push("/");
      }
    } 
    )
    .catch(error =>console.log(error))
  }, []);
  const routeResult = useRoutes(routes);
  return (
    <div className="skills-container">
     {routeResult}
     <h2> <A href="/skills/html">Html</A></h2>
     <h2><A href="/skills/css">CSS</A></h2> 
     <h2><A href="/skills/javascript">Javascript</A></h2> 
      <h2><A href="/skills/react">React</A></h2>
      <h2><A href="/skills/node">Node JS</A></h2>
      <h2><A href="/skills/sql">SQL</A></h2>
      </div>
  );
}
