import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import ViewSkills from '../components/ViewSkills';
import StyledButton from '../constant/StyledButton';
import avatar from '../assets/icons/avatar.svg';
import { useHistory } from 'react-router-dom';


const OverviewProfileCard = ({ profile, getProfile }) => {
	let history = useHistory()

	const handleClick = async(id)=>{
		await getProfile(id)
		history.push('/viewdetail')
	};

	return (
		<CardContainer>
			{/* <Img variant="top" src={profile.img||avatar} /> */}
			<Img />
			<CardBody>
				<CardTitle>{profile.first_name} {profile.surname}</CardTitle>
				<CardText>
				{profile.location}
				</CardText>
				<CardText>
				{profile.about_me}
				</CardText>
				<CardText>
				{profile.interest1}{profile.interest2&& `, ${profile.interest2}`}{profile.interest3&& `, ${profile.interest3}`}
				</CardText>
				{/* <ViewSkills skills={profile.skills} /> */}
				<StyledButton name='View Profile' handleClick={()=>handleClick(`${profile.github_id}`)} />
			</CardBody>
		</CardContainer>
	);
};

export default OverviewProfileCard;


const CardContainer =styled(Card)`
	diplay:flex;
	flex-direction:column;
	align-items:center;
	font-family:Lato;
	background-color:${(props)=>props.theme.colors.primaryLightGray};
	box-sizing: border-box;
	height: 401px;
	width: 248px;
	border: 1px solid #E8E8E8;
	border-radius: 5px;
	box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
	margin:48px 18px 10px 18px;
`;

const CardBody =styled(Card.Body)`
	display:flex;
	flex-direction:column;
	align-items:center;
`;

const CardTitle = styled(Card.Title)`
	font-family:Lato;
	margin-top:0;
	padding-top:0;
	font-weight:bold;
	font-size: 20px;
	color: #000000;
	letter-spacing: 0;
  	line-height: 24px;
`;

const CardText=styled(Card.Text)`
	font-size: 16px;
	font-family:Lato;
`;

// const Img= styled(Card.Img)`
// 	width:88px;
// 	margin-top:3px;
// `;

const Img=styled.div`
	margin:24px;
	height: 88px;
	width: 88px;
	border-radius: 64px;
	background-color: #D8D8D8;
`;