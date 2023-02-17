import React from "react";
import { useAuth } from "../context/authContext.js";
import { Navigate } from "react-router-dom";


export function ProtectedArtistsRoute({children}){
    const { user, loading, role } = useAuth()
    if(loading) return <h1>loadign</h1>
    if(!role) return <Navigate to='/' />

    return <>{children}</>
}