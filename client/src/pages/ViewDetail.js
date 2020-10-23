import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import BackButton from '../constant/BackButton'
import ViewMyProfile from '../components/ViewMyProfile'

const ViewDetail = () => {
    return (
        <Screen>
            <Header/>
            <BackButton/>
            <ViewMyProfile/>
        </Screen>
    )
}

export default ViewDetail


const Screen = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`