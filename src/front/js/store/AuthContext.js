/*
import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer.js"
import { onAuthStateChanged } from "firebase/auth"


const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.currentUser))        
    },[state.currentUser])

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}
import React from "react"
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase.js'

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { currentUser, loading };
}*/