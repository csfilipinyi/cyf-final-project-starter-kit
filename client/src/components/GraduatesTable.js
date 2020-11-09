import React, {useContext, useEffect, useState} from 'react'
import {Table, InputGroup, Button} from 'react-bootstrap'
import MailBox from './MailBox'
import styled from 'styled-components'
import CvIcon from '../components/CvIcon'
import EmailIcon from '../components/EmailIcon'
import LinkedinIcon from '../components/LinkedinIcon'
import GitHubIcon from '../components/GitHubIcon'


const GraduatesTable = ({allProfiles, setReceivers, receivers, setMBox}) =>{
   
    const handleChange =(e)=>{
        const gradEmail = e.target.value
        console.log('checkbox', e.target.value)
        if(e.target.checked){
            !receivers.includes(gradEmail)&&setReceivers([...receivers, gradEmail])
        } else {
            const filteredReceivers = receivers.filter(p=>p!==gradEmail)
            receivers.includes(gradEmail)&&setReceivers(filteredReceivers)
        }
    }

    return (
            <Container>
                <ButtonContainer>
                    <StyledButton variant="success" onClick={()=>setMBox(true)}>Send Email</StyledButton>
                </ButtonContainer>
            {allProfiles&&<StyledTable striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Location</th>
                        <th>Social</th>
                        <th>Status</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProfiles.map((singleProfile, i)=>{
                            return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{singleProfile.first_name} {singleProfile.surname}</td>
                                    <td>{singleProfile.location}</td>
                                    <td>
                                        <Social>
                                            <GitHubIcon gitHubLink={singleProfile.github_link}/><LinkedinIcon linkedinLink={singleProfile.linkedin_link} /><CvIcon CvLink={singleProfile.cv_link}/>
                                        </Social>
                                    </td>
                                    
                                    <td>{singleProfile.is_hired?'Hired':'Not Hired yet'}</td>
                                    <td>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Email" onChange={handleChange} value={singleProfile.email_address}/>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                    </StyledTable> }
            </Container>
    )
}

export default GraduatesTable


const Container =styled.div`
    width:70%;
    margin-top:50px;
`

const StyledTable = styled(Table)`

`
const ButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
`

const StyledButton =styled(Button)`
    align-self:flex-end;
    margin-bottom:10px;
`

const Social=styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`