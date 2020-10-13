import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const StyledButton = (props) => {
	return (
		<StyleButton className={`btn btn-outline-light ${props.class}`} bsPrefix="super-btn"
			onClick={props.handleClick}>
			{props.name}
		</StyleButton>
	);
};

export default StyledButton;


const StyleButton = styled(Button)`
    height:36px;
    color:#fff;
    margin:5px;
    align-self:center;
    font-weight:500;
    background-color:#021E39;
    border:none;
    transition:1.5s;
    &:hover{
        background-color:#7FB3D5;
        border:0.5px solid black;
    }
    &.sm{
        height:28px;
        width:45px;
        font-size:0.5rem;
        padding:0;
    }
    &.lg{
        height:40px;
        width:120px;
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


