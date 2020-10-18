import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import StyledButton from '../constant/StyledButton';
import avatar from '../assets/icons/avatar.svg';


const OverviewProfileCard = ({ profile, getProfile }) => {

	const handleClick = (id)=>{
		getProfile(id);
	};

	return (
		<Container>
			<CardContainer>
				<Img variant="top" src={profile.img||avatar} />
				<Card.Body>
					<Card.Title>{profile.name}</Card.Title>
					<Card.Text>
						{profile.email}
					</Card.Text>
					<StyledButton name='View Detail' handleClick={()=>handleClick(`${profile.id}`)} />
				</Card.Body>
			</CardContainer>
		</Container>
	);
};

export default OverviewProfileCard;


const Container = styled.div`
    margin:20px;
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