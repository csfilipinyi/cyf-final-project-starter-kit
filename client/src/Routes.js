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
				<Route path='/viewdetail/:name' component={ViewDetail} />
				<Route path='/createprofile' component={CreateProfile} />
				<Route path='/viewallprofiles' component={ViewAllProfiles}/>
				<Route path='/viewprofile' component={ViewProfile} />
				<Route path='/editprofile' component={EditProfile} />
				<Route path='/notfound' component={NotEligible} />
				<Route path='/test' component={RichEditorField} />
				<Route path='/reader' component={RichEditorReader} />

			</Switch>
		</BrowserRouter>
	);
};

export default Routes;