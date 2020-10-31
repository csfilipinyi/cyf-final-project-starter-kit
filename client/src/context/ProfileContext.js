import React, { useReducer } from 'react';
import axios from 'axios';


//Created Context
export const ProfileContext = React.createContext();


//Stored action types names

const types = {
	Set_All_Profiles: "Set_All_Profiles",
	Set_Is_Loading: "Set_Is_Loading",
	Set_NewProfile:"Set_NewProfile",
	Set_Error: "Set_Error",
	Set_Profile: "Set_Profile",
	Clear_Profile :"Clear_Profile",
};


//Stored actions in a reducer

const profileReducer = (state, action) => {
	console.log('action', action, state)
	switch (action.type) {
	case types.Set_Is_Loading:
		return { ...state, isLoading: true };
	case types.Set_Error:
		return { ...state, isLoading: false, error:action.payload };
	case types.Set_All_Profiles:
		return { ...state, allProfiles: action.payload, isLoading: false };
	case types.Set_Profile:
		return { ...state, profile:action.payload, isLoading: false };
	case types.Clear_Profile:
		return { ...state, profile: null, isLoading: false };
	// case types.Delete_Profile:
	// 	return { ...state, allProfiles: state.allProfiles.filter((profile) => profile.id !== action.payload), loading: false };
	default:
		return state;
	}
};

//Context has Provider and Consumer in itself.
//Here we set Context Provider and stored our states and actions in it to provide them to Consumer

const ProfileState = (props) =>{

	const initialState ={
		allProfiles:[],
		profile:[],
		isLoading:false,
		error:null,
	};

	// const baseUrl = 'https://designed-gd.herokuapp.com/api'

	const baseUrl ='http://localhost:3100/api'

	const [state, dispatch] = useReducer(profileReducer, initialState);

	const getAllProfiles = ()=>{
		dispatch({ type: types.Set_Is_Loading }),
		axios.get(`${baseUrl}/graduates`)
			.then((response)=>{
				dispatch({ type: types.Set_All_Profiles, payload:response.data });
			})
			.catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
	};

	const getSkills = ()=>{
		dispatch({ type: types.Set_Is_Loading }),
		axios.get(`${baseUrl}/graduates`)
			.then((response)=>{
				dispatch({ type: types.Set_All_Profiles, payload:response.data });
			})
			.catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
	};


	// .then((response)=>{
	// 	// 	const graduate = response.data[0];
	// 	// 	console.log('graduate', graduate),
	// 	// 	dispatch({ type:types.Set_Profile, payload: graduate });
	// 	// })

	const getProfile =  (id) => {
		dispatch({ type: types.Set_Is_Loading });
		axios.get(`${baseUrl}/graduates/${id}`)
			.then((response)=>{
				const graduate = response.data[0];
				graduate.skills=response.data.map(x=>x.skill_name)
				dispatch({ type: types.Set_Profile, payload:graduate });
			})
			.catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
	};


	const addProfile = (profile) => {
		dispatch({ type: types.Set_Is_Loading });
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		axios.post(`${baseUrl}/graduates`, profile, config)
			.then((response)=>{
				dispatch({ type: types.Set_Profile, payload:profile });
			})
			.catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
		});
	};


	// const deleteProfile = (id) => {
	// 	dispatch({ type: types.Set_Is_Loading });
	// 	axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
	// 		.then((response)=>{
	// 			dispatch({ type: types.Set_Profile, payload:response.data });
	// 		})
	// 		.catch((error)=>{
	// 			dispatch({ type:types.Set_Error, payload:error });
	// 		});
	// };

	const editProfile = (profile) => {
		console.log('edited profile', profile)
		dispatch({ type: types.Set_Is_Loading });
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		axios.put(`${baseUrl}/graduates/${profile.github_id}`, profile, config)
			.then((response)=>{
				console.log("edit profile", response)
				dispatch({ type: types.Set_Profile, payload:profile });
			})
			.catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
	};

	const clearProfile = ()=>{
		dispatch({ type: types.Clear_Profile });
	};

	return (
		<ProfileContext.Provider
			value={{
				allProfiles:state.allProfiles,
				profile:state.profile,
				isLoading:state.isLoading,
				error: state.error,
				addProfile,
				getAllProfiles,
				getProfile,
				editProfile,
				// deleteProfile,
				clearProfile,
			}}
		>
			{props.children}
		</ProfileContext.Provider>
	);
};

export default ProfileState;













