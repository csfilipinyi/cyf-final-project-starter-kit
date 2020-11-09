import React, {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import {AuthContext} from '../context/AuthContext'
import {ProfileContext} from '../context/ProfileContext'

const LogoName = () => {
    const {isAuthenticated} = useContext (AuthContext)
    const {getAllProfiles, allProfiles} = useContext (ProfileContext)

    let history = useHistory()

    const handleClick = async ()=>{
        console.log('logo clicked', {allProfiles})
        await getAllProfiles();
        if (allProfiles&&isAuthenticated){
            console.log('logo clicked', {allProfiles})
            history.push('/profiles')
        } else {
            history.push('/')
        }
    }
    
    return (
      <Logo src={logo} onClick={handleClick}/>
    );
};

export default LogoName;

const Logo = styled.img`
    width:200px;
    height:60px;
    margin-left:15%;
    @media (max-width: 680px) {
        width:75px;
        height:45px;
    }
`;

const Name = styled(Link)`
    text-decoration:none;
    font-weight:bold;
    font-size:2rem;
    color:'#EFF3F7';
    &:hover{
        text-decoration:none;
        color:'#EFF3F7';
    }
    @media (max-width: 680px) {
        font-size:1.5rem;
    }
    @media (max-width: 375px) {
        font-size:1rem;

    }
`;