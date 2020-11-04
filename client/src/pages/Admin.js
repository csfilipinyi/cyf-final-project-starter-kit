import React, {useContext, useEffect, useState} from 'react'
import {AdminContext} from '../context/AdminContext'
import {Button, ButtonGroup, InputGroup, FormControl} from 'react-bootstrap'
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
                    <InputContainer>
                        <StyledInputGroup className="mb-3">
                            <FormControl
                            placeholder="Add a new skill"
                            aria-label="Add a new skill"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary">Button</Button>
                            </InputGroup.Append>
                        </StyledInputGroup>
                        <StyledInputGroup className="mb-3">
                            <FormControl
                            placeholder="Add a new graduate github"
                            aria-label="Add a new github name of a graduate"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary">Button</Button>
                            </InputGroup.Append>
                        </StyledInputGroup>
                    </InputContainer>
                    <StyledButtonGroup aria-label="Basic example">
                        <StyledButton variant="secondary" onClick={()=>setDisplay('skills')}>Skills</StyledButton>
                        <StyledButton variant="secondary" onClick={()=>setDisplay('accounts')}>Github Accounts</StyledButton>
                    </StyledButtonGroup>
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
const StyledButtonGroup=styled(ButtonGroup)`
    margin-top:50px;
`

const StyledInputGroup=styled(InputGroup)`
    margin:5px;
`

const InputContainer = styled.div`
    margin-top:30px;
    width:70%;
    display:flex;
`

const StyledButton = styled(Button)`
    width:150px;
    height:50px;
    background-color:green;
    border:2px solid white;
`