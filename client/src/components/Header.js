import React, { useState, useEffect } from 'react';
import LogoName from '../constant/Logo';
import NavBar from './NavBar';
import styled from 'styled-components';
import Burger from '../constant/Burger';
import useMediaQuery from '../helpers/useMediaQuery';

const Header = ({ nav }) => {
	const [open, setOpen] = useState(false);
	const media = useMediaQuery();

	useEffect (()=>{
		media&&!media.isTablet&&setOpen(false);
	},[media]);

	return (
		<Container>
			<LogoName />
			{nav&&media && media.isTablet && <Burger open={open} setOpen={setOpen} />}
			{nav&&media && !media.isTablet && <NavBar open={open} />}
		</Container>
	);
};

export default Header;


const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    background-color:${(props)=>props.theme.colors.primaryMidGray};
    height:86px;
`;
