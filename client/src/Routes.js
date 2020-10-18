import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile";
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/createprofile' component={CreateProfile} />
				<Route path='/viewprofile' component={ViewProfile} />
				<Route path='/editprofile' component={EditProfile} />
				<Route path='/oauth2' component={CreateProfile} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;