import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export default function Quienes() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex text-center" >
			<div className="row md justify-content-center " >
				<h1>Quienes somos</h1>
				<div className="col md text-white ">
					<h5>Somos una plataforma en línea dedicada a conectar a los artistas con oportunidades de trabajo y proyectos en todas las industrias creativas. Ofrecemos una amplia variedad de servicios para ayudar a los artistas a encontrar trabajo, desde la búsqueda de empleo hasta la presentación de propuestas y la negociación de términos. También brindamos servicios para ayudar a los clientes a encontrar el talento adecuado para sus proyectos, desde la búsqueda de candidatos hasta la contratación y la gestión de proyectos. Con una amplia variedad de artistas en nuestra base de datos, desde actores y músicos hasta Djs, estamos seguros de tener el talento adecuado para cualquier proyecto creativo.</h5>
				</div>
			</div>
		</div>
	);
};