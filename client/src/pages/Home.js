import React, { useContext, useEffect } from "react";
import OverviewProfileCard from '../components/OverviewProfileCard';
import { ProfileContext } from '../context/ProfileContext';
import ViewProfileDetail from '../components/ViewProfileDetail';
import styled from 'styled-components';

const Home = () => {
	const { getProfiles, profiles, profile }= useContext(ProfileContext);

	useEffect(()=>{
		getProfiles();
	}, []);

	return (
		<Screen>
            This is Overview Page
			<Container>
				{profiles&&profiles.map((profile, i)=>{
					return (<OverviewProfileCard profile={profile} key={i} />);
				})
				}
				{profile&&<ViewProfileDetail />}
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



