import React from 'react'
import styled from 'styled-components'
import StyledButton from '../constant/StyledButton'

const AskDelete = ({handleDelete, cancelDelete}) => {
    return (
        <Container>
             Are you sure to delete your profile?
             <ButtonContainer>
             <StyledButton handleClick={handleDelete} className='danger'>Yes</StyledButton>   
             <StyledButton handleClick={cancelDelete} className='md'>No</StyledButton>  
             </ButtonContainer>
        </Container>
    )
}

export default AskDelete


const Container= styled.div`
    display:flex;
    justify-content:center;
    align-items:space-between;
    width:500px;
    height:450px;
    background-color:gray;
    position:relative;
    bottom:35%;
    left:35%;
    color:black;
`

const ButtonContainer=styled.div`
    display:flex;
    `