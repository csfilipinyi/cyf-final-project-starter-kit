import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from './helpers/ProtectedRoute'
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

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route exact path='/profiles' component={ViewAllProfiles}/>
				<Route exact path='/profiles/new' component={CreateProfile} />
				<Route path='/myprofile' component={ViewProfile} />
				<Route exact path='/profile/edit' component={EditProfile} />
				<Route exact path='/profiles/:name' component={ViewDetail} />
				<Route path='/notfound' component={NotEligible} />
				<Route path='/test' component={RichEditorField} />
				<Route path='/reader' component={RichEditorReader} />

			</Switch>
		</BrowserRouter>
	);
};

export default Routes;