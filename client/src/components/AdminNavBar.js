import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext'
import styled from 'styled-components';

const AdminNavBar = ({ open }) => {
    const history = useHistory()
    const { logOut }= useContext(AuthContext);


    const handleClick = ()=>{
        logOut()
    }    

	return (
		<Navigator className={open ? 'open' : null}>
			<StyledList className={open ? 'open' : null}>
                <StyledNavLink to='/admin'>
                    Admin Panel
				</StyledNavLink>
				<StyledNavLink to='/' onClick={handleClick}>
                    Log out
				</StyledNavLink>
			</StyledList>
		</Navigator>
	);
};

export default AdminNavBar;




const Navigator = styled.div`
    display:flex;
    margin-right:15%;
    margin-top:5px;
    color:#0090FF;
    z-index:100;
    &.open{
        flex-directon:column;
        position:absolute;
        right:0px;
        top:60px;
        width:252px;
        height:110px;
        align-items:flex-start;
        justify-content:flex-start;
        background-color: #FAFAFA;
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
        z-index:100;
    }
`;

const StyledList = styled.ul`
    list-style-type:none;
    display:flex;
    justify-content:space-around;
    width:100%;
    &.open{
        flex-direction:column;
        margin-left:0;
        padding-left:10px;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    color: #000000;
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 26px;
    border:none;
    padding:14px 20px;
    &:hover{
        text-decoration:none;
        color: #000000;
        background-color:gray;
    }
    &:active{
        color:#0090FF;
    }
`;





