import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import FormField from "../constant/FormField";
import StyledButton from '../constant/StyledButton';
import { ProfileContext } from '../context/ProfileContext';
import { skills } from '../api/skills';
import styled from 'styled-components';


const GraduateForm = () => {
	const [newSkills, setNewSkills] = useState([]);
	const { profiles, addProfile, profile, editProfile }  = useContext(ProfileContext);

	const handleSubmit = (values) => {
		const { firstName, lastName, skills } = values;
		const newProfile ={
			'first_name':firstName,
			'last_name':lastName,
			'skills':skills,
		};
		addProfile(newProfile);
	};

	const deleteSkill = (e)=>{
		e.preventDefault();
		let remainedSkills = newSkills.filter((skill)=>skill!==e.target.value);
		setNewSkills(remainedSkills);
	};
	const handleValidate =async (e,setFieldValue)=>{
		e.persist();
		const res = await skills();
		const response= res.map((x)=>x.toUpperCase());
		let event = e.key;
		let word = e.target.value.trim().toUpperCase();
		if(event==' '){
			response.includes(word) && !newSkills.includes(word) && setNewSkills([...newSkills, word]);
			setFieldValue('skills', '');
		}
	};



	const initialValue = profile || { firstName:'', lastName:'', skills:'' };

	return (
		<Container >
			<Formik
				initialValues={initialValue}
				onSubmit={(values) => handleSubmit(values)}
				// validationSchema={ValidationSchema}
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
								name='lastName'
								// placeholder='Last Name'
								label='Your last name'
							/>
							<FormField
								name='skills'
								// placeholder='Email'
								label='Your key skills'
								info = 'Type your skills and press ‘Space’'
								onKeyUp={(e)=>handleValidate(e, props.setFieldValue)}
							/>
							<ViewSkills>{newSkills.map((skill, i)=>{
								return <Skill key={i}>{skill}<X onClick={deleteSkill} type='delete' value={skill}>X</X></Skill>;
							})}</ViewSkills>
							<FormField
								name='desciprtion'
								// placeholder='Phone Number'
								label='Description'
							/>
						</StyledForm>
						<ButtonContainer>
							<StyledButton name='Cancel' className='md' handleClick={ props.handleSubmit}  />
							<StyledButton name='Save' className='sm' handleClick={ props.handleSubmit}  />
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