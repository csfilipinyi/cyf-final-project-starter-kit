import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const ViewDetail = () => {
    return (
        <Screen>
            <Header/>
        </Screen>
    )
}

export default ViewDetail


const Screen = styled.div`
    width:100%;
    min-height:100vh;
`