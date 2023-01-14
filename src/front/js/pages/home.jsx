import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "/workspace/proyecto-4geeks/src/front/styles/home.css";
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
				Contactenos Via {" "}
				<a  href="https://api.whatsapp.com/send?phone=59893867429"> <img className="whatlogo" src="https://i.imgur.com/9HKrmqj.png" alt="w"/>
					
				</a>
			</p>
		
		</div>
		
		
	);
};
