import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ProfileContext } from "../context/ProfileContext";
import styled from "styled-components";
import GitHubIcon from "./GitHubIconIcon.js";
import LinkedinIcon from "./LinkedinIcon";
import CvIcon from "./CvIcon";
import EmailIcon from "./EmailIcon";
import RichEditorReader from '../constant/RichEditorReader'

const ViewMyProfile = ({ profile }) => {

  let history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);

  const handleClick = () => {
    history.push("/editprofile");
  };

  return (
    <Container>
      <ContainerLeft>
          <Img src={profile.avatar_url}/>
          <SubCon>
            <Name>
            {profile.first_name} {profile.surname}
            {profile.is_hired && <HiredLabel>Hired</HiredLabel>}
            </Name>
            <Description>{profile.location}</Description>
            <IconContainer>
              <GitHubIcon gitHubLink={profile.github_link}></GitHubIcon>
              <LinkedinIcon linkedinLink={profile.linkedin_link}></LinkedinIcon>
              <CvIcon></CvIcon>
              <EmailIcon></EmailIcon>
            </IconContainer>
            <DescHead>About Me</DescHead>
            <Description>{profile.about_me}</Description>
            <SubHeads> {profile.first_name}'s Interests</SubHeads>
            <Description>{profile.interest}</Description>
            <SubHeads>{profile.first_name}’s skills</SubHeads>
            <SkillsContainer>
              {profile.skills && profile.skills.map((skill) => {
                return <SkillBox>{skill}</SkillBox>;
              })}
            </SkillsContainer>
            <SubHeads>{profile.first_name}'s Portfolio</SubHeads>
            <SocialText href={profile.portfolio_link} target="blank">
              Portfolio
            </SocialText>
          </SubCon>
        </ContainerLeft>
        {profile.statement&&<ContainerRight>
          <DescHeadPS>Personal Statement</DescHeadPS>
          <RichEditorReader/>
        </ContainerRight>}
    </Container>
  );
};

export default ViewMyProfile;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 70%;
  margin: 48px 15%;
`;

const ContainerLeft = styled.div`
  display:flex;
  width:100%;
`
const ContainerRight = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  align-self:center;
  margin-top:50px;
  margin-left:50px;
  width:80%;
  padding:10px;
`
const HiredLabel = styled.div`
    width:60px;
    height:30px;
    background-color:#1E90FF;
    text-align:center;
    height: 19px;
    color: #FFFFFF;
    font-family: Lato;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 19px;
    margin-left:30px;
`

const Img= styled.img`
  width:157px;
  height:157px;
	border-radius:50%;
`;


const SubCon = styled.div`
  margin-left: 36px;
`;

const Name = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-right:5px;
  color: #000000;
  font-family: Lato;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 29px;
`;
const DescHead = styled.p`
  color: #000000;
  font-family: Lato;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;

const DescHeadPS = styled.p`
  color: #000000;
  font-family: Lato;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align:center;
`;

const Description = styled.p`
  color: #000000;
  font-family: Lato;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 20px;
  ${"" /* text-align: center; */}
`;
const SubHeads = styled.p`
  color: #000000;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;

const SkillsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SkillBox = styled.div`
  border: 1px solid #dedede;
  border-radius: 2px;
  background-color: #f3f3f3;
  margin-right: 16px;
`;

// const SocialCon = styled.div``;

// const SocialSubCon = styled.div`
//   display: flex;
// `;

// const SocialIcon = styled.img`
//   height: 32px;
//   width: 32px;
//   border: 1px solid #979797;
//   background-color: #d8d8d8;
//   border-radius: 50%;
// `;

const SocialText = styled.a`
  color: #0090ff;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content:space-around;
  width:120px;
  margin-bottom: 20px;
`;
