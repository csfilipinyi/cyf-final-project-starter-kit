import React from "react";
import LDIcon from "../assets/icons/linkedin-round-line.svg";
import styled from "styled-components";

const LinkedinIcon = () => {
  return (
    <>
      <Container>
        <LIcon src={LDIcon} />
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
