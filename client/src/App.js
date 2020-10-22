import React, { useEffect, useState } from "react";

import { getMessage } from "./service";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import SkillsNav from "./Pages/SkillsNav";
import Modal from "./components/Modal";
import MentorsView from "./Pages/MentorsView";


export function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getMessage().then((message) => setMessage(message));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        
        <main role="main">
          <div>
            {/* <SignupForm /> */}

         
         

            <Route exact path="/" component={LoginForm} />
            <Route path="/signupform" component={SignupForm} />

            {/* <LoginForm /> */}
            <Route path="/skillsnav" component={SkillsNav} />
            <Route path="/modal" component={Modal} />
            <Route path="/MentorsView" component={MentorsView} />
          </div>
        </main>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
