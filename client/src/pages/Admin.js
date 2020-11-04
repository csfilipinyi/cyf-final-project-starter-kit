import React, {useContext, useEffect, useState} from 'react'
import {AdminContext} from '../context/AdminContext'
import {Button, ButtonGroup} from 'react-bootstrap'
import styled from 'styled-components'
import Header from '../components/Header';

const Admin = () => {
    const [display, setDisplay] =useState('')
    const {skills, github_accounts, fetchSkills, fetchGithubAccounts} = useContext(AdminContext)
    console.log('admin', skills, fetchSkills)
    console.log('admin', github_accounts, fetchGithubAccounts)

    useEffect (()=>{
        fetchSkills()
        fetchGithubAccounts()
    },[])

    return (
        <Screen>
            <Header/>
                <Container>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" onClick={()=>setDisplay('skills')}>Skills</Button>
                        <Button variant="secondary" onClick={()=>setDisplay('accounts')}>Github Accounts</Button>
                    </ButtonGroup>
                    {display==='skills'&&<SkillsContainer>
                            {skills.map((i)=>{
                                return <p>{i.skill_name}</p>
                            })}
                        </SkillsContainer>}
                    {display==='accounts'&&<AccountsContainer/>}
                </Container>
            This is Admin Page
        </Screen>
    )
}

export default Admin

const Screen =styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const SkillsContainer = styled.div`
    background-color:red;
    width:70%;
    min-height:100vh;
`

const AccountsContainer = styled.div`
    background-color:yellow;
    width:70%;
    min-height:100vh;
`

const StyledButton = styled(Button)`

`