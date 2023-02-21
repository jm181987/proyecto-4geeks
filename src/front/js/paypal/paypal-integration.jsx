import React, { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  db,
  addData,
} from "/workspace/proyecto-4geeks/src/front/js/firebase/firebase.js";

const PaypalButton = ({ price, eventId, artistId }) => {
  useEffect(() => {
    const paypalScript = document.createElement("script");
    paypalScript.src =
      "https://www.paypal.com/sdk/js?client-id=AbvAplNYCEohTGENf1U8Zlp9pTEVN109zPktZ0jV2mfYDum91UpxAxUlrewDSbuHtiHw8MhCxQhBue9X&currency=USD";
    document.body.appendChild(paypalScript);

    paypalScript.addEventListener("load", () => {
      paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(async (orderData) => {
              console.log(
                "Captureresult",
                { ...orderData, eventId, artistId },
                JSON.stringify(orderData, null, 2)
              );
              const transaction =
                orderData.purchase_units[0].payments.captures[0];

              const docRef = await addData("orderData", {
                ...orderData,
                eventId,
                artistId
              });
              console.log("Document written with ID: ", docRef.id);
              window.alert("Pago Exitoso");
              setTimeout(() => {
                window.location.replace("/evento/paypal/success");
              }, 1500);
            });
          },
        })
        .render("#paypal-button-container");
    });
  }, []);

  return (
    <div>
      <div id="paypal-button-container" />
    </div>
  );
};

export default PaypalButton;
