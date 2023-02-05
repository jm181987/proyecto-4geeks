import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png";
import { Context } from "../store/appContext";
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.js"


export function loginCheck(user){
  const loggedOutLinks = document.querySelectorAll('.logged-out')
  const loggedInLinks = document.querySelectorAll('.logged-in')
  
  if(user){
    console.log('HOLAAAw222')
    console.log(loggedOutLinks)
    loggedOutLinks.forEach(link => link.style.display = 'none')
    loggedInLinks.forEach(link => link.style.display = 'block')
  } else {
    loggedOutLinks.forEach(link => link.style.display = 'block')
    loggedInLinks.forEach(link => link.style.display = 'none')
  }

}

export const Navbar = () => {
  const { store, actions } = useContext(Context)


  async function loggingout (event) {
    console.log('HOLA HOLA')
    event.preventDefault();
    try {
      await signOut(auth)
      console.log("signup out");
    } catch (error) {
      console.log(error)
    }

  }



	const [links, setLinks] = useState ([
    {text: "Artistas", href: "/artistas" }
  ])

  return (
    <nav className="navbar sm navbar-dark bg-black  sticky-top ">
      <a className="navbar-brand" href="/" ><img src={logo} /></a>
      
      <nav className="navbar navbar-expand-md bg-black">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#"></a>
          
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              {links.map((link, index) => (
                <li className="nav-item"  key={index}>
                  <Link className="nav-link" to={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link className="nav-link logged-out" to='/login'>
                  Inicio de sesion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link logged-out" to='/signup'>
                  Registrarse
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link logged-in" id="logout" onClick={loggingout} href=''>Cerrar sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};
