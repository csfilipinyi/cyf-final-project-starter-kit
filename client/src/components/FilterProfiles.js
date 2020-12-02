import React, {useState, useEffect} from 'react'
import {Form, Accordion, Card, Button} from 'react-bootstrap'
import styled from 'styled-components'

const FilterProfiles = ({allProfiles, setFilteredProfiles}) => {
    const [locations, setLocations] = useState([])
    const [skills, setSkills] = useState([])
    const [desiredLocations, setDesiredLocations] = useState([])
    const [desiredSkills, setDesiredSkills] = useState([])

    useEffect(()=>{
        let locationList = allProfiles.map(p=>p.location).filter((location, i, list) => list.indexOf(location) === i);
        setLocations(locationList)
        setDesiredLocations(locationList.map(p=>p.toLowerCase()))

        let skills = []
        allProfiles.forEach(p=>{
            skills = [...skills,...p.skill_name]
        })
        let skillList = skills.filter((skill, i, list) => list.indexOf(skill) === i);
        setSkills(skillList)
        // setDesiredSkills(skillList)
    },[allProfiles])

    useEffect (()=>{
        setFilteredProfiles(allProfiles.filter(profile=>desiredLocations.includes(profile.location.toLowerCase())))
    },[desiredLocations])

    useEffect (()=>{
        setFilteredProfiles(allProfiles.filter(profile=>desiredSkills.every(p=>profile.skill_name.includes(p))))
    },[desiredSkills])
    
    const handleDesiredLocations =(e)=>{
        if (e.target.id=='all'){
            locations.length===desiredLocations.length?setDesiredLocations([]):setDesiredLocations(locations.map(p=>p.toLowerCase()))
        } else {
            if(e.target.checked){
                setDesiredLocations([...desiredLocations, e.target.value.toLowerCase()])
            } else{
                let dl = desiredLocations.filter(location=>location.toLowerCase()!==e.target.value.toLowerCase())
                setDesiredLocations(dl)
            }
        }
    }

    const handleDesiredSkills =(e)=>{
        if (e.target.id=='all'){
            skills.length===desiredSkills.length?setDesiredSkills([]):setDesiredSkills(skills.map(p=>p.toLowerCase()))
        } else {
            if(e.target.checked){
                setDesiredSkills([...desiredSkills, e.target.value.toLowerCase()])
            } else{
                let ds = desiredSkills.filter(skill=>skill.toLowerCase()!==e.target.value.toLowerCase())
                setDesiredSkills(ds)
            }
        }
    }



    return (
            <StyledAccordion defaultActiveKey="0">
                <StyledCard>
                    <StyledHeader>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontWeight:'bold', textDecoration:'none', color:'black'}}>
                        Filter Graduates By Location
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{fontWeight:'bold', textDecoration:'none', color:'black'}}>
                        Filter Graduates By Skills
                    </Accordion.Toggle>
                    </StyledHeader>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                                <Form.Check
                                inline
                                label='All'
                                value={[...locations]}
                                id='all'
                                type='checkbox'
                                checked={locations.length===desiredLocations.length}
                                onClick = {handleDesiredLocations}
                                />
                            {locations&&locations.map((location,i)=>{
                                return <Form.Check
                                key={i}
                                inline
                                label={location}
                                value={location}
                                type='checkbox'
                                checked={desiredLocations.includes(location.toLowerCase())}
                                onClick = {handleDesiredLocations}
                                />
                            })}   
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>                         
                            <Form.Check
                                inline
                                label='All'
                                value={[...skills]}
                                id='all'
                                type='checkbox'
                                checked={skills.length===desiredSkills.length}
                                onClick = {handleDesiredSkills}
                            />
                            {skills&&skills.map((skill,i)=>{
                                return <Form.Check
                                key={i}
                                inline
                                label={skill}
                                value={skill}
                                type='checkbox'
                                checked={desiredSkills.includes(skill.toLowerCase())}
                                onClick = {handleDesiredSkills}
                                />
                            })}   
                        </Card.Body>
                    </Accordion.Collapse>
                </StyledCard>
            </StyledAccordion>                
    )
}

export default FilterProfiles


const StyledAccordion = styled(Accordion)`
    display:flex;
    width:70%;
    margin-top:30px;
`

const StyledCard = styled(Card)`
    display:flex;
    width:100%;
`

const StyledHeader = styled(Card.Header)`
    display:flex;
    justify-content:space-around;
`

const StyledToggle = styled(Accordion.Toggle)`
    color:black;
    font-family:loto;
    font-size:18px;
    font-weight:bold;
    text-decoration:none;
`