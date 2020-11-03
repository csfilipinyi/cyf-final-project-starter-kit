import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledButton = (props) => {
	return (
		<StyleButton variant='success' className={props.className}
			onClick={props.handleClick}>
			{props.name}
		</StyleButton>
	);
};

export default StyledButton;


const StyleButton = styled(Button)`
    height: 40px;
    width: 110px;
    border-radius: 2px;
    color:#fff;
    margin-top:11px;
    font-size:12px;
    align-self:center;
    font-weight:bold;
    font-family: Arial;
    background-color:${(props)=>props.theme.colors.primaryGreen};
    border:none;
    transition:1.5s;
    &:hover{
        background-color:${(props)=>props.theme.colors.primaryGreen};
        border:0.5px solid black;
    }
    &.sm{
        height:56px;
        width:92px;
    }
    &.md{
        height:56px;
        width:113px;
        background-color:white;
        border:4px solid ${(props)=>props.theme.colors.primaryGreen};
        color:${(props)=>props.theme.colors.primaryGreen};
    }
    &.danger{
        height:56px;
        width:113px;
        background-color:red;
        border:4px solid ${(props)=>props.theme.colors.primaryGreen};
        color:white;
    }
    &.lg{
        height:56px;
        width:155px;
        color: #FFFFFF;
        font-family: Arial;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 26px;
    }
    &:active{
        background-color:#red;
        border:0.5px solid black;
    }
`;



