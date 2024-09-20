import React from 'react'
import { useUser } from '../lib/context/user';
import { Navigate, Route } from 'react-router-dom';

const AuthRoute = ({children,user }) => {
    // const user = useUser();
    
    console.log(user,children)
    return (
         user?.current!==null ? children : <Navigate to="/login" />
    )
}

export default AuthRoute