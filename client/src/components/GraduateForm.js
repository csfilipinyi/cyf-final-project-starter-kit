import React, { useContext, useState, useEffect } from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import FormField from "../constant/FormField";
import StyledButton from '../constant/StyledButton';
import { ProfileContext } from '../context/ProfileContext';
import { AuthContext } from '../context/AuthContext';
import { skills } from '../api/skills';
import styled from 'styled-components';


const GraduateForm = ({profile, handleClick}) => {
	const [interest, setInterest] =  useState([]) 

	const addInterest=(e)=>{
		const num = Number(e.target.value)
		setInterest([...interest, num])
	}

	const removeInterest=(e)=>{
		const num = Number(e.target.value)
		let filteredInt = interest.filter(x=>x!==num)
		setInterest(filteredInt)
	}

	let history = useHistory()
	const { github_id}  = useContext(AuthContext);

	console.log('profile', profile)
	
	// const [newSkills, setNewSkills] = useState([]);
	
	// useEffect(()=>{
	// 	setNewSkills()
	// },[profile])

	const handleSubmit =async (values) => {
		const { firstName, surname, aboutMe, location, interest1, interest2, interest3, github, linkedin, portfolio, skills } = values;
		const newProfile ={
			'first_name':firstName,
			'surname':surname,
			'github_id':github_id,
			'about_me':aboutMe,
			'location':location,
			'interest1':interest1,
			'interest2':interest2,
			'interest3':interest3,
			'github_link':github,
			'linkedin_link': linkedin,
			'portfolio_link':portfolio,
			// 'skills':skills,
		};
		await handleClick(newProfile);
		history.push('/viewprofile');
	};

	const handleReset = ()=>{
		history.push('/viewprofile');
	};

	const deleteSkill = (e)=>{
		e.preventDefault();
		let remainedSkills = newSkills.filter((skill)=>skill!==e.target.value);
		setNewSkills(remainedSkills);
	};

	const handleValidate =async(e,setFieldValue)=>{
		e.persist();
		const res = await skills();
		const response= res.map((x)=>x.toUpperCase());
		let event = e.key;
		let word = e.target.value.trim().toUpperCase();
		if(event==' '){
			response.includes(word) && !newSkills.includes(word) && setNewSkills([...newSkills, word ]);
			setFieldValue('skills', '');
		}
	};

	const initialValue = profile ? 
							{firstName:profile.first_name, surname:profile.surname, aboutMe:profile.about_me, location:profile.location, interest1:profile.interest1,interest2:profile.interest2,interest3:profile.interest3, github:profile.github_link, linkedin:profile.linkedin_link, portfolio:profile.portfolio_link } 
							:
							{firstName:'', surname:'', aboutMe:'', location:'', interest1:'', interest2:'',interest3:'', github:'', linkedin:'', portfolio:'' };

	return (
		<Container >
			{console.log('initial', initialValue)}
			<Formik
				initialValues={initialValue}
				onSubmit={(values) => handleSubmit(values)}
				// validationSchema={ValidationSchema}
				onReset = {handleReset}
				onInterest = {addInterest}
			>
				{(props) => (
					<>
						<StyledForm id='formLogin' noValidate>
							<FormField
								name='firstName'
								// placeholder='First Name'
								label='Your first name'
							/>
							<FormField
								name='surname'
								// placeholder='Last Name'
								label='Your last name'
							/>
							<FormField
								name='aboutMe'
								// placeholder='About Me'
								label='About Me'
								// label1='Provide one sentence summary of what makes you tick. This will also be shown on the main page'
							/>
							<FormField
								name='location'
								// placeholder='About Me'
								label='Your Location'
							/>
							<FormField
								name='interest1'
								// placeholder='Last Name'
								label='Your Interest'
							/>
							<button value={2} type='button' onClick={addInterest}>Add another interest</button>
							{interest.includes(2)&&
								<>
									<FormField
										name='interest2'
										// placeholder='Last Name'
										label='Your Interest'
									/>
									<button value={3} type='button' onClick={addInterest}>Add Another Interest</button>
									<button value={2} type='button' onClick={removeInterest}>Remove Interest</button>
								</>
							}
							{interest.includes(3)&&
								<>
									<FormField
										name='interest3'
										// placeholder='Last Name'
										label='Your Interest'
									/>
									<button value={3} type='button' onClick={removeInterest}>Remove Interest</button>
								</>
							}	
							<FormField
								name='github'
								// placeholder='Last Name'
								label='Github'
							/>
							<FormField
								name='linkedin'
								// placeholder='Last Name'
								label='Linked In'
							/>
							<FormField
								name='portfolio'
								// placeholder='Last Name'
								label='Your Portfolio/Project'
							/>				
							{/* <FormField
								name='skills'
								// placeholder='Email'
								label='Your key skills'
								info = 'Type your skills and press ‘Space’'
								onKeyUp={(e)=>handleValidate(e, props.setFieldValue)}
							/> 
							<ViewSkills>{newSkills.map((skill, i)=>{
								return <Skill key={i}>{skill}<X onClick={deleteSkill} type='delete' value={skill}>X</X></Skill>;
							})}</ViewSkills> */}
							
						</StyledForm>
						<ButtonContainer>
							<StyledButton name='Cancel' className='md' handleClick={props.handleReset} />
							<StyledButton name='Save' className='sm' type='submit' handleClick={ props.handleSubmit}  />
						</ButtonContainer>
					</>
				)}
			</Formik>
		</Container >
	);
};

export default GraduateForm;



const Container =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
	align-items:flex-start;
`;

// const ValidationSchema = Yup.object().shape({
// 	Name: Yup.string()
// 		.required("Required"),
// 	email: Yup.string()
// 		.required("Required"),
// 	graduateClass: Yup.string()
// 		.required("Required"),
// 	graduateYear: Yup.string()
// 		.required("Required"),
// });

const ViewSkills = styled.div`
	display:flex;
	width:100%;
`;

const Skill = styled.div`
	border: 1px solid #DEDEDE;
  	border-radius: 2px;
	background-color: #F3F3F3;
	margin:3px;
	padding:3px 10px; 
`;

const X = styled.button`
	width:10px;
	color: #0090FF;
	background-color:transparent;
	border:none;
`;

const StyledForm = styled(Form)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;


const ButtonContainer=styled.div`
	margin-top:40px;
`;