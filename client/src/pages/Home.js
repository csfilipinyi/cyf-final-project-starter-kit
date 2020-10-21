import React, { useContext, useEffect } from "react";
import OverviewProfileCard from '../components/OverviewProfileCard';
import ViewProfileDetail from '../components/ViewProfileDetail';
import Introducing from '../components/Introducing';
import { ProfileContext } from '../context/ProfileContext';
import { AuthContext } from '../context/ProfileContext';
import Header from '../components/Header';
import styled from 'styled-components';
import GitHubLogin from "react-github-login";
import {graduates, graduateProfile} from '../api/graduates'


const Home = () => {
	const { getAllProfiles, getProfile, clearProfile, allProfiles, profile, isLoading, error }= useContext(ProfileContext);
	const { checkGraduate, isAuthenticated, setIsAuth }= useContext(AuthContext);

	const onSuccess =  (response) =>{
		const accessCode = response.code;
		console.log('acces', accessCode)
	  fetch(`https://dev-graduate-directory.herokuapp.com/api/callback?code=${accessCode}`)
      .then(res => res.json())
      .then(data => {
		  const graduatesList = graduates()
		  graduatesList.includes(data)&&setIsAuth(data)
		  console.log(data);
			//checkGraduate(data) will be called here
	   })
	}
    const onFailure = response => console.error(response);  

	useEffect(getAllProfiles, []);

	return (
		<Screen>
			<Header nav='nav' />
			<Introducing
				header = 'Lorem ipsum dolor sit amet'
				text = 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
		  />	
      	<GitHubLogin clientId='d46845e5f1d464b34454' //this needs to change according to heroku app configs
			onSuccess={onSuccess}
			onFailure={onFailure}
			redirectUri={'https://gd-auth-test.herokuapp.com/createprofile'}
			/>
			<Container>
				{isLoading ? <Text>Loading...</Text>
					: allProfiles && allProfiles.map(( profile, i ) => {
						return <OverviewProfileCard profile={ profile } getProfile={getProfile} key={ i } />;
					})}
				{error && <Text>{error}</Text>}
				{profile&&<ViewProfileDetail clearProfile={clearProfile} profile={profile} />}
			</Container>
		</Screen>
	)}

export default Home;

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

