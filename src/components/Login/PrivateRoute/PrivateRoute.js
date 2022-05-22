import React from 'react';
import {  Route,Navigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth();
    if(isLoading){
        return 'loading...'
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
                children
            ) : (
                <Navigate to="/login" />
            )
        }
    />
    );
};

export default PrivateRoute;