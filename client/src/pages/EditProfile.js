import React from 'react';
import styled from "styled-components";

import EditMyProfile from '../components/EditMyProfile';

const EditProfile = () => {
	return (
		<Container>
			<EditMyProfile />
		</Container>
	);
};

export default EditProfile;


const Container =styled.div`
    width:100%;
    min-height:100vh;
    background-color:#DFEDFA;
    display:flex;
    flex-direction:column;
    align-items:center;
`;