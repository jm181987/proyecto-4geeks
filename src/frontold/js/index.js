//import react into the bundle
import React from "react";
//import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";


//render your react application
//ReactDOM.render(<Layout />, document.querySelector("#app"));
import { createRoot } from 'react-dom/client';


const container = document.querySelector("#app");
const root = createRoot(container);
root.render(<Layout />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
