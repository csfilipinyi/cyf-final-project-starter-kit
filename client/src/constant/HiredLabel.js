import React from 'react'
import styled from 'styled-components'


const HiredLabel = () => {
    return (
        <Container>
            Hired
        </Container>
    )
}

export default HiredLabel

const Container = styled.div`
    width:60px;
    height:30px;
    background-color:#1E90FF;
    text-align:center;
    height: 19px;
    color: #FFFFFF;
    font-family: Lato;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 19px;
    position:absolute;
    top:5px;
    left:5px;
    &.detail_page{
        display:flex;
        position:relative;
        background-color:red;
    }
`