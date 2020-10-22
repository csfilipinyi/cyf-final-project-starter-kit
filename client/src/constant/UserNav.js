import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import IconUser from '../assets/icons/user.svg';
import IconArrow from '../assets/icons/IconArrowUp.svg';

const UserNav = ({ open, setOpen, ...props }) => {
	return (
		<>
			<div>
				<IconUser src={IconUser} alt='User'/>
				<Text>Your Profile</Text>
				<IconUser src={IconArrow} alt='User' onClick={() => setOpen(!open)}/>
			</div>
			{open&&<NavBar open={open} />}
		</>
	);
};

export default UserNav;


const IconUser = styled.img`
   margin-right:20px;
   &.close{
       margin-right:10px;
       z-index:2;
   }
`;


const Text = styled.p`

`

