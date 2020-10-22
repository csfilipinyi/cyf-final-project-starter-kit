import React from 'react';
// import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({ open }) => {
	return (
		<Navigator className={open ? 'open' : null}>
			<StyledList className={open ? 'open' : null}>
                <StyledNavLink exact to='/viewprofile'>
                    View Your Profile
				</StyledNavLink>
                <StyledNavLink exact to='/editprofile'>
                    Edit Your Profile
				</StyledNavLink>
				<StyledNavLink exact to='/'>
                    Log out
				</StyledNavLink>
			</StyledList>
		</Navigator>
	);
};

export default NavBar;




const Navigator = styled.div`
    display:flex;
    margin-right:15%;
    margin-top:5px;
    &.open{
        flex-directon:column;
        position:absolute;
        right:0px;
        top:100px;
        width:252px;
        height:165px;
        align-items:flex-start;
        justify-content:flex-start;
        background-color: #FAFAFA;
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
        z-index:1;
    }
`;

const StyledList = styled.ul`
    list-style-type:none;
    display:flex;
    justify-content:space-around;
    width:100%;
    li{
        font-size:13px;
        line-height:18px;     
        &:last-child{
            display:flex;
            align-self:center;
            margin-left:auto;
        }
    }
    &.open{
        flex-direction:column;
        margin-left:0;
        padding-left:10px;
    }
`;

const StyledNavLink = styled.li`
    text-decoration:none;
    color:#FFF;
    background-color:${(props)=>props.theme.colors.primaryGreen};
    font-family: Arial;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 26px;
    border:none;
    padding:14px 20px;
    &:hover{
        text-decoration:none;
        color:#FFF;
        background-color:${(props)=>props.theme.colors.primaryGreen};

    }
`;





