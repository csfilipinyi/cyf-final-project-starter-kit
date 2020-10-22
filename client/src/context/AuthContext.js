import React, { useReducer } from 'react';
import axios from 'axios';



export const AuthContext = React.createContext();


const types = {
    Set_Is_Loading: "Set_Is_Loading",
	Set_Logged_In: "Set_Logged_In",
    Set_User: "Set_User",
    Set_Isnot_Graduate:'Set_Isnot_Graduate',
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
    case types.Set_User:
        return { ...state, userName: action.payload, isAuthenticated:true, isLoading: false };
    case types.Set_Isnot_Graduate:
        return { ...state, isGraduate:false, isLoading: false }; 
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


    const baseUrl = 'https://dev-graduate-directory.herokuapp.com/api'

    const fetchUserName = (code)=>{
        fetch(`https://gd-auth-test.herokuapp.com/api/callback?code=${code}`)
        .then(res => res.json())
        .then(username => {
            checkGraduate(username)
            console.log('isauth', isAuthenticated, username)
         })
    }

    const checkGraduate = (userName)=>{
        dispatch({ type: types.Set_Is_Loading, payload:true }),       
        fetch('https://gist.githubusercontent.com/OBakir90/ecab122e19b0292737d85699dab2696c/raw/ed9e2fa9066cd1c67d7248db75eb9912804b9ec3/graduates.json')
            .then(response=>response.json())
            .then(data=>{     
                const graduatesObject =data[0];  
                if(userName in graduatesObject){
                    (graduatesObject[userName])?
                        dispatch({ type: types.Set_User, payload:data})
                        :     
                        dispatch({ type: types.Set_Logged_In, payload:userName});   
                }else{
                   dispatch({ type: types.Set_Isnot_Graduate})
                }
            })
            .catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
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
                fetchUserName
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}


export default AuthState;