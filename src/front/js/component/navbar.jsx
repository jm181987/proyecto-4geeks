import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png";
import { Context } from "../store/appContext";
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.js"
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "../context/authContext.js";


export function loginCheck(user){
  const loggedOutLinks = document.querySelectorAll('.logged-out')
  const loggedInLinks = document.querySelectorAll('.logged-in')
  if(user){
    loggedOutLinks.forEach(link => link.style.display = 'none')
    loggedInLinks.forEach(link => link.style.display = 'block')
  } else {
    loggedOutLinks.forEach(link => link.style.display = 'block')
    loggedInLinks.forEach(link => link.style.display = 'none')
  }

}

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const { user, usuariodb } = useAuth()


  async function loggingout (event) {
    event.preventDefault();
    try {
      await signOut(auth)
      navigate("/")
      console.log("signup out");
      toast('Hasta la proxima!', {
        icon: '👋🏻',
      });
    } catch (error) {
      console.log(error)
    }

  }



	const [links, setLinks] = useState ([
    {text: "Artistas", href: "/artistas" },
    {text: "Eventos", href: "/eventos" }
  ])

  return (
    <nav className="navbar  bg-black  sticky-top ">
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
              {user == null && (
                <li className="nav-item logged-out">
                  <Link className="nav-link " to='/login'>
                  Inicio de sesion
                 </Link>
                </li>
              )}
              <li className="nav-item">
              {usuariodb && usuariodb.role === "Artista" && (
								<Link className="nav-link artist-role" to='/perfil'>
                Mi Perfil Artista
                </Link>
							)}
              </li>
              <li className="nav-item">
              {usuariodb && usuariodb.role === "Artista" && (
								<Link className="nav-link artist-role" to='/dashboard'>
                  Dashboard
                </Link>
							)}
              </li>
              {user == null && (
                <li className="nav-item logged-out">
                  <Link className="nav-link" to="/signup">
                    Registrarse
                  </Link>
                </li>
              )}
              {user &&(
                <li className="nav-item logged-in">
                  <a className="nav-link" id="logout" onClick={loggingout} href=''>Cerrar sesion</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Toaster
				position="top-center"
				reverseOrder={false}
			/>
    </nav>
  );
};
