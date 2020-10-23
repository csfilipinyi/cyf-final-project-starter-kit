import React, {useContext} from 'react'
import styled from 'styled-components'
import {AuthContext} from '../context/AuthContext'
import Header from '../components/Header'
import BackButton from '../constant/BackButton'
import ViewMyProfile from '../components/ViewMyProfile'

const ViewDetail = () => {
    const {isAuthenticated} = useContext(AuthContext)

    return (
        <Screen>
            <Header isAuthenticated={isAuthenticated}/>
            <BackButton isAuthenticated={isAuthenticated}/>
            <ViewMyProfile isAuthenticated={isAuthenticated}/>
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