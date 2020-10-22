import React, { useReducer } from 'react';
import axios from 'axios';


export const AuthContext = React.createContext();


const types = {
    Set_Is_Loading: "Set_Is_Loading",
	Set_Logged_In: "Set_UserName",
    Set_User_Profile: "Set_UserProfile",
    Set_Error: "Set_Error",
    Set_Logout:"Set_Logout"
};


const authReducer = (state, action) => {
	switch (action.type) {
	case types.Set_Is_Loading:
		return { ...state, isLoading: true };
	case types.Set_Error:
		return { ...state, isLoading: false, error:action.payload };
	case types.Set_Logged_In:
		return { ...state, userName: action.payload, isAuthenticated:true, isLoading: false };
	case types.Set_User_Profile:
		return { ...state, userProfile: action.payload, isAuthenticated:true, isLoading: false };
    case types.Set_Logout:
        return { ...state, userProfile:null, userName:null, isAuthenticated:false, isLoading: false };
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
        axios.get('https://gist.githubusercontent.com/OBakir90/ecab122e19b0292737d85699dab2696c/raw/ed9e2fa9066cd1c67d7248db75eb9912804b9ec3/graduates.json')
            .then(response=>response.json())
            .then(data=>{       
                const graduatesObject =data[0];     
                if(userName in graduatesList){
                    dispatch({ type: types.Set_Logged_In, payload:userName}),       
                    console.log('graduate', data, isAuthenticated, 'list', graduatesList[userName])
                   if(graduatesList[data]){
                    axios.get('https://gist.githubusercontent.com/OBakir90/46c0de835cb3db4c42f655e5f467825a/raw/d16c488a33cc1ebbceea866fe988591c3683bf0c/myprofile.json')
                    .then(response=>response.json())
                    .then(profile=>{ 
                        dispatch({ type: types.Set_User_Profile, payload:profile}),       
                        history.push('/viewprofile')
                        console.log('hasprofile', data, isAuthenticated, profile)
                        })
                    }else{
                      history.push('/createprofile')
                      console.log('hasntprofile', data, isAuthenticated)
                   }		
                } else {
                  history.push('/notfound')
                } 
            })
            .catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
    }

    const fetchUserProfile =(userName)=>{
        dispatch({ type: types.Set_Is_Loading }),       
        axios.get(`${baseUrl}/graduates/${userName}`)
            .then(response=>response.json(
                dispatch({ type: types.Set_User_Profile, payload:response.data })
            ))
            .catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
			});
    }

    //Temporary Functions 
    const setIsAuth = (userName)=>{
        dispatch({ type: types.Set_Logged_In, payload:userName })
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