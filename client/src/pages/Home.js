import React, { useContext, useEffect } from "react";
import OverviewProfileCard from '../components/OverviewProfileCard';
import ViewProfileDetail from '../components/ViewProfileDetail';
import Introducing from '../components/Introducing';
import { ProfileContext } from '../context/ProfileContext';
import Header from '../components/Header';
import styled from 'styled-components';

const Home = () => {
	const { getAllProfiles, getProfile, clearProfile, allProfiles, profile, isLoading, error }= useContext(ProfileContext);

	useEffect(getAllProfiles, []);

	return (
		<Screen>
			<Header nav='nav' />
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
				{profile&&<ViewProfileDetail clearProfile={clearProfile} profile={profile} />}
			</Container>
		</Screen>
	);
};


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