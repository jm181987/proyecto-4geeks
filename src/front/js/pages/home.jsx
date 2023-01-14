import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png"



  


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		

		<div className="text-center mt-5">
			<h1>test</h1>
			<div></div>
			<p> 
			
				<img src={logo} />
			</p>
			<div> 


			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		
		</div>
		
		
	);
};
