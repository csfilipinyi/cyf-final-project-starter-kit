import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ViewSkills from "../components/ViewSkills";
import StyledButton from "../constant/StyledButton";
// import avatarIcon from "../assets/icons/avatar.svg";
import { useHistory } from "react-router-dom";
import GitHubIcon from "./GitHubIconIcon.js";
import LinkedinIcon from "./LinkedinIcon";
import CvIcon from "./CvIcon";
import EmailIcon from "./EmailIcon";

const OverviewProfileCard = ({ profile, getProfile}) => {
  let history = useHistory();

  const handleClick = async (id) => {
    await getProfile(id);
    history.push(`/viewdetail/${profile.first_name}`);
  };
  return (
    <CardContainer>
      <Img src={profile.avatar_url}/>
      <CardBody>
        <CardTitle>
          {profile.first_name} {profile.surname}
        </CardTitle>
        <SubContainer>
          {profile.about_me&&<CardText>{profile.about_me}</CardText>}
        </SubContainer>
        <SubContainer>
         {profile.about_me&&<CardText>{profile.interest}</CardText>}
        </SubContainer>
        {/* {profile.skills&&<ViewSkills skills={profile.skills} />} */}
        <IconContainer>
          <GitHubIcon gitHubLink={profile.github_link}></GitHubIcon>
          <LinkedinIcon linkedinLink={profile.linkedin_link}></LinkedinIcon>
          <CvIcon></CvIcon>
          <EmailIcon></EmailIcon>
        </IconContainer>
        <StyledButton
          name="View Profile"
          handleClick={() => handleClick(`${profile.github_id}`)}
        />
      </CardBody>
    </CardContainer>
  );
};

export default OverviewProfileCard;

const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Lato;
  background-color: ${(props) => props.theme.colors.primaryLightGray};
  box-sizing: border-box;
  height: 401px;
  width: 248px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  margin: 48px 18px 10px 18px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;
  margin-bottom:3px 0 3px 0;
  width:90%;
`;

const SubContainer = styled.div`
  display: flex;
  height: 65px;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled(Card.Title)`
  font-family: Lato;
  margin-top: 0;
  padding-top: 0;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  line-height: 24px;
`;

const CardText = styled(Card.Text)`
  font-size: 16px;
  font-family: Lato;
  text-align: center;
`;

const Img= styled(Card.Img)`
  width:88px;
  height:88px;
  border-radius:50%;
	margin-top:3px;
`;

