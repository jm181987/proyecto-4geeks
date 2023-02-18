import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from '../firebase/firebase.js'
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase.js';
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
//const { store, actions } = useContext(Context)

export const useAuth = () => {
  const acontext = useContext(authContext);
  if (!acontext) throw new Error("There is no Auth provider");
  return acontext;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usuariodb, setUsuariodb] = useState(null)
  const navigate = useNavigate()

  async function signup (email, password, role) {
    const credentials = await createUserWithEmailAndPassword(auth, email, password).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    console.log(credentials.user.uid)
    const useruid = credentials.user.uid
    const datauser = {email: email, role: role}
    const artistuser = {email: email, status: 'nuevo'}
    setDoc(doc(db, "usuarios", useruid), datauser);
    if(role == 'Artista'){
      console.log('se cree artista!!')
      setDoc(doc(db, "artistas", useruid), artistuser);
    }
    return credentials
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); 
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);


  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        console.log(currentUser.uid)
        const userid = currentUser.uid
        const docRef = doc(db, "usuarios", userid);
        // Obtenemos el documento usando el método get()
        getDoc(docRef)
          .then((doc) => {
            if (doc.exists()) {
              console.log("Datos del documento:", doc.data());
              setUsuariodb(doc.data())
            } else {
              console.log("¡El documento no existe!");
            }
          })
          .catch((error) => {
            console.log("Error al obtener el documento:", error);
          });
          console.log(usuariodb)
      }
      
    

    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        usuariodb,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
