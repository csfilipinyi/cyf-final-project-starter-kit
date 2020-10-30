import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ProfileContext } from "../context/ProfileContext";
import styled from "styled-components";
import StyledButton from "../constant/StyledButton";

const ViewMyProfile = ({ profile }) => {
  let history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);

  console.log("pro", profile);

  const handleClick = () => {
    history.push("/editprofile");
  };

  return (
    <Container>
      <Circle />
      <SubCon>
        <Name>
          {profile.first_name} {profile.surname}
        </Name>
        <Description>{profile.location}</Description>
        <DescHead>About Me</DescHead>
        <Description>{profile.about_me}</Description>
        <SubHeads> {profile.first_name}'s Interests</SubHeads>
        <Description>{profile.interest}</Description>
        <SubHeads>{profile.first_name}’s skills</SubHeads>
        <SkillsContainer>
          {profile.skills &&
            profile.skills.map((skill) => {
              return <SkillBox>{skill}</SkillBox>;
            })}
        </SkillsContainer>
        <SubHeads>Find {profile.first_name}</SubHeads>
        <SocialCon>
          <SocialSubCon>
            <SocialIcon />
            <SocialText href={profile.linkedin_link} target="blank">
              LinkedIn
            </SocialText>
          </SocialSubCon>
          <SocialSubCon>
            <SocialIcon />
            <SocialText href={profile.github_link} target="blank">
              GitHub
            </SocialText>
          </SocialSubCon>
          <SocialSubCon>
            <SocialIcon />
            <SocialText href={profile.portfolio_link} target="blank">
              Portfolio
            </SocialText>
          </SocialSubCon>
        </SocialCon>
      </SubCon>
    </Container>
  );
};

export default ViewMyProfile;

const Container = styled.div`
  display: flex;
  width: 70%;
  margin: 48px 15%;
`;

const Circle = styled.div`
  height: 100px;
  width: 157px;
  background-color: #d8d8d8;
  border-radius: 50%;
`;

const SubCon = styled.div`
  margin-left: 36px;
`;

const Name = styled.p`
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

const Description = styled.p`
  color: #000000;
  font-family: Lato;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 30px;
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
  margin-bottom: 40px;
`;

const SkillBox = styled.div`
  border: 1px solid #dedede;
  border-radius: 2px;
  background-color: #f3f3f3;
  margin-right: 16px;
`;

const SocialCon = styled.div``;

const SocialSubCon = styled.div`
  display: flex;
`;

const SocialIcon = styled.img`
  height: 32px;
  width: 32px;
  border: 1px solid #979797;
  background-color: #d8d8d8;
  border-radius: 50%;
`;

const SocialText = styled.a`
  color: #0090ff;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;
