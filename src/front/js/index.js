//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="grupoalpha.us.auth0.com"
    clientId="IipsWH6R7yq12ryfBygVNW1WbJFu2mX2"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('app')
);

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
