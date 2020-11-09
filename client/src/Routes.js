import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ProtectedRoute} from './helpers/ProtectedRoute'
import Home from "./pages/Home";
import Login from './pages/Login'
import CreateProfile from "./pages/CreateProfile";
import ViewDetail from './pages/ViewDetail'
import ViewAllProfiles from './pages/ViewAllProfiles'
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";
import NotEligible from './pages/NotEligible'
import RichEditorField from './constant/RichEditorField'
import RichEditorReader from './constant/RichEditorReader'
import Admin from './pages/Admin'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<ProtectedRoute path='/admin' component={Admin} />
				<Route exact path='/profiles' component={ViewAllProfiles}/>
				<ProtectedRoute path='/profiles/new' component={CreateProfile} />
				<ProtectedRoute path='/profile/edit' component={EditProfile} />
				<Route path='/profiles/:name' component={ViewDetail} />
				<ProtectedRoute path='/myprofile' component={ViewProfile} />
				<Route path='/notfound' component={NotEligible} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;