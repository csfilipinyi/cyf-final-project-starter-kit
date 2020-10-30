import React from "react";
import GHIcon from "../assets/icons/GitHub-Mark-32px.png";
import styled from "styled-components";

const GitHubIcon = ({ gitHubLink }) => {
  return (
    <>
      <Container>
        <GitLink href={gitHubLink} target="blank">
          <GIcon src={GHIcon} />
        </GitLink>
      </Container>

      {/* <img src="../assets/icons/avatar.svg" /> */}
    </>
  );
};
export default GitHubIcon;

// const gitHubIcon = styled.img`
//   height: 32px;
//   width: 32px;
//   border: 1px solid #979797;
//   border-radius: 50%;
// `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15%;
`;

const GIcon = styled.img`
  width: 22px;
  height: 22px;
  color: #0090ff;
`;
const GitLink = styled.a`
  color: #0090ff;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;
