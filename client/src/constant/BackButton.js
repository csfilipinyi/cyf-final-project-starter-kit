import React from 'react'
import IconArrow from '../assets/icons/IconArrowLeft.svg'
import styled from 'styled-components'

const BackButton = () => {
    return (
        <Container>
            <Arrow src={IconArrow} alt='arrow'/>
            <Text>Back</Text>
        </Container>
    )
}

export default BackButton

const Container =styled.div`
    display:flex;
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