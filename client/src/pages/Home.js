import React, { useContext, useEffect } from "react";
import {NavLink, Redirect, useHistory} from 'react-router-dom';
import OverviewProfileCard from '../components/OverviewProfileCard';
import ViewProfileDetail from '../components/ViewProfileDetail';
import Introducing from '../components/Introducing';
import Logo from '../constant/Logo'
import { ProfileContext } from '../context/ProfileContext';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import GitHubLogin from "react-github-login";
import {graduates, graduateProfile} from '../api/graduates'


const Home = () => {
	let history = useHistory();

	const { getAllProfiles, getProfile, allProfiles, profile, isLoading, error }= useContext(ProfileContext);
	const { fetchUserName, isAuthenticated, userName, isGraduate} = useContext(AuthContext);


	const onSuccess =  (response) =>{
		const accessCode = response.code;
		fetchUserName(accessCode);
	}

	useEffect(()=>{
		userName&&<Redirect to='/viewprofile'/>&&getProfile()
		console.log('effect1', userName)
	},[userName])

	useEffect (()=>{
		!userName&&isAuthenticated&&history.push('/createprofile')
		!isGraduate&&history.push('/notfound')
	},[ userName, isAuthenticated, isGraduate])

    const onFailure = response => console.error(response);  

	useEffect(getAllProfiles, []);

	return (
		<Screen>
			<Header>
				<Logo/>
				<GitHub clientId='d46845e5f1d464b34454' //this needs to change according to heroku app configs
				onSuccess={onSuccess}
				onFailure={onFailure}
				redirectUri={'https://designed-gd.herokuapp.com/login'}
				buttonText='Log in'
				/>
			</Header>
			<Introducing
				header = 'Lorem ipsum dolor sit amet'
				text = 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
		  />	
    		<Container>
				{isLoading ? <Text>Loading...</Text>
					: allProfiles && allProfiles.map(( profile, i ) => {
						return <OverviewProfileCard profile={ profile } getProfile={getProfile} key={ i } />;
					})}
				{error && <Text>{error}</Text>}
				{/* {profile&&<Redirect to='/viewdetail'/>} */}
			</Container>
		</Screen>
	)}

export default Home;

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    background-color:${(props)=>props.theme.colors.primaryMidGray};
    height:86px;
`;

const GitHub = styled(GitHubLogin)`
	height: 56px;
	width: 106px;
	border-radius: 2px;
	color:#fff;
	margin-right:15%;
	align-self:center;
	font-weight:bold;
	font-family: Arial;
	background-color:${(props)=>props.theme.colors.primaryGreen};		
`

const Screen =styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
`;

const Container = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	width:75%;
`;

const Text = styled.p`
	fontSize:20;
`;

