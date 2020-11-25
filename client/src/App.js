import React, { useEffect, useState } from "react";

//import { getMessage } from "./service";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import SkillsNav from "./Pages/SkillsNav";
import Modal from "./components/Modal";
import MentorsView from "./Pages/MentorsView";
import MentorsEdit from "./Pages/MentorsEdit";

export function App() {
  const [message, setMessage] = useState("Loading...");

  return (
    <BrowserRouter>
      <main role="main">
        <div>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />

            <Route path="/skills" component={SkillsNav} />

            <Route path="/MentorsView" component={MentorsView} />
            <Route path="/MentorsEdit/:id?" component={MentorsEdit} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
