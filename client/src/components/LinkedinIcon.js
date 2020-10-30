import React from "react";
import LDIcon from "../assets/icons/linkedin-round-line.svg";
import styled from "styled-components";

const LinkedinIcon = ({ linkedinLink }) => {
  return (
    <>
      <Container>
        <LinkedinLink href={linkedinLink} target="blank">
          <LIcon src={LDIcon} />
        </LinkedinLink>
      </Container>
    </>
  );
};
export default LinkedinIcon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15%;
`;

const LIcon = styled.img`
  width: 22px;
  height: 22px;
  color: #0090ff;
`;
const LinkedinLink = styled.a`
  color: #0090ff;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;
