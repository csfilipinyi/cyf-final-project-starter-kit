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
    &.danger-sm{
        height:56px;
        width:110px;
        font-family: Arial;
        font-size: 16px;
        font-weight: bold;
        margin:5px;
        background-color:red;
    }
    &.success-sm{
        height:56px;
        width:110px;
        font-family: Arial;
        font-size: 16px;
        font-weight: bold;
        margin:5px;
        background-color:green;
    }
    &.danger-md{
        height:60px;
        width:160px;
        font-family: Arial;
        font-size: 16px;
        font-weight: bold;
        margin:5px;
        background-color:red;
    }
    &.success-md{
        height:60px;
        width:160px;
        font-family: Arial;
        font-size: 16px;
        font-weight: bold;
        margin:5px;
        background-color:green;
    }
    &.cancel{
        height:56px;
        width:110px;
        background-color:white;
        border:4px solid ${(props)=>props.theme.colors.primaryGreen};
        color:${(props)=>props.theme.colors.primaryGreen};
        font-family: Arial;
        font-size: 16px;
        font-weight: bold;
        margin:5px;
    }
    &.cancel-md{
        height:60px;
        width:160px;
        background-color:white;
        border:4px solid ${(props)=>props.theme.colors.primaryGreen};
        color:${(props)=>props.theme.colors.primaryGreen};
        font-family: Arial;
        font-size: 16px;
        font-weight: bold;
        margin:5px;
    }
    &:active{
        background-color:#red;
        border:0.5px solid black;
    }
`;



