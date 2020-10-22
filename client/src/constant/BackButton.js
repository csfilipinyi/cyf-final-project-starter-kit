import React from 'react'
import styled from 'styled-components'

const BackButton = () => {
    return (
        <Container>
            <Arrow/>
            <Text>Back</Text>
        </Container>
    )
}

export default BackButton

const Container =styled.div`
    display:flex;
`

const Arrow =styled.div`
  height: 9px;
  width: 24px;
  border: 1px solid #0090FF;
  background-color: #0090FF;
`

const Text=styled.p`
    color: #1E90FF;
    font-family: Lato;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 24px;
`