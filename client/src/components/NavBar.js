import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({ open }) => {
	return (
		<Navigator className={open ? 'open' : null}>
			<StyledList className={open ? 'open' : null}>
				<StyledNavLink exact to='/' >
                    Home
				</StyledNavLink>
				<StyledNavLink exact to='/createprofile' >
                    Create Profile
				</StyledNavLink>
				<StyledNavLink exact to='/viewprofile' >
                    View Profile
				</StyledNavLink>
				<StyledNavLink exact to='/oauth2' >
                    Sign In
				</StyledNavLink>
			</StyledList>
		</Navigator>
	);
};

export default NavBar;




const Navigator = styled.div`
    width:40%;
    display:flex;
    &.open{
        flex-directon:column;
        position:absolute;
        right:5px;
        top:25px;
        width:100px;
        height:150px;
        align-items:center;
        justify-content:flex-start;
        background-color:white;
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

const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    color:'#EFF3F7';
    font-size:1.2rem;
    font-weight:600;
    &:hover{
        text-decoration:none;
        color:'#920C43';
    }
`;





