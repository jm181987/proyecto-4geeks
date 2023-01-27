import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export default function Mision() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex text-center" >
			<div className="row md justify-content-center " >
					<h1>
						<br></br>Mision
					</h1>
					<div className="col md text-white">
						<h5>
							Proporcionar una plataforma en línea confiable y accesible para conectar a los artistas con oportunidades de trabajo y proyectos en todas las industrias creativas.
						</h5>
					</div>
				
				<div className="row md justify-content-center t-5 ">
					<h1>
						<br></br>Vision
					</h1>
					<div className="col md mb-3 text-white ">
						<h5 >
							Visión: Ser el líder en la industria de contratación de artistas en línea, brindando una experiencia excepcional a ambos artistas y clientes a través de un servicio personalizado y tecnología innovadora.
						</h5><br/>
					</div>
				</div>
			</div>
		</div>
	);
};