import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export  default function Terminos  ()  {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 container ">
			<h1>Terminos y Condiciones</h1>
			<ul className="list-group list-group-numbered">
  <li className="list-group-item">Aceptación de los términos y condiciones: Al utilizar este sitio web, usted acepta los términos y condiciones establecidos en este documento. Si no está de acuerdo con estos términos, no utilice este sitio.</li>
  <li className="list-group-item">Contenido del sitio: Todos los contenidos del sitio, incluyendo textos, imágenes, gráficos, logos, iconos, botones, software y demás contenidos, son propiedad exclusiva de la empresa o de sus respectivos propietarios y están protegidos por las leyes de propiedad intelectual.</li>
  <li className="list-group-item">Uso del sitio: El usuario se compromete a utilizar el sitio y sus servicios de conformidad con la ley, la moral, el orden público y los presentes términos de uso. El usuario se obliga a no utilizar el sitio y sus servicios para fines ilícitos, contrarios a lo establecido por las presentes condiciones, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el sitio o sus servicios o impedir un normal disfrute del mismo por parte de otros usuarios.</li>
  <li className="list-group-item">Proceso de contratación: El proceso de contratación de artistas a través de este sitio web se realizará mediante la presentación de un portafolio y una entrevista personal con los miembros del equipo de selección. La empresa se reserva el derecho de aceptar o rechazar cualquier solicitud de contratación sin necesidad de dar explicaciones.</li>
  <li className="list-group-item">Pago: El pago por los servicios prestados por los artistas contratados se realizará mediante transferencia bancaria una vez finalizado el trabajo y previa verificación de la calidad del mismo por parte de la empresa.</li>
  <li className="list-group-item">Responsabilidad: La empresa no será responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del sitio, incluyendo, sin carácter limitativo, los daños directos o indirectos, la pérdida de beneficios o de contratos, la interrupción del negocio o la pérdida de programas o de datos en los sistemas informáticos.</li>
  <li className="list-group-item">Modificaciones: La empresa se reserva el derecho a modificar, en cualquier momento y sin necesidad de preaviso, la presentación y configuración del sitio, así como las presentes condiciones de uso.</li>
  <li className="list-group-item">Duración y terminación: Los términos y condiciones aquí establecidos tendrán una duración indeterminada. Sin embargo, la empresa se reserva el derecho a dar por terminado, suspendido o interrumpido en cualquier momento y sin necesidad de preaviso, el acceso a los contenidos del sitio, sin que ello genere derecho a indemnización alguna a favor del usuario.</li>
  <li className="list-group-item">Resolución y fuero: Con carácter previo a la interposición de cualquier reclamación, deberá intentar una solución amistosa notificando al prestador de los hechos que motivan la reclamación. En caso de conflicto, las partes se someten a los Juzgados y Tribunales de la ciudad del prestador, renunciando a cualquier otro fuero que pudiera corresponderles.</li>
  <li className="list-group-item">Ley aplicable y jurisdicción: El presente aviso legal se regirá e interpretará de acuerdo con las leyes locales. Cualquier controversia que pudiera derivarse del acceso o uso del sitio será resuelta por los Juzgados y Tribunales de la ciudad del prestador, renunciando las partes a cualquier otro fuero que pudiera corresponderles.</li>
</ul>
		
		</div>
	);
};
