import React, { useReducer } from 'react';
import axios from 'axios';


export const AuthContext = React.createContext();


const types = {
    Set_Is_Loading: "Set_Is_Loading",
	Set_User_Name: "Set_UserName",
    Set_User_Profile: "Set_UserProfile",
    Set_Error: "Set_Error",
};


const authReducer = (state, action) => {
	switch (action.type) {
	case types.Set_Is_Loading:
		return { ...state, isLoading: true };
	case types.Set_Error:
		return { ...state, isLoading: false, error:action.payload };
	case types.Set_User_Name:
		return { ...state, userName: action.payload, isAuthenticated:true, isLoading: false };
	case types.Set_User_Profile:
		return { ...state, userProfile: action.payload, isAuthenticated:true, isLoading: false };
    default:
		return state;
	}
};


const AuthState = (props) =>{
    const initialState={
        userName : null,
        userProfile :null,
        isAuthenticated: false,
        isLoading:false,
		error:null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState);


    const baseUrl = 'https://dev-graduate-directory.herokuapp.com/api'

    const checkGraduate = (userName)=>{
        dispatch({ type: types.Set_Is_Loading }),       
        axios.get(`${baseUrl}/graduates`)
            .then(response=>response.json(
                response.includes(userName)&&dispatch({ type: types.Set_User_Name, payload:userName })
            ))
            .catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
    }

    const fetchUserProfile =(userName)=>{
        dispatch({ type: types.Set_Is_Loading }),       
        axios.get(`${baseUrl}/graduates?name=${userName}`)
            .then(response=>response.json(
                dispatch({ type: types.Set_User_Profile, payload:response.data })
            ))
            .catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
    }


    //Temporary Functions 
    const setIsAuth = (userName)=>{
        dispatch({ type: types.Set_User_Name, payload:userName })
    }

    return (
		<AuthContext.Provider
			value={{
				userName :state.userName,
                userProfile :state.userProfile,
                isAuthenticated: state.isAuthenticated,
                isLoading:state.isLoading,
                error:state.error,
                checkGraduate,
                fetchUserProfile,
                setIsAuth
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}


export default AuthState;