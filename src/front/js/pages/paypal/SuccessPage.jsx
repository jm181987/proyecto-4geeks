import React from 'react';

import Navbar from '/workspace/proyecto-4geeks/src/front/js/component/navbar.jsx';


import '/workspace/proyecto-4geeks/src/paypal/SeccessPage.css';



export const SuccessPage = (props) => {
  const {phone} = props
  
  return (
    <div className='contenedor '>
      <h1 id="titulo-success" >Tu transacción ha sido un éxito!</h1>
      <h2 id="texto-success">
        Contacta con tu artista:
      </h2>
     <a id="boton-success" href="https://api.whatsapp.com/send?phone=992647971"><button class="shadow__btn1">Contactar</button></a>
      
      
      
    </div>
  );
}


