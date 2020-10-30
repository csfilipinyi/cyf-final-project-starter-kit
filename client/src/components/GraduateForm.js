import React, { useContext, useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "../constant/FormField";
import StyledButton from "../constant/StyledButton";
import { ProfileContext } from "../context/ProfileContext";
import { AuthContext } from "../context/AuthContext";
import { skills } from "../api/skills";
import styled from "styled-components";

const GraduateForm = ({ profile, handleClick }) => {
  let history = useHistory();
  const { github_id } = useContext(AuthContext);

  console.log("profile", profile);

  const [newSkills, setNewSkills] = useState([]);

  useEffect(()=>{
  	setNewSkills(profile.skills)
  },[])

  const handleSubmit = async (values) => {
    const {
      firstName,
      surname,
      aboutMe,
      location,
      interest,
      github,
      linkedin,
      portfolio,
      skills,
    } = values;
    const newProfile = {
      first_name: firstName,
      surname: surname,
      github_id: github_id,
      about_me: aboutMe,
      location: location,
      interest: interest,
      github_link: github,
      linkedin_link: linkedin,
      portfolio_link: portfolio,
      skills:skills
    };
    await handleClick(newProfile);
    history.push("/viewprofile");
  };

  const handleReset = () => {
    history.push("/viewprofile");
  };

  const deleteSkill = (e) => {
    e.preventDefault();
    let remainedSkills = newSkills.filter((skill) => skill !== e.target.value);
    setNewSkills(remainedSkills);
  };

  const handleValidate = async (e, setFieldValue) => {
    e.persist();
    const res = await skills();
    const response = res.map((x) => x.toUpperCase());
    let event = e.key;
    let word = e.target.value.trim().toUpperCase();
    if (event == " ") {
      response.includes(word) &&
      !newSkills.includes(word) &&
      setNewSkills([...newSkills, word]);
      setFieldValue("skills", "");
    }
  };

  const initialValue = profile
    ? {
        firstName: profile.first_name,
        surname: profile.surname,
        aboutMe: profile.about_me,
        location: profile.location,
        interest: profile.interest,
        github: profile.github_link,
        linkedin: profile.linkedin_link,
        portfolio: profile.portfolio_link,
        skills:profile.skills
      }
    : {
        firstName: "",
        surname: "",
        aboutMe: "",
        location: "",
        interest: "",
        github: "",
        linkedin: "",
        portfolio: "",
        skills:""
      };

  return (
    <Container>
      {console.log("initial", initialValue)}
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => handleSubmit(values)}
        // validationSchema={ValidationSchema}
        onReset={handleReset}
      >
        {(props) => (
          <>
            <StyledForm id="formLogin" noValidate>
              <FormField
                name="firstName"
                // placeholder='First Name'
                label="First Name"
              />
              <FormField
                name="surname"
                // placeholder='Last Name'
                label="Last Name"
              />
              <FormField
                name="aboutMe"
                height="150px"
                description="Provide one sentence summary of what makes you tick. This will also be shown on the main page"
                label="About Me"
              />
              <FormField
                name="location"
                label="Location"
              />
              <FormField
                name="interest"
                description="Add the 3 key things that you are passionate about.this will show on the main page"
                label="Key Interests"
              />

              <FormField
                name="github"
                label="Github"
              />
              <FormField
                name="linkedin"
                label="Linked In"
              />
              <FormField
                name="portfolio"
                label="Your Portfolio/Project"
              />
              <FormField
								name='skills'
								label='Your key skills'
								info = 'Type your skills and press ‘Space’'
								onKeyUp={(e)=>handleValidate(e, props.setFieldValue)}
							/> 
							<ViewSkills>{newSkills&&newSkills.map((skill, i)=>{
								return <Skill key={i}>{skill}<X onClick={deleteSkill} type='delete' value={skill}>X</X></Skill>;
							})}</ViewSkills>
            </StyledForm>
            <ButtonContainer>
              <StyledButton
                name="Cancel"
                className="md"
                handleClick={props.handleReset}
              />
              <StyledButton
                name="Save"
                className="sm"
                type="submit"
                handleClick={props.handleSubmit}
              />
            </ButtonContainer>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default GraduateForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  width: 100%;
`;

const Skill = styled.div`
  border: 1px solid #dedede;
  border-radius: 2px;
  background-color: #f3f3f3;
  margin: 3px;
  padding: 3px 10px;
`;

const X = styled.button`
  width: 10px;
  color: #0090ff;
  background-color: transparent;
  border: none;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;
