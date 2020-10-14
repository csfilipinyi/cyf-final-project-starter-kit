import React from "react";
import { Container } from "react-bootstrap";

import Cards from "./Cards.js";

const Home = () => {
	const graduates=
	 [
	 	{ firstName:"Farhana",surname:"Khan",personalBio:"Some Personal info",skills:"JavaScript, HTML,CSS",pastExperience:"Diverse expereince",employmentStatus:"Looking for a job",organization:"" }
	 	,{ firstName:"Fatima",surname:"Khan",personalBio:"A little about me",skills:"HTML,CSS,Wordpress","pastExperience":"content creator",employmentStatus:"Employed",organization:"CYF" }
	 	,{ firstName:"Buchra",surname:"Atkeh",personalBio:"Something about me",skills:"Full stack developer","pastExperience":"Loads",employmentStatus:"Looking for a job",organization:""  },
	    { firstName:"Orhan",surname:"",personalBio:"Personal info here",skills:"HTML,CSS,JavaScript, React","pastExperience":"Loads",employmentStatus:"Looking for a job" }
	       ,{ firstName:"Humail",surname:"Khan",personalBio:"About me",skills:"HTML,CSS","pastExperience":"diverse",employmentStatus:"Employed",organization:"CYF" } ];
	 return (
		<Container>
		{graduates.map( (graduate)=>(
		<Cards graduate = {graduate}/ >))}
		
           
		</Container>
	);
};


export default Home;



