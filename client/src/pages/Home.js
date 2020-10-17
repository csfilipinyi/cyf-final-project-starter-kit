import React, { useContext, useEffect } from "react";
import OverviewProfileCard from '../components/OverviewProfileCard';
import { ProfileContext } from '../context/ProfileContext';
import ViewProfileDetail from '../components/ViewProfileDetail';
import Header from '../components/Header';
import styled from 'styled-components';

const Home = () => {
	const { getProfiles, profiles, profile }= useContext(ProfileContext);

	useEffect(()=>{
		getProfiles();
	}, []);

	return (
		<Screen>
			<Header />
			<Container>
				{profiles&&profiles.map((profile, i)=>{
					return (<OverviewProfileCard profile={profile} key={i} />);
				})}
				{profile&&<ViewProfileDetail />}
			</Container>
		</Screen>
	);
};


export default Home;

const Screen =styled.div`

`;

const Container = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
`;