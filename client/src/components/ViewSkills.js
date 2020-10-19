import React from 'react';
import styled from 'styled-components';

const ViewSkills = ({ skills }) => {
	return (
		<Container>
			{skills.map((skill, id)=>{
				return (
					<Skill key={id}>{skill}</Skill>
				);
			})}
		</Container>
	);
};

export default ViewSkills;


const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const Skill = styled.div`
    border: 1px solid #DEDEDE;
    border-radius: 2px;
    background-color: #F3F3F3;
    margin:3px;
`;