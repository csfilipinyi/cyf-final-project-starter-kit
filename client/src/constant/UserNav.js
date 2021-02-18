import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import IconUser from '../assets/icons/user.svg';
import IconUserBlue from '../assets/icons/user_blue.svg';
import IconUp from '../assets/icons/IconArrowUp.svg';
import IconDown from '../assets/icons/IconArrowDown.svg'

const UserNav = ({ open, setOpen, ...props }) => {

	return (
		<>
			<Container onClick={() => setOpen(!open)}>
				<Circle style={{borderColor:open?'#0090FF':'black'}}>
				{open?
				<IUser src={IconUserBlue} alt='User'/>
				:
				<IUser src={IconUser} alt='User'/>
				}
					
				</Circle>
				<Text style={{color:open?'#0090FF':'black'}}>Your Profile</Text>
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
	justify-content:center;
	align-items:center;
	margin-right:15%;
`

const Circle = styled.div`
	border-radius:50%;
	height: 38px;
	width: 38px;
	border:3px solid #0090FF;
	display:flex;
	justify-content:center;
	align-items:center;
	margin-right:8px;
`

const IUser = styled.img`
	width:22px;
	height:22px;
	color:#0090FF;
`;

const IArrow = styled.img`
	width:16px;
	height:10px;
	margin-left:10px;
`;

const Text = styled.p`
  	font-family: Raleway;
  	font-size: 18px;
  	font-weight: bold;
  	letter-spacing: 0;
	line-height: 21px;
	margin-top:10px;  
`

