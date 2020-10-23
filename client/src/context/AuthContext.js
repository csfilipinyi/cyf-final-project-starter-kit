import React, { useReducer } from 'react';
import axios from 'axios';



export const AuthContext = React.createContext();


const types = {
    Set_Is_Loading: "Set_Is_Loading",
	Set_Logged_In: "Set_Logged_In",
    Set_UserName: "Set_UserName",
    Set_Is_Graduate:'Set_Is_Graduate',
    Set_Error: "Set_Error",
    Set_Logout:"Set_Logout"
};


const authReducer = (state, action) => {
	switch (action.type) {
	case types.Set_Is_Loading:
		return { ...state, isLoading: action.payload };
	case types.Set_Error:
		return { ...state, isLoading: false, error:action.payload };
	case types.Set_Logged_In:
		return { ...state, isAuthenticated:true, isLoading: false };
    case types.Set_UserName:
        return { ...state, userName: action.payload, isAuthenticated:true, isLoading: false };
    case types.Set_Is_Graduate:
        return { ...state, isGraduate:action.payload, isLoading: false }; 
    case types.Set_Logout:
        return { ...state, userProfile:null, userName:null, isAuthenticated:false, isLoading: false };
    default:
		return state;
	}
};


const AuthState = (props) =>{
    const initialState={
        userName : null,
        isAuthenticated: false,
        isGraduate:true,
        isLoading:false,
		error:null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState);


    const fetchUserName = (code)=>{
        fetch(`https://gd-auth-test.herokuapp.com/api/callback?code=${code}`)
        .then(res => res.json())
        .then(username => {
            checkGraduate(username)
         })
    }

    const checkGraduate = (userName)=>{
        dispatch({ type: types.Set_Is_Loading, payload:true }),       
        fetch('https://gist.githubusercontent.com/OBakir90/f8e29b4cafda937e884723470983c777/raw/68db2d010ad45ba0de91cad648f4a51e536f63da/status')
            .then(response=>response.json())
            .then(profile=>{     
                    console.log(profile)
                    profile[0].status?
                    dispatch({ type: types.Set_UserName, payload:userName})
                    :     
                    dispatch({ type: types.Set_Logged_In});   
            })
            .catch((error)=>{
                console.log(error);
				dispatch({ type:types.Set_Is_Graduate, payload:false });
			});
    }

    const logOut = ()=>{
        dispatch({ type:types.Set_LogOut});
    }

    return (
		<AuthContext.Provider
			value={{
				userName :state.userName,
                isAuthenticated: state.isAuthenticated,
                isLoading:state.isLoading,
                isGraduate:state.isGraduate,
                error:state.error,
                checkGraduate,
                fetchUserName, 
                logOut
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}


export default AuthState;