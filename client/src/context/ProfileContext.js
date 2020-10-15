import React, { useReducer } from 'react';
import axios from 'axios';


//Created Context
export const ProfileContext = React.createContext();


//Stored action types names

const types = {
	Add_Profile:"Add_Profile",
	Get_Profile: "Get_Profile",
	Get_Profiles: "Get_Profiles",
	Delete_Profile: "Delete_Profile",
	Edit_Profile: "Edit_Profile",
	Profile_Error: "Profile_Error",
	Clear_Profile :"Clear_Profile",
	Open_Edit :"Open_Edit",
};


//Stored actions in a reducer

const profileReducer = (state, action) => {
	switch (action.type) {
	case types.Profile_Error:
		return { ...state, errorMessage: action.payload, loading: false };
	case types.Add_Profile:
		return { ...state, profiles: [...state.profiles, action.payload], loading: false };
	case types.Get_Profile:
		return { ...state, profile: action.payload, loading: false };
	case types.Clear_Profile:
		return { ...state, profile: null, loading: false };
	case types.Get_Profiles:
		return { ...state, profiles: action.payload, loading: false };
	case types.Edit_Profile:
		return { ...state, profile: action.payload, loading: false };
	case types.Delete_Applicaton:
		return { ...state, profiles: state.profiles.filter((profile) => profile.id !== action.payload), loading: false };
	case types.Open_Edit:
		return { ...state, edit:action.payload };
	default:
		return state;
	}
};


//Context has Provider and Consumer in itself.
//Here we set Context Provider and stored our states and actions in it to provide them to Consumer

const ProfileState = (props) =>{

	const initialState ={
		profiles:[],
		profile:null,
		edit:false,
	};

	const [state, dispatch] = useReducer(profileReducer, initialState);

	const getProfiles = async ()=>{
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
		return (!response) ? (dispatch({ type: types.Profile_Error, payload: 'An error occured' })
		) : (dispatch({ type:types.Get_Profiles, payload:response.data })
		);
	};


	const getProfile = async (id) => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
		return (!response) ? (
			dispatch({ type: types.Profile_Error, payload: 'An error occured' })
		) : (
			console.log(response.data),
			dispatch({ type: types.Get_Profile, payload:response.data })
		);
	};


	const addProfile = async (profile) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const response = await axios.post(`https://jsonplaceholder.typicode.com/users/`, profile, config);
		(!response) ? (
			dispatch({ type: types.Profile_Error, payload: 'An error occured' })
		) : (
			console.log('Add Context', response),
			dispatch({ type: types.Add_Profile, payload: response.data })
		);
	};


	const deleteProfile = async (id) => {
		const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		(!response) ? (
			dispatch({ type: types.Profile_Error, payload: 'An error occured' })
		) : (
			dispatch({ type: types.Delete_Profile, payload: id })
		);
	};



	const editProfile = async (profile) => {
		console.log('context', profile);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${profile.id}`, profile, config);
		(!response) ? (
			dispatch({ type: types.Profile_Error, payload: 'An error occured' })
		) : (
			console.log('context res', response),
			dispatch({ type: types.Edit_Profile, payload: response.data })
		);
	};


	const clearProfile = ()=>{
		dispatch({ type: types.Clear_Profile });
	};

	const manageEdit = (bool)=>{
		dispatch({ type:types.Open_Edit, payload:bool });
	};

	return (
		<ProfileContext.Provider
			value={{
				profiles:state.profiles,
				profile:state.profile,
				edit:state.edit,
				addProfile,
				getProfiles,
				getProfile,
				editProfile,
				deleteProfile,
				clearProfile,
				manageEdit,
			}}
		>
			{props.children}
		</ProfileContext.Provider>
	);
};

export default ProfileState;













