import React, {useContext, useEffect, useState} from 'react'
import {AdminContext} from '../context/AdminContext'
import {Button, ButtonGroup, InputGroup, FormControl} from 'react-bootstrap'
import styled from 'styled-components'
import {ProfileContext} from '../context/ProfileContext'
import Header from '../components/Header';
import GraduatesTable from '../components/GraduatesTable'
import MailBox from '../components/MailBox'

const Admin = () => {
    const [display, setDisplay] =useState('')
    const [newSkill, setNewSkill] = useState('')
    const [newAccount, setNewAccount] = useState('')
    const [success, setSuccess] = useState(false)
    const [present, setPresent] = useState(false)

    const [receivers, setReceivers] =useState([]);
    const [mBox, setMBox] =useState(false)
    const [mailSuccess, setMailSuccess] =useState(false)

    const {skillsList, github_accounts, fetchSkills, fetchGithubAccounts, addNewSkill, addNewAccount} = useContext(AdminContext)
    const {allProfiles,getAllProfiles} = useContext (ProfileContext);

    console.log('admin', newAccount, github_accounts)

    useEffect (()=>{
        fetchSkills()
        fetchGithubAccounts()
        getAllProfiles()
    },[])

    setTimeout(()=>setSuccess(false),3000);
    setTimeout(()=>setMailSuccess(false),3000);
    setTimeout(()=>setPresent(false),3000);

    const handleChangeSkill =(e)=>{
        setNewSkill(e.target.value)
    }

    const handleChangeAccount =(e)=>{
        setNewAccount(e.target.value)
    }

    const handleClickSkill= async (e)=>{
        const skill_name= newSkill.toLowerCase().trim()
        if(!(skillsList.find((i)=>(i.skill_name===skill_name)))&&skill_name!==''){
            const skill = {
                skill_name: skill_name
            }
            await addNewSkill(skill)
            setSuccess(true)&&setNewSkill('')
        } else {
            console.log('test skills', newSkill)
            setPresent(true)&&setNewSkill('');
        }
    }

    const handleClickAccount= async (e)=>{
        const account_name= newAccount.trim()
        if(!(github_accounts.find((i)=>(i.account_name===account_name)))&&account_name!==''){
            const account = {
                account_name: account_name
            }
            await addNewAccount(account)
            setSuccess(true);
        } else {
            setPresent(true);
        }
    }

    return (
        <Screen>
            <Header/>
                {mailSuccess&& <MailSucces>The mail has been sent succesfully</MailSucces>}
                {mBox?<MailBox  setMBox={setMBox} receivers={receivers} setMailSuccess={setMailSuccess}/>:
                <Container>
                    {success&&<Succesfull><p>Succesfully Added</p></Succesfull>}
                    <InputContainer>
                        <SubDiv>
                            <StyledInputGroup className="mb-3">
                                <FormControl
                                placeholder="Add a new skill"
                                aria-label="Add a new skill"
                                aria-describedby="basic-addon2"
                                onChange={handleChangeSkill}
                                />
                                <InputGroup.Append>
                                <StyledAddButton variant="outline-secondary" onClick={handleClickSkill}>Add Skill</StyledAddButton>
                                </InputGroup.Append>
                            </StyledInputGroup>
                                {present&&newSkill&&<Present>"{newSkill}"  is already present on our table</Present>}
                        </SubDiv>
                        <SubDiv>
                            <StyledInputGroup className="mb-3">
                                <FormControl
                                placeholder="Add a new graduate github"
                                aria-label="Add a new github name of a graduate"
                                aria-describedby="basic-addon2"
                                onChange={handleChangeAccount}
                                />
                                <InputGroup.Append>
                                <StyledAddButton variant="outline-secondary" onClick={handleClickAccount}>Add Account</StyledAddButton>
                                </InputGroup.Append>
                                {present&&newAccount&&<Present>"{newAccount}" is already present on our table</Present>}
                            </StyledInputGroup>
                        </SubDiv>
                    </InputContainer>
                    <StyledButtonGroup aria-label="Basic example">
                        <StyledButton variant="secondary" onClick={()=>setDisplay('skills')} className={display==='skills'?'active':null}>Skills</StyledButton>
                        <StyledButton variant="secondary" onClick={()=>setDisplay('accounts')} className={display==='accounts'?'active':null}>Github Accounts</StyledButton>
                        <StyledButton variant="secondary" onClick={()=>setDisplay('graduates')} className={display==='graduates'?'active':null}>Graduates</StyledButton>
                    </StyledButtonGroup>
                    {display==='skills'&&<SkillsContainer>
                            {skillsList.map((i)=>{
                                return <Skill>{i.skill_name.toUpperCase()}</Skill>
                            })}
                        </SkillsContainer>}
                    {display==='accounts'&&<AccountsContainer>
                            {github_accounts.map((i)=>{
                                        return <Account>{i.account_name}</Account>
                                    })}
                        </AccountsContainer>}
                    {display==='graduates'&&<GraduatesTable allProfiles={allProfiles} setReceivers={setReceivers} receivers={receivers} setMBox={setMBox}/>}
                </Container>}
        </Screen>
    )
}

export default Admin;

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
    display:flex;
    flex-wrap:wrap;
    width:70%;
    margin-top:30px
`

const AccountsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:70%;
    margin-top:50px;
`
const StyledButtonGroup=styled(ButtonGroup)`
    margin-top:50px;
`

const StyledInputGroup=styled(InputGroup)`
`

const InputContainer = styled.div`
    margin-top:90px;
    width:70%;
    display:flex;
`
const StyledAddButton =styled(Button)`
    z-index:0;
`

const StyledButton = styled(Button)`
    width:150px;
    height:50px;
    background-color:#E5E7E9;
    color:#000000;
    border:2px solid white;
    &:hover{
        width:150px;
        height:50px;
        border:2px solid white;
    }
    &:active{
        width:150px;
        height:50px;
        background-color:green;
        border:2px solid white;
    }
`

const Succesfull =styled.div`
    position:absolute;
    top:150px;
    z-index:5;
    border-radius:4%;
    width:300px;
    height:80px;
    background-color:#E5E7E9;
    display:flex;
    aling-items:center;
    justify-content:center;
    &>p{
        font-size:20px;
        padding-top:20px;
        color: #000000;
        font-family: Raleway;
    }
`

const Present =styled.p`
    font-size:20px;
    color: red;
    font-family: Raleway;
`

const SubDiv = styled.div`
    width:90%;
    margin:5px;
`

const Skill =styled.div`
    background-color:#E5E7E9;
    margin:10px;
    height:40px;
    padding:10px;
    border-radius:4%;
`

const Account =styled.div`
    background-color:#E5E7E9;
    margin:10px;
    height:40px;
    width:200px;
    text-align:center;
    padding-top:5px;
    border-radius:4%;
`

const MailSucces = styled.div`
    width:440px;
    height:120px;
    background-color:black;
    color:white;
    border-radius:4px;
    font-size:22px;
    font-family:arial;
    font-weight:bold;
    diplay:flex;
    position:absolute;
    top:350px;
    left:35%;
    text-align:center;
    padding-top:50px;
`