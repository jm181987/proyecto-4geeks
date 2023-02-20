//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.js"
import { loginCheck } from "./component/navbar.jsx";

//include your index.scss file into the bundle
//import "../styles/index.css";
import '../scss/theme.scss'
import 'tippy.js/animations/scale.css';

//import './firebase/firebase.js'
//import './auth/logout.js'


//import your own components
import Layout from "./layout";




onAuthStateChanged(auth, async (user) =>{
    if(user){
        loginCheck(user)
    } else {
        loginCheck(user)
    }
})


//render your react application
ReactDOM.render(
        <Layout />,
 document.querySelector("#app"));
