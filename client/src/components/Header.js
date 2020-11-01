import React, { useState, useContext } from 'react';
import LogoName from '../constant/Logo';
import UserNav from '../constant/UserNav'
import {AuthContext} from '../context/AuthContext'
import styled from 'styled-components';

const Header = ({ nav }) => {
	const [open, setOpen] = useState(false);

	const {isAuthenticated} = useContext(AuthContext)	

	return (
		<Container>
			<LogoName />
			{isAuthenticated&&<UserNav open={open} setOpen={setOpen}/>}
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
