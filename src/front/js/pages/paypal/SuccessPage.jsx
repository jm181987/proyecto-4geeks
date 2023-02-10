import React from 'react';

import Navbar from '/workspace/proyecto-4geeks/src/front/js/component/navbar.jsx';
import Footer from '/workspace/proyecto-4geeks/src/front/js/component/footer.jsx';

import '/workspace/proyecto-4geeks/src/paypal/SeccessPage.css';
import { Button } from 'react-bootstrap';


export const SuccessPage = (props) => {
  const {phone} = props
  
  return (
    <div className='container-fluid'>
      <h1 classNme='row align-items-center'>Felicidades , tu transacción ha sido un éxito!</h1>
      <h2>
        Contacta con tu artista:
      </h2>
     <a href="https://api.whatsapp.com/send?phone=992647971"><button class="shadow__btn1 justify-content-center align-items-center">Contactar</button></a>
      
      
      
    </div>
  );
}


