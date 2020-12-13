import "./App.css";
import React, { useState } from "react";
import Heading from "./Heading";
import UserLogoutPage from "./components/UserLogoutPage";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome.js";

function App() {
  const [user,setUser] = useState()
  // return (
  //   <div className="container">
  //     <div>
  //       <Heading />
  //     </div>
  //     <WelcomePage />
  //     <UserLogoutPage />
  //   </div>
  // );
return (
  <BrowserRouter>
    <div className="container">
      <div>
        <Heading />
      </div>
      <div className="connect-components">
        <Switch>
          <Route exact path="/">
            {" "}
            <WelcomePage onLogin = {setUser}/>
          </Route>
          <Route exact path="/logout" component={UserLogoutPage} />
        </Switch>
      </div>
      <div>
        <Welcome />
      </div>
    </div>
  </BrowserRouter>
);
}

export default App;
