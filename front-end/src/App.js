import "./App.css";
import React, { useState } from "react";
import UserLogoutPage from "./components/UserLogoutPage";
import WelcomePage from "./components/WelcomePage";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [user,setUser] = useState()
  
return (
  <BrowserRouter>
    <div className="container">
      <div className="connect-components">
        <Switch>
          <Route exact path="/">
            {" "}
            <WelcomePage onLogin = {setUser}/>
          </Route>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/logout" component={UserLogoutPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);
}

export default App;
