import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import {AuthContext} from '../context/AuthContext'
import {ProfileContext} from '../context/ProfileContext'
import Header from '../components/Header'
import BackButton from '../constant/BackButton'
import ViewMyProfile from '../components/ViewMyProfile'


const ViewProfile = () => {
    const {isAuthenticated} = useContext(AuthContext)
    const {getProfile} = useContext(ProfileContext)

    useEffect(getProfile,[])
	return (
		<Screen>
            <Header isAuthenticated={isAuthenticated}/>
            <BackButton isAuthenticated={isAuthenticated}/>
            <ViewMyProfile isAuthenticated={isAuthenticated}/>
		</Screen>
	);
};

export default ViewProfile;

const Screen =styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;