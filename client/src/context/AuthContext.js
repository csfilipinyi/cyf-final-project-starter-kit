import React, { useReducer } from 'react';
import axios from 'axios';
import {base_url_back} from '../../../base_url'



export const AuthContext = React.createContext();


const types = {
    Set_Is_Loading: "Set_Is_Loading",
	Set_Logged_In: "Set_Logged_In",
    Set_UserName: "Set_UserName",
    Set_Is_Graduate:'Set_Is_Graduate',
    Set_Github:'Set_Github',
    Set_Is_Admin:'Set_Is_Admin',
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
        return { ...state, isGraduate:action.payload, isLoading: false }; 
    case types.Set_Is_Admin:
        return { ...state, isAdmin:true, isAuthenticated:true, isLoading: false }; 
    case types.Set_Github:
        return {...state, github_name:action.payload.accountname, github_avatar:action.payload.avatar}    
    case types.Logout:
        return { ...state, userName:null, isAuthenticated:false, isAdmin:false, isLoading: false };
    default:
        return state;
        }
        };
                    
                    
    const AuthState = (props) =>{
        const initialState={
            userName:null,
            github_id:null,
            github_name:null,
            github_avatar:null,
            isAuthenticated: false,
            isGraduate:true,
            isAdmin:false,
            isLoading:false,
            error:null,
        }
        
        const [state, dispatch] = useReducer(authReducer, initialState);
        
        const baseUrl = `${base_url_back}/api`

        const fetchUserName = (code)=>{
            return axios.get(`https://dev-graduate-directory.herokuapp.com/api/callback?code=${code}`)
            .then(response => {
                return response.data
            })
        }
                        
        const setGithub = (githubname)=>{
            const avatar_url =`https://avatars.githubusercontent.com/${githubname}`
            const github = {
                avatar:avatar_url,
                accountname:githubname
            }
            dispatch({ type: types.Set_Github, payload:github }); 
        }


        const checkGraduate = (userName)=>{
            dispatch({ type: types.Set_Is_Loading, payload:true }),       
            axios.get(`${baseUrl}/accounts/${userName}`)
                .then(response=>{
                        if(response.status==200){
                            let name=response.data[0].account_name;
                            let id = response.data[0].github_id; 
                        return  dispatch({ type: types.Set_UserName, payload:{name, id}})
                        }
                        if(response.status==201){
                            console.log('isAdmin context called')
                        return  dispatch({ type: types.Set_Is_Admin})
                        }
                        if (response.status==206){
                            let id=response.data.github_id
                            dispatch({ type: types.Set_Logged_In, payload:id});   
                        }
                })
                .catch((error)=>{
                    dispatch({ type:types.Set_Is_Graduate, payload:false });
                });
        }

        const logOut = ()=>{
            dispatch({ type:types.Logout});
        }

        const setGraduate = ()=>{
            return dispatch({ type:types.Set_Is_Graduate, payload:true});
        }

    return (
		<AuthContext.Provider
			value={{
                user:state.user,
                userName:state.userName,
                github_id:state.github_id,
                github_name:state.github_name,
                github_avatar:state.github_avatar,
                isAuthenticated: state.isAuthenticated,
                isLoading:state.isLoading,
                isGraduate:state.isGraduate,
                isAdmin:state.isAdmin,
                error:state.error,
                checkGraduate,
                fetchUserName, 
                setGithub,
                setGraduate,
                logOut
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}


export default AuthState;