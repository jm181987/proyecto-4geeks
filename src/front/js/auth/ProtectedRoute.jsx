import React from "react";
import { useAuth } from "../context/authContext.js";
import { Navigate } from "react-router-dom";


export function ProtectedRoute({children}){
    const { user, loading } = useAuth()
    if(loading) return <h1>loadign</h1>
    if(!user) return <Navigate to='/login' />

    return <>{children}</>
}