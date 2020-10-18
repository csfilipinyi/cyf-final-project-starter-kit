import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { ProfileContext } from '../context/ProfileContext';
// import * as Yup from "yup";
import FormField from "../constant/FormField";
import StyledButton from '../constant/StyledButton';

const EditMyProfile = () => {
	const { profile, editProfile }  = useContext(ProfileContext);
	let history = useHistory();

	const handleSubmit = (values)=>{
		const { name, email, website, phone } = values;
		const editedProfile ={
			'id':profile.id,
			'name':name,
			'email':email,
			'website':website,
			'phone':phone,
		};
		editProfile(editedProfile);
		history.goBack();
	};

	const handleReset = ()=>{
		history.goBack();
	};

	const initialValue = profile || { name:'', email:'', website:'', phone:'' };

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