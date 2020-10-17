import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import FormField from "../constant/FormField";
import StyledButton from '../constant/StyledButton';
import { ProfileContext } from '../context/ProfileContext';

import styled from 'styled-components';


const GraduateForm = () => {
	const { profiles, addProfile, profile, editProfile }  = useContext(ProfileContext);
	console.log('add', profile);

	const handleSubmit = (values) => {
		const { name, email, website, phone } = values;
		const newProfile ={
			'full_name':name,
			'email':email,
			'website':website,
			'phone':phone,
		};
		addProfile(newProfile);
	};

	const initialValue = profile ? { name:`${profile.name}`, email:`${profile.email}`, website:`${profile.website}`, phone:`${profile.phone}` }:{ name:'', email:'', website:'', phone:'' };

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
								name='name'
								placeholder='Full Name'
								label='Full Name'
							/>
							<FormField
								name='email'
								placeholder='Email'
								label='Email'
							/>
							<FormField
								name='website'
								placeholder='WebSite'
								label='WebSite'
							/>
							<FormField
								name='phone'
								placeholder='Phone Number'
								label='Phone Number'
							/>
						</StyledForm>
						<StyledButton name='Create Profile' handleClick={ props.handleSubmit} />
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
    align-items:center;
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

const StyledForm = styled(Form)`
    display:flex;
    flex-direction:column;
    width:50%;
    justify-content:center;
    align-items:center;
`;