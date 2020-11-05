import React from "react";
import { useField } from "formik";
import styled from "styled-components";
// import PropTypes from "prop-types";


const FormField = (props) => {
	const [field, meta] = useField(props);
	return (
		<Container>
			{props.label && <FormLabel>{props.label}</FormLabel>}
			<InputField  {...field}  {...props} className={meta.touched && meta.error ? "has-error" : "input"} />
			{meta.error && meta.touched && <Error>{meta.error}</Error>}
		</Container>
	);
};

export default FormField;

const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

const FormLabel = styled.label`
    color:  #212121;
    font-size:14px
`;

const InputField = styled.input`
    width:456px;
    height:40px;
    border: 1px solid gray;
    background-color: white;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left:16px;
    &.has-error {
        border-color:red;
    }
`;

const Error = styled.p`
    font-size: '10px';
    line-height: 14px;
    color:red;
    margin:0;
    padding:0;
`;

// FormField.propTypes = {
// 	name: PropTypes.string.isRequired,
// };
