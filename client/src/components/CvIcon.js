import React from "react";
import CIcon from "../assets/icons/earth-globe-grid-interface-symbol.svg";
import styled from "styled-components";

const CvIcon = ({CvLink}) => {
  return (
    <>
      <Container>
        <CVIcon src={CIcon} href={CvLink}/>
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
