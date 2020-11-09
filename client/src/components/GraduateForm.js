import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormField from "../constant/FormField";
import StyledButton from "../constant/StyledButton";
import RichEditorField from '../constant/RichEditorField'
import FormSwitchButton from '../constant/FormSwitchButton'
import { ProfileContext } from "../context/ProfileContext";
import { AuthContext } from "../context/AuthContext";
import { AdminContext } from "../context/AdminContext";
import styled from "styled-components";

const GraduateForm = ({ profile, handleClick, askBeforeDelete }) => {
  let history = useHistory();
  const { github_id, github_avatar, logOut } = useContext(AuthContext);
  const { statement, deleteProfile} = useContext(ProfileContext);
  const { fetchSkills, skillsList } = useContext(AdminContext);

  const [newSkills, setNewSkills] = useState([]);
  const [skillError, setSkillError] = useState(false);
  const [isHired, setIsHired] = useState(false);

  const handleSkillError=()=>{
    !newSkills.length>0?setSkillError(true):setSkillError(false)
  }

  useEffect(()=>{
  	profile&&profile.skills&&setNewSkills([...newSkills, ...profile.skills])
  },[profile])

  useEffect (()=>{
    fetchSkills()
  },[])

  const handleSubmit = async (values) => {
    const {
      firstName,
      surname,
      email,
      aboutMe,
      location,
      interest,
      github,
      linkedin,
      portfolio,
      cv,
      skills
    } = values;
    const newProfile = {
      first_name: firstName,
      surname: surname,
      email_address:email,
      github_id: github_id,
      about_me: aboutMe,
      location: location,
      interest: interest,
      github_link: github,
      linkedin_link: linkedin,
      portfolio_link: portfolio,
      cv_link:cv,
      avatar_url:github_avatar,
      skills:newSkills,
      statement:statement,
      is_hired:isHired
    };
    if(!skillError){
      await handleClick(newProfile);
      history.push(`/myprofile`);
    }
  };

  const handleReset = () => {
    history.push(`/myprofile`);
  };
  
  const deleteSkill = (e) => {
    e.preventDefault();
    let remainedSkills = newSkills.filter((skill) => skill !== e.target.value);
    setNewSkills(remainedSkills);
  };

  const handleValidate = async (e, setFieldValue) => {
    e.persist();
    const response = skillsList.map((x) => x.skill_name.toUpperCase());
    let event = e.key;
    let word = e.target.value.trim().toUpperCase();
    if (event == " ") {
      response.includes(word)&&!newSkills.includes(word)&&setNewSkills([...newSkills, word])
      setFieldValue("skills", " ");
    }
  };

  const initialValue = profile
    ? {
        firstName: profile.first_name,
        surname: profile.surname,
        email:profile.email_address,
        aboutMe: profile.about_me,
        location: profile.location,
        interest: profile.interest,
        github: profile.github_link,
        linkedin: profile.linkedin_link,
        portfolio: profile.portfolio_link,
        cv: profile.cv_link,
        skills:profile.skills,
      }
    : {
        firstName: "",
        surname: "",
        email:"",
        aboutMe: "",
        location: "",
        interest: "",
        github: "",
        linkedin: "",
        portfolio: "",
        skills:newSkills,
        cv:""
      };

  return (   
    <Container>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={ValidationSchema}
        onReset={handleReset}
      >
        {(props) => (
          <>
            <StyledForm id="formLogin" noValidate>
              <FormSwitchButton
                name="isHired"
                profile={profile}
                isHired={profile.is_hired||isHired}
                handleSwitch={()=>setIsHired(!isHired)}
              />
              <FormField
                name="firstName"
                label="First Name"
              />
              <FormField
                name="surname"
                label="Last Name"
              />
              <FormField
                name="email"
                description="If you don't want your e-mail address to be public, please add contact@codeyourfuture.io"
                label="Your Email"
              />
              <FormField
                name="aboutMe"
                height="90px"
                description="Provide a one sentence summary that demonstrates what you are passionate about. This will be shown on the main page of the site"
                label="About Me"
                as="textarea"
              />
              <Label>Personal Statement</Label>
              <Description>Provide a longer description about yourself to show on your profile details page.  This will display underneath your About me (short) details. </Description>
              <RichEditorField 
              />
              <FormField
                name="location"
                label="Location"
              />
              <FormField
                name="interest"
                description="Add the 3 key things that you are most passionate about here. This will show on the main page of the site"
                label="Key Interests"
              />
              <FormField
                name="github"
                label="Github Link"
              />
              <FormField
                name="linkedin"
                label="LinkedIn Link"
              />
              <FormField
                name="portfolio"
                label="Your Portfolio/Project"
              />
              <FormField
                name="cv"
                description="Please provide a link to your CV. You can do that by creating a Google doc and sharing the link to that document. You may use any other online service."
                label="Your CV"
              />
              <FormField
								name='skills'
								label='Your Key Skills'
                description = 'Type your skills and press ‘Space’'
                onKeyUp={(e)=>handleValidate(e, props.setFieldValue)}
                autocomplete="off"
                onBlur={handleSkillError}
                skillError={skillError}
              /> 
              {skillError&&<Error>Required</Error>}
							<ViewSkills>{newSkills&&newSkills.map((skill, i)=>{
								return <Skill key={i}>{skill}<X onClick={deleteSkill} type='delete' value={skill}>X</X></Skill>;
							})}</ViewSkills>
             </StyledForm>
            <ButtonContainer>
              {askBeforeDelete&&<StyledButton
                name="Delete Profile"
                className="danger-md"
                type='button'
                handleClick={askBeforeDelete}
              />}
              <SubButtonContainer>            
                <StyledButton
                  name="Cancel"
                  className="cancel"
                  type='button'
                  handleClick={props.handleReset}
                  />
                <StyledButton
                  name="Save"
                  className="success-sm"
                  type="submit"
                  handleClick={props.handleSubmit}
                  />
              </SubButtonContainer>
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

const ValidationSchema = Yup.object().shape({
	firstName: Yup.string()
    .required("Required")
    .max(15, 'Should be less than 15'),
  surname: Yup.string()
    .required("Required")
    .max(15, 'Should be less than 15'),
  email:Yup.string()
  .email('Wrong email format')
  .required('Required'),
  aboutMe: Yup.string()
  .required("Required")
  .max(100, 'Should be less than 100'),
	location: Yup.string()
    .required("Required")
    .max(15, 'Should be less than 15'),
	interest: Yup.string()
    .required("Required")
    .max(50, 'Should be less than 50'),
	github: Yup.string()
    .required("Required"),
  linkedin: Yup.string()
    .required("Required"),
  portfolio: Yup.string()
    .required("Required"),
  cv: Yup.string()
    .required("Required"),
  skills: Yup.string()
		.required("Required"),
});

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
  margin:50px 0;
  display:flex;
  width:700px;
  justify-content:space-between;
`;

const SubButtonContainer =styled.div`
  display:flex;
  justify-content:flex-end;
  width:100%
`

const Label = styled.label`
  color: #000000;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  margin-top:20px;
`;

const Description = styled.p`
color: #000000;
font-family: ${(props) => props.theme.fontFamily.primary};
font-size: 16px;
font-style: italic;
letter-spacing: 0;
text-align: left;
width:65%;
margin-bottom:15px;
`;

const Error = styled.p`
  font-size: "10px";
  line-height: 14px;
  color: red;
  margin: 0;
  padding: 0;
`