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
        return { ...state, user: action.payload, isAuthenticated:true, isLoading: false };
    case types.Set_Is_Graduate:
        return { ...state, isGraduate:false, isLoading: false }; 
    case types.Logout:
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
        axios.get(`https://gd-auth-test.herokuapp.com/api/callback?code=${code}`)
        .then(res => res.json())
        .then(username => {
            checkGraduate(username)
         })
    }
    const baseUrl = 'https://dev-graduate-directory.herokuapp.com/api/'
    
    const checkGraduate = (userName)=>{
        dispatch({ type: types.Set_Is_Loading, payload:true }),       
        axios.get(`${baseUrl}/accounts/${userName}`)
            .then(response=>{
                    console.log('response', response)
                    if(response.status==200){
                        const user = {...response.data[0], "userName":userName}
                        console.log('200', response.data, user)
                      return  dispatch({ type: types.Set_UserName, payload:user})
                    }
                    if (response.status==206){
                        console.log('206', response.data)
                      return  dispatch({ type: types.Set_Logged_In, payload:response.data});   
                    }
            })
            .catch((error)=>{
				dispatch({ type:types.Set_Is_Graduate });
			});
    }

    const logOut = ()=>{
        console.log('auth logout');
        dispatch({ type:types.Logout});
    }

    return (
		<AuthContext.Provider
			value={{
                user:state.user,
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