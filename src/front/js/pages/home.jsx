import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png"



const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
  
	return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };
  


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
export default LoginButton;