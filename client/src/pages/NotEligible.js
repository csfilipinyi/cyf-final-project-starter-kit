import React, {useContext} from 'react'
import styled from  'styled-components'
import {Link, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {ProfileContext} from '../context/ProfileContext'
import Header from '../components/Header'

const NotEligible = () => {
    const {setGraduate} = useContext(AuthContext);
    const {getAllProfiles} = useContext(ProfileContext);
    let history = useHistory()
    
    const handleClick =async()=>{
        setGraduate();
        await getAllProfiles();
        history.push('/');
    }
    
    return (
        <Screen>
			<Header></Header>
        <Container>
            <Warning>
                You are not able to create a profile on this site.<br/>You can view our graduates <Link onClick={handleClick}>here</Link> 
            </Warning>
            <Text>
                If you are a Code Your Future graduate, and you think you should be able to create a profile, <br/> please contact us <span> </span>
            <LinkCYF href='mailto:contact@codeyourfuture.io'> contact@codeyourfuture.io</LinkCYF>
            </Text>
        </Container>

        </Screen>
    )
}

export default NotEligible


const Screen =styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
`;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    width:70%;
`

const Warning= styled.p`
    margin:30px 0;
	font-size:25px;
`;

const Text = styled.p`
	font-size:20px;
`;

const LinkCYF =styled.a`
	display:inline-block;
`