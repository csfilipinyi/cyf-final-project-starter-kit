import React, { useEffect, useState } from "react";

//import { getMessage } from "./service";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import SkillsNav from "./Pages/SkillsNav";
import Modal from "./components/Modal";
import MentorsView from "./Pages/MentorsView";
import MentorsEdit from "./Pages/MentorsEdit";
import StudentDetail from "./Pages/StudentDetail";

export function App() {
  const [message, setMessage] = useState("Loading...");

  // useEffect(() => {
  //   getMessage().then((message) => setMessage(message));
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <main role="main">
          <div>
            {/* <SignupForm /> */}

         
         

            <Route exact path="/" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />

            {/* <LoginForm /> */}
            <Route path="/skills" component={SkillsNav} />
            {/* <Route path="/skills" component={Modal} /> */}
            <Route path="/MentorsView" component={MentorsView} />
            <Route path="/MentorsEdit/:id?" component={MentorsEdit} />
            <Route path="/details" component={StudentDetail} />
          </div>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
