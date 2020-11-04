import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import GraduateForm from "../components/GraduateForm";
import Header from '../components/Header';
import Introducing from '../components/Introducing';
import { ProfileContext } from '../context/ProfileContext';
import { AuthContext } from '../context/AuthContext';
import AskDelete from '../components/AskDelete'


const EditProfile = () => {
	const { editProfile, deleteProfile, profile}  = useContext(ProfileContext);
	const { logOut }  = useContext(AuthContext);
	let history=useHistory()
	
	const [askDelete, setAskDelete]= useState(false)
	const handleClick =(newprofile)=>{
		editProfile(newprofile);
	}

	const askBeforeDelete =()=>{
		setAskDelete(true)
	  }
	  
	const cancelDelete = ()=>{
	setAskDelete(false)
	}

	const handleDelete = async()=>{
		await deleteProfile(profile.github_id)
		await logOut()
		history.push('/')
	}

	return (
		<Screen>
			<Header />
			<Container>
				{askDelete?
				<AskDelete handleDelete={handleDelete} cancelDelete={cancelDelete}/>
					:
				<>
					<Introducing
						header = 'Edit your profile'
					/>
					<GraduateForm handleClick={handleClick} profile={profile} askBeforeDelete={askBeforeDelete}/>
				</>}
			</Container>
		</Screen>
	);
};

export default EditProfile;

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
