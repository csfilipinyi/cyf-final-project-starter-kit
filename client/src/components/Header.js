import React, { useState, useEffect } from 'react';
import LogoName from '../constant/Logo';
import NavBar from './NavBar';
import styled from 'styled-components';
import Burger from '../constant/Burger';
import useMediaQuery from '../helpers/useMediaQuery';

const Header = () => {
	const [open, setOpen] = useState(false);
	const media = useMediaQuery();

	useEffect (()=>{
		media&&!media.isTablet&&setOpen(false);
	},[media]);
	return (
		<Container>
			<LogoName />
			{media && media.isTablet && <Burger open={open} setOpen={setOpen} />}
			{media && !media.isTablet && <NavBar open={open} />}
		</Container>
	);
};

export default Header;


const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    background-color:transparent;
    height:70px;
    transition:border-bottom, 2s;
    &:hover {
        border-bottom:1px solid #EFF3F7;
    }
`;
