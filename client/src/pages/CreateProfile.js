import React from "react";
import styled from "styled-components";
import GraduateForm from "../components/GraduateForm";

const CreateProfile = () => {
	return (
		<Container>
			<h1>Create My Profile</h1>
			<GraduateForm />
		</Container>
	);
};

export default CreateProfile;

const Container =styled.div`
    width:100%;
    min-height:100vh;
    background-color:#DFEDFA;
    display:flex;
    flex-direction:column;
    align-items:center;
`;