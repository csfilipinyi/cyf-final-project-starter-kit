import React, { useState, useContext, useRef } from 'react';
import LogoName from '../constant/Logo';
import UserNav from '../constant/UserNav'
import AdminNav from '../constant/AdminNav'
import {AuthContext} from '../context/AuthContext'
import styled from 'styled-components';

const Header = ({ nav }) => {
	const [open, setOpen] = useState(false);

	const {isAuthenticated, isAdmin} = useContext(AuthContext)	
	
   
	return (
		<Container>
			<LogoName />
			{isAuthenticated&&!isAdmin&&<UserNav open={open} setOpen={setOpen}/>}
			{isAdmin&&<AdminNav open={open} setOpen={setOpen}/>}

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
