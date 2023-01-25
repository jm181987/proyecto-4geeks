import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png";
export const Navbar = () => {

	const [links, setLinks] = useState ([
    {text: "Artistas", href: "/artistas" },
    {text: "Quienes somos", href: "/quienes"}, 
    {text: "Caracteristicas", href: "/caracteristicas"},
    {text: "Terminos y Condiciones", href: "/terminos"},
    {text: "Inicio de sesion", href: "/login"},
    {text: "Registrarse", href: "/signup"},
    {text: "Cerrar sesion", href: "/logout"}
  ])
	
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add code to handle login here
    setIsLoggedIn(true);
    setUsername('John Doe');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  

  return (
    <nav className="navbar navbar-dark bg-dark mb-3 ">
      <a className="navbar-brand" href="/" ><img src={logo} /></a>
      
      <nav className="navbar navbar-expand-md bg-dark">
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
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};
