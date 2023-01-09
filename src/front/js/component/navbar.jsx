import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [links, setLinks] = useState ([
    {text: "Artistas", href: "/artistas" },
    {text: "Quienes somos", href: "/quienes"}, 
    {text: "Caracteristicas", href: "/caracteristicas"},
    {text: "Terminos y Condiciones", href: "/terms"},
    {text: "Inicio de sesion", href: "/login"},
  ])
	
  
  
  return (
		<nav className="navbar navbar-light bg-light mb-3">
		<nav className="navbar navbar-expand-md bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Artistas 24/7</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
       {links.map((link,index) =>(
<li className="nav-item" key={index}>
	<Link className="nav-link" to={link.href}>
  {link.text}</Link>
</li>


	   ))}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
		</nav>
	);
};