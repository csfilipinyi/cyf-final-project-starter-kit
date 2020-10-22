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
				<Circle>
					<IUser src={IconUser} alt='User'/>
				</Circle>
				<Text>Your Profile</Text>
				{open?
				<IArrow src={IconUp} alt='Arrow' onClick={() => setOpen(!open)}/>
				:
				<IArrow src={IconDown} alt='Arrow' onClick={() => setOpen(!open)}/>
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

const Circle = styled.div`
	border-radius:50%;
	height: 36px;
	width: 36px;
	border:1px solid #0090FF;
	display:flex;
	justify-content:center;
	align-items:center;
`

const IUser = styled.img`
	width:30px;
	height:30px;
	margin-right:8px;
`;

const IArrow = styled.img`
	width:16px;
	height:10px;
	margin-left:10px;
`;

const Text = styled.p`
	color: #0090FF;
  	font-family: Raleway;
  	font-size: 18px;
  	font-weight: bold;
  	letter-spacing: 0;
  	line-height: 21px;
`

