import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const LogoName = () => {
	return (
		<Container>
			<Logo src={logo} />
			<Name to='/' >Code Your Future</Name>
		</Container>
	);
};

export default LogoName;

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
`;

const Logo = styled.img`
    width:90px;
    height:60px;
    margin-left:10px;
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