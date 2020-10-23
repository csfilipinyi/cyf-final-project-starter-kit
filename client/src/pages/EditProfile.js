import React from 'react';
import styled from "styled-components";
import GraduateForm from "../components/GraduateForm";
import Header from '../components/Header';
import Introducing from '../components/Introducing';

const EditProfile = () => {
	return (
		<Screen>
			<Header />
			<Container>
				<Introducing
					header = 'Edit your profile'
				/>
				<GraduateForm />
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
