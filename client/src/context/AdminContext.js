import React, { useReducer } from 'react';
import axios from 'axios';

export const AdminContext = React.createContext();


const types = {
    Set_Skills: "Set_Skills",
	Set_Github_Accounts:'Set_Github_Accounts',
    Set_Error: "Set_Error",
};


const authReducer = (state, action) => {
	switch (action.type) {
        case types.Set_Skills:
            return { ...state, skills:action.payload };
        case types.Set_Github_Accounts:
            return { ...state, github_accounts:action.payload };
        default:
            return state;
        }
};
                    
                    
const AdminState = (props) =>{
    const initialState={
        skills:null,
        github_accounts:null,
        isLoading:false,
        error:null,
    }
    
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    // const baseUrl = 'https://designed-gd.herokuapp.com/api'
        const baseUrl = 'http://localhost:3100/api'
        
      
    const fetchSkills = ()=>{
        dispatch({ type: types.Set_Is_Loading, payload:true }),       
        axios.get(`${baseUrl}/skills`)
            .then(response=>{
                return dispatch({ type: types.Set_Skills, payload:response.data})
            })
            .catch((error)=>{
                dispatch({ type:types.Set_Error });
            });
    }

    const fetchGithubAccounts = ()=>{
        dispatch({ type: types.Set_Is_Loading, payload:true }),       
        axios.get(`${baseUrl}/accounts`)
            .then(response=>{
                return dispatch({ type: types.Set_Github_Accounts, payload:response.data})
            })
            .catch((error)=>{
                dispatch({ type:types.Set_Error });
            });
    }

        

    return (
		<AdminContext.Provider
			value={{
                skills:state.skills,
                github_accounts:state.github_accounts,
                isLoading:state.isLoading,
                error:state.error,
                fetchGithubAccounts,
                fetchSkills               
			}}
		>
			{props.children}
		</AdminContext.Provider>
	);
}


export default AdminState;