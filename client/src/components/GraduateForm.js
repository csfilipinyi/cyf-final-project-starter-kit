import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormField from "../constant/FormField";
import * as Yup from "yup";
import styled from "styled-components";
import StyledButton from "../constant/StyledButton";


const GraduateForm = () => {
	const [state, setState] = useState (null);

	const handleSubmit = ({ values,actions }) => {
		console.log("values", values, "actions", actions);
		// setTimeout(() => {
		// 	alert(JSON.stringify(values, null, 2));
		// 	actions.setSubmitting(false);
		// }, 1000);
	};


	return (
		<Container>
			<Formik
				initialValues={{ firstName: "", lastName: "" }}
				onSubmit={(values) => console.log("xxx", values)}
			>
				{(props) => (
					<>
						<Form>
							<FormField
								name='firstName'
								type='name'
								label='First Name'
								placeholder='Name' />
							<FormField
								name='lastName'
								type='lastname'
								label='Last Name'
								placeholder='Last Name' />
							<StyledButton type="submit" name="Create Profile" />
						</Form>
					</>
				)}
			</Formik>
		</Container>
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
// 	firstName: Yup.string()
// 		.required("Required"),
// 	lastName: Yup.string()
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