import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)

    const { isAuthenticated } = authContext

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ?
                    <Component {...props} />
                    :
                    <Redirect to="/" />
            }
        />
    )
}

