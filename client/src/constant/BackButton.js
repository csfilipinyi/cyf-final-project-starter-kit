import React from 'react'
import {Redirect} from 'react-router-dom'
import IconArrow from '../assets/icons/IconArrowLeft.svg'
import styled from 'styled-components'

const BackButton = ({isAuthenticated}) => {

    const handleClick = () =>{
        console.log('clicked arrow')
        isAuthenticated?<Redirect to='/viewallprofiles'/>:<Redirect to='/'/>
    }

    return (
        <Container>
            <Arrow src={IconArrow} alt='arrow' onClick={handleClick}/>
            <Text onClick={handleClick}>Back</Text>
        </Container>
    )
}

export default BackButton

const Container =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:15%;
    margin-top:55px;
`

const Arrow =styled.img`
    
`

const Text=styled.p`
    color: #1E90FF;
    font-family: Lato;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 24px;
`