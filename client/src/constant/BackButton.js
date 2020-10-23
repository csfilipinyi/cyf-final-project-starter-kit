import React from 'react'
import {Link} from 'react-router-dom'
import IconArrow from '../assets/icons/IconArrowLeft.svg'
import styled from 'styled-components'

const BackButton = ({handleClick}) => {
  
    return (
        <Container to='/'>
            <Arrow src={IconArrow} alt='arrow' />
            <Text>Back</Text>
        </Container>
    )
}

export default BackButton

const Container =styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:15%;
    margin-top:55px;
    cursor:pointer;
`

const Arrow =styled.img`
    width:24px;
    height:9px;
`

const Text=styled.p`
    color: #1E90FF;
    font-family: Lato;
    font-size: 20px;
    font-weight: bold;
`