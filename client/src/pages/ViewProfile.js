import React, { useContext } from "react";
import styled from "styled-components";
import { ProfileContext } from '../context/ProfileContext';
import BasicDropDown from '../constant/BasicDropdown';
import ViewMyProfile from '../components/ViewMyProfile';


const ViewProfile = () => {
	const { profile }= useContext(ProfileContext);


	return (
		<Screen>
            <ViewMyProfile profile={profile} />
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