import React, {useContext} from "react";
import styled from "styled-components";
import GraduateForm from "../components/GraduateForm";
import Header from '../components/Header';
import Introducing from '../components/Introducing';
import { ProfileContext } from '../context/ProfileContext';


const CreateProfile = () => {
	const { addProfile, profile}  = useContext(ProfileContext);
	const handleClick =(newprofile)=>{
		addProfile(newprofile);
	}
	return (
		<Screen>
			<Header />
			<Container>
				<Introducing
					header = 'Create your profile'
					text = 'Consectetur adipiscing elit, sed do eiusmod tempor'
				/>
				<GraduateForm handleClick={handleClick} profile={profile}/>
			</Container>
		</Screen>
	);
};

export default CreateProfile;

const Screen =styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
`;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    margin-left:15%;
`;


