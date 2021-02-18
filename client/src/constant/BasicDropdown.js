import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProfileContext } from '../context/ProfileContext';

const BasicDropdown = () => {
	const { getProfile }  = useContext(ProfileContext);

	const handleProfile = (e)=>{
		getProfile(e.target.value);
	};

	return (
		<div>
			<Type>Select a Profile</Type>
			<Select id="adult" name="adult" onChange={handleProfile}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</Select>
		</div>


	);
};

export default BasicDropdown;


const Type = styled.p`
    color:black;
    font-size:1.2rem;
    margin:5px;
`;

const Select = styled.select`
    border-radius:10px;
`;
