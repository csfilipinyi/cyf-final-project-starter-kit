import React from 'react'
import styled from 'styled-components'
import StyledButton from '../constant/StyledButton'

const AskDelete = ({handleDelete, cancelDelete}) => {
    return (
        <Container>
             Are you sure you want to delete your profile?
             <ButtonContainer>
                <StyledButton handleClick={handleDelete} name='Yes' className='danger'/>
                <StyledButton handleClick={cancelDelete} name='No' className='md'/>
             </ButtonContainer>
        </Container>
    )
}

export default AskDelete


const Container= styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
    width:100%;
    height:400px;
    color:black;
    font-family: Raleway;
    font-size: 32px;
    font-weight: 800;
`

const ButtonContainer=styled.div`
    display:flex;
    width:50%;
    justify-content:center;
    align-items:space-around;
    color: #000000;
    margin-top:50px;
`