import React, { useReducer } from 'react';
import axios from 'axios';

export const AdminContext = React.createContext();


const types = {
    Set_Skills: "Set_Skills",
    Set_New_Skill:"Set_New_Skill",
    Set_Github_Accounts:"Set_Github_Accounts",
    Set_New_Account:"Set_New_Account",
    Set_Error: "Set_Error",
};


const authReducer = (state, action) => {
	switch (action.type) {
        case types.Set_Skills:
            return { ...state, skillsList:action.payload };
        case types.Set_New_Skill:
            return { ...state, skillsList:[...state.skillsList, action.payload], isLoading:false };
        case types.Set_Github_Accounts:
            return { ...state, github_accounts:action.payload, isLoading:false};
        case types.Set_New_Account:
            return { ...state, github_accounts:[...state.github_accounts, action.payload], isLoading:false};
        default:
            return state;
        }
};
                    
                    
const AdminState = (props) =>{
    const initialState={
        skillsList:[],
        github_accounts:[],
        isLoading:false,
        error:null,
    }
    
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    const baseUrl = 'https://designed-gd.herokuapp.com/api'
    // const baseUrl = 'http://localhost:3100/api'
        
      
    const fetchSkills = ()=>{
        dispatch({ type: types.Set_Is_Loading, payload:true }),       
        axios.get(`${baseUrl}/skills`)
            .then(response=>{
                console.log('skills fetch response', response.data)
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

    const addNewAccount=(githubName)=>{
        dispatch({ type: types.Set_Is_Loading });
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.post(`${baseUrl}/accounts`, githubName, config)
			.then((response)=>{
				dispatch({ type: types.Set_New_Account, payload:response.data})
			})
			.catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
		});
    };
    
    const addNewSkill=(skill)=>{
        dispatch({ type: types.Set_Is_Loading });
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios.post(`${baseUrl}/skills`, skill, config)
			.then((response)=>{
                console.log('add skill response', response.data)
				dispatch({ type: types.Set_New_Skill, payload:response.data})
			})
			.catch((error)=>{
				dispatch({ type:types.Set_Error, payload:error });
		});
	};

    return (
		<AdminContext.Provider
			value={{
                skillsList:state.skillsList,
                github_accounts:state.github_accounts,
                isLoading:state.isLoading,
                error:state.error,
                fetchGithubAccounts,
                addNewAccount,
                fetchSkills,
                addNewSkill,               
			}}
		>
			{props.children}
		</AdminContext.Provider>
	);
}


export default AdminState;