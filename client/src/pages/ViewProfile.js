import React from "react";
import styled from "styled-components";
import Header from '../components/Header'
import BackButton from '../constant/BackButton'
import ViewMyProfile from '../components/ViewMyProfile'


const ViewProfile = () => {
	return (
		<Screen>
            <Header/>
            <BackButton/>
            <ViewMyProfile />
		</Screen>
	);
};

export default ViewProfile;

const Screen =styled.div`
    width:100%;
    min-height:100vh;
    background-color:#DFEDFA;
    display:flex;
    flex-direction:column;
    align-items:center;
`;