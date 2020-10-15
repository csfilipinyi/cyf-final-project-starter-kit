import React, { useContext } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { ProfileContext } from '../context/ProfileContext';
import avatar from '../assets/icons/avatar.svg';
import close from '../assets/icons/IconX.svg';

const ViewProfileDetail = () => {
	const { profile, clearProfile } = useContext(ProfileContext);
	console.log('prof', profile);
	const handleClick = ()=>{
		clearProfile();
	};

	return (
		<Container>
  			<Icon variant="top" src={close} onClick={handleClick} />
			<CardContainer>
				<Img variant="top" src={profile.img?profile.img:avatar} />
				<Card.Body>
					<Card.Title>{profile.name}</Card.Title>
					<Card.Text>
						{profile.email}
					</Card.Text>
				</Card.Body>
			</CardContainer>
		</Container>
	);
};

export default ViewProfileDetail;


const Container = styled.div`
    position:absolute;
    top:40%;
    left:40%;
    background-color:gray;
`;


const CardContainer =styled(Card)`
	diplay:flex;
	flex-direction:column;
	align-items:center;
	width: 18rem;

`;

const Img= styled(Card.Img)`
	width:10rem;
	margin-top:3px;
`;

const Icon =styled.img`
    position:absolute;
    top:2px;
    right:2px;
    width:20px;
    height:20px;
    z-index:5;
`;