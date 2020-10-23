import React from "react";
import { useRoutes, A } from "hookrouter";
import EditBox from "../components/EditBox";

const routes = {
  "mentorsedit/html": () => <EditBox skill="html" />,
  "mentorsedit/css": () => <EditBox skill="css" />,
  "mentorsedit/javascript": () => <EditBox skill="javascript" />,
  "mentorsedit/react": () => <EditBox skill="reactLib" />,
  "mentorsedit/node": () => <EditBox skill="node" />,
  "mentorsedit/sql": () => <EditBox skill="sql" />,
};

export default function MentorsEdit() {
  const routeResult = useRoutes(routes);
  console.log(routeResult);
  return (
    <div className="skills-container">
      {routeResult}
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
      </h2>
      <EditBox skill="html" />
    </div>
  );
}
