import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import IconUser from '../assets/icons/user.svg';
import IconUp from '../assets/icons/IconArrowUp.svg';
import IconDown from '../assets/icons/IconArrowDown.svg'

const UserNav = ({ open, setOpen, ...props }) => {
	return (
		<>
			<Container>
				<IUser src={IconUser} alt='User'/>
				<Text>Your Profile</Text>
				{open?
				<IArrow src={IconDown} alt='User' onClick={() => setOpen(!open)}/>
				:
				<IArrow src={IconUp} alt='User' onClick={() => setOpen(!open)}/>
				}
			</Container>
			{open&&<NavBar open={open} />}
		</>
	);
};

export default UserNav;

const Container = styled.div`
	display:flex;
	margin-right:15%;
`
const IUser = styled.img`
	width:14px;
	height:14px;
	margin-right:8px;
`;

const IArrow = styled.img`
	width:16px;
	height:10px;
	margin-left:10px;
`;

const Text = styled.p`
	color: #424344;
  	font-family: Raleway;
  	font-size: 18px;
  	font-weight: bold;
  	letter-spacing: 0;
  	line-height: 21px;
`

