import React from 'react';
import styled from 'styled-components';

const Introducing = (props) => {
	return (
		<Container>
			<Heading>{props.header}</Heading>
			<Text>{props.text}</Text>
		</Container>
	);
};

export default Introducing;


const Container = styled.div`
    width:70%;
    margin-top:50px;
`;

const Heading=styled.p`
    color: #000000;
    font-family: Raleway;
    font-size: 48px;
    font-weight:1000;
    letter-spacing: 0;
    line-height: 56px;
    border-bottom:3px solid #EE4344;
    display:inline-block;
`;

const Text =styled.p`
    font-family:Lato;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    margin-top:30px;
`;