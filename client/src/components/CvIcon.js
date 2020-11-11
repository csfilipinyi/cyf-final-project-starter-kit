import React from "react";
import CIcon from "../assets/icons/earth-globe-grid-interface-symbol.svg";
import styled from "styled-components";

const CvIcon = ({CvLink}) => {
  return (
    <>
      <Container>
       <CVLink href={CvLink} target="_blank">
        <CVIcon src={CIcon} />
        </CVLink>
      </Container>
    </>
  );
};
export default CvIcon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CVIcon = styled.img`
  width: 22px;
  height: 22px;
  color: #0090ff;
`;


const CVLink = styled.a`
  color: #0090ff;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;
