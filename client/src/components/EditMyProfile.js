import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { ProfileContext } from '../context/ProfileContext';
import * as Yup from "yup";
import FormField from "../constant/FormField";
import StyledButton from '../constant/StyledButton';
import avatar from '../assets/icons/avatar.svg';
import GraduateForm from './GraduateForm';

const EditMyProfile = () => {
	const { profile, editProfile, manageEdit, edit }  = useContext(ProfileContext);

	const handleSubmit = (values)=>{
		const { name, email, website, phone } = values;
		const editedProfile ={
			'id':profile.id,
			'full_name':name,
			'email':email,
			'website':website,
			'phone':phone,
		};
		editProfile(editedProfile);
	};

	const handleReset = ()=>{
		manageEdit(false);
		console.log('ed', edit);
	};

	const initialValue = profile ? { name:`${profile.name}`, email:`${profile.email}`, website:`${profile.website}`, phone:`${profile.phone}` }:{ name:'', email:'', website:'', phone:'' };

	return (
		<Container >
			<Formik
				initialValues={initialValue}
				onSubmit={(values) =>handleSubmit(values)}
				// validationSchema={ValidationSchema}
				onReset = {handleReset}
			>
				{(props) => (

					<>
						{console.log(props)}
						<StyledForm id='formLogin' noValidate>
							<FormField
								name='name'
								placeholder='FUll Name'
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
						<ButtonCont>
							<StyledButton name='Save' handleClick={props.handleSubmit} />
							<StyledButton name='Cancel' handleClick={props.handleReset} />
						</ButtonCont>
					</>
				)}
			</Formik>
		</Container >
	);
};

export default EditMyProfile;


const Container =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const StyledForm = styled(Form)`
    display:flex;
    flex-direction:column;
    width:50%;
    justify-content:center;
    align-items:center;
`;

const ButtonCont=styled.div`
    display:flex;
`;