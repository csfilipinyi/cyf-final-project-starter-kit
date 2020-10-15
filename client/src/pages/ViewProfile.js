import React, { useContext } from "react";
import styled from "styled-components";
import { ProfileContext } from '../context/ProfileContext';
import BasicDropDown from '../constant/BasicDropdown';
import DisplayMyProfile from '../components/DisplayMyProfile';
import EditMyProfile from '../components/EditMyProfile';


const CreateProfile = () => {
	const { profile, edit }= useContext(ProfileContext);


	return (
		<Screen>
			{!profile&&<BasicDropDown />}
			{profile&&!edit&&<DisplayMyProfile />}
			{edit&&<EditMyProfile />}
		</Screen>
	);
};

export default CreateProfile;

const Screen =styled.div`
    width:100%;
    min-height:100vh;
    background-color:#DFEDFA;
    display:flex;
    flex-direction:column;
    align-items:center;
`;