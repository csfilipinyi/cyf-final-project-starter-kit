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

const ViewMyProfile = (props) => {

  let history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);
  const { profile} = useContext(ProfileContext);

  const handleClick = () => {
    history.push("/profile/edit");
  };

  return (
    <>{profile&&<Container>
      <Img src={profile.avatar_url}/>
      <SubCon>
        {profile.first_name&&profile.surname&&<Name>
        {profile.first_name} {profile.surname}
        {profile.is_hired && <HiredLabel>Hired</HiredLabel>}
        </Name>}
        {profile.location&&<Description>{profile.location}</Description>}
        <IconContainer>
        {profile.github_link&&<GitHubIcon gitHubLink={profile.github_link}></GitHubIcon>}
        {profile.linkedin_link&&<LinkedinIcon linkedinLink={profile.linkedin_link}></LinkedinIcon>}
          <CvIcon></CvIcon>
          <EmailIcon singleProfile={profile}></EmailIcon>
        </IconContainer>
        <DescHead>About Me</DescHead>
        {profile.about_me&&<Description>{profile.about_me}</Description>}
        {profile.first_name&&<SubHeads> {profile.first_name}'s Interests</SubHeads>}
        {profile.interest&&<Description>{profile.interest}</Description>}
        {profile.first_name&&<SubHeads>{profile.first_name}’s skills</SubHeads>}
        <SkillsContainer>
          {profile.skills && profile.skills.map((skill) => {
            return <SkillBox>{skill}</SkillBox>;
          })}
        </SkillsContainer>
        {profile.first_name&&<SubHeads>{profile.first_name}'s Portfolio</SubHeads>}
        {profile.portfolio_link&&<SocialText href={profile.portfolio_link} target="blank">
          Portfolio
        </SocialText>}
        {profile.statement&&<ContainerStatement>
          <DescHeadPS>Personal Statement</DescHeadPS>
          <RichEditorReader/>
        </ContainerStatement>}
      </SubCon>
    </Container>}
    </>
  );
};

export default ViewMyProfile;

const Container = styled.div`
  display: flex;
  width: 70%;
  margin: 48px 15%;
`;

const ContainerStatement = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;  
  align-items:flex-start;
  width:100%;
  margin-top:30px;
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
  width:160px;
  height:160px;
	border-radius:50%;
`;


const SubCon = styled.div`
  margin-left: 40px;
`;

const Name = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:0 5px 5px 0;
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
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;

const DescHeadPS = styled.p`
  color: #000000;
  font-family: Lato;
  font-size: 20px;
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
  margin-bottom: 20px;
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
  justify-content:space-between;
  width:200px;
  margin-bottom: 20px;
`;
