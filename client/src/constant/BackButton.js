import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import IconArrow from '../assets/icons/IconArrowLeft.svg'
import styled from 'styled-components'

const BackButton = ({handleClick}) => {
  
    return (
        <Container onClick={handleClick}>
            <Arrow src={IconArrow} alt='arrow' />
            <Text>Back</Text>
        </Container>
    )
}

export default withRouter(BackButton)

const Container =styled.div`
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

const Text=styled.div`
    color: #1E90FF;
    font-family: Lato;
    font-size: 20px;
    font-weight: bold;
`