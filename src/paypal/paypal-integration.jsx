import React, { useEffect } from 'react';


const PaypalButton = (props) => {
 const {price} = props
 useEffect(() => {
   const paypalScript = document.createElement('script');
   paypalScript.src = 'https://www.paypal.com/sdk/js?client-id=AbvAplNYCEohTGENf1U8Zlp9pTEVN109zPktZ0jV2mfYDum91UpxAxUlrewDSbuHtiHw8MhCxQhBue9X&currency=USD';
   document.body.appendChild(paypalScript);


   paypalScript.addEventListener('load', () => {
     paypal.Buttons({
       createOrder: (data, actions) => {
         return actions.order.create({
           purchase_units: [{
             amount: {
               value: price ,
             },
           }],
         });
       },
       onApprove: (data, actions) => {
         return actions.order.capture().then((orderData) => {
           console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
           const transaction = orderData.purchase_units[0].payments.captures[0];
           window.alert("Pago Exitoso");
           setTimeout(() => {
             window.location.replace("https://3000-jm181987-proyecto4geeks-7hhwm1kmoeu.ws-us86.gitpod.io/paypal/success");
           }, 1500);
         });
       },
     }).render('#paypal-button-container');
   });
 }, []);


 return (
   <div>
     <div id="paypal-button-container" />
   </div>
 );
};


export default PaypalButton;
