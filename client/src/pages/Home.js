import React, { useContext, useEffect } from "react";
import OverviewProfileCard from '../components/OverviewProfileCard';
import ViewProfileDetail from '../components/ViewProfileDetail';
import { ProfileContext } from '../context/ProfileContext';
import Header from '../components/Header';
import styled from 'styled-components';

const Home = () => {
	const { getAllProfiles, getProfile, clearProfile, allProfiles, profile, isLoading, error }= useContext(ProfileContext);

	useEffect(getAllProfiles, []);

	return (
		<Screen>
			<Header />
			<Container>
				{console.log('isLoading', isLoading)}
				{isLoading ? <Text>Loading...</Text>
					: allProfiles && allProfiles.map(( profile, i ) => {
						return <OverviewProfileCard profile={ profile } getProfile={getProfile} key={ i } />;
					})}
				{error && <Text>{error}</Text>}
				{profile&&<ViewProfileDetail clearProfile={clearProfile} profile={profile} />}
			</Container>
		</Screen>



export default Home;

const Screen =styled.div`

`;

const Container = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
`;

const Text = styled.p`
	fontSize:20;
`;

