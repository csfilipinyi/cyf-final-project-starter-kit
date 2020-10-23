import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

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
    height: 56px;
    width: 220px;
    border-radius: 2px;
    color:#fff;
    margin:5px;
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
    &.lg{
        height:40px;
        width:155px;
        font-size:0.8rem;
        padding:0;
        margin-top:20px;
    }
    &:active{
        background-color:#red;
        border:0.5px solid black;
    }
`;

StyleButton.propTypes = {
	name: PropTypes.string.isRequired,
};


