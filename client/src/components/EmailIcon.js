import React from "react";
import EIcon from "../assets/icons/iconfinder_icon-email_211660.svg";
import styled from "styled-components";

const EmailIcon = () => {
  return (
    <>
      <Container>
        <Circle>
          <EmIcon src={EIcon} />
        </Circle>
      </Container>
    </>
  );
};
export default EmailIcon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15%;
`;
const Circle = styled.div`
  border-radius: 50%;
  height: 23px;
  width: 23px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const EmIcon = styled.img`
  width: 20px;
  height: 20px;
  color: #0090ff;
`;
