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
		return { ...state, isAuthenticated:true, github_id:action.payload, isLoading: false };
    case types.Set_UserName:
        return { ...state, github_id: action.payload.id, userName:action.payload.name, isAuthenticated:true, isLoading: false };
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
        userName:null,
        github_id:null,
        isAuthenticated: false,
        isGraduate:true,
        isLoading:false,
		error:null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState);


    const fetchUserName = (code)=>{
        return axios.get(`https://designed-gd.herokuapp.com/api/callback?code=${code}`)
        .then(response => {
            return response.data
        })
    }

    const baseUrl = 'https://designed-gd.herokuapp.com/api'
    // const baseUrl = 'http://localhost:3100/api'

    const checkGraduate = (userName)=>{
        dispatch({ type: types.Set_Is_Loading, payload:true }),       
        axios.get(`${baseUrl}/accounts/${userName}`)
            .then(response=>{
                    if(response.status==200){
                        console.log('200', response.data)
                        let name=response.data[0].account_name;
                        let id = response.data[0].github_id; 
                      return  dispatch({ type: types.Set_UserName, payload:{name, id}})
                    }
                    if (response.status==206){
                        console.log('206', response.data.github_id)
                        let id=response.data.github_id
                        dispatch({ type: types.Set_Logged_In, payload:id});   
                    }
            })
            .catch((error)=>{
                console.log('error', error)
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
                userName:state.userName,
                github_id:state.github_id,
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