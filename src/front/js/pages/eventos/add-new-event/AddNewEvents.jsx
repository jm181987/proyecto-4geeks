import React, { Fragment, useState } from "react";
import { 
    Col,
    Container,
    Row 
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { Stepper } from "../../../component/forms/Stepper.jsx";

import { BasicInfo } from "./formularioEvento/BasicInfo.jsx";
import { EventMedia } from "./formularioEvento/EventMedia.jsx";

export const AddNewEvent = () => {
    const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		course_title: 'Course Title',
		category_category: 'React',
		courses_level: 'Intermediate',
		course_description: 'Ahmedabad'
	});
	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	};
	const next = () => {
		setCurrentStep(currentStep === 2 ? 1 : currentStep + 1);
	};
	const previous = () => {
		setCurrentStep(currentStep === 1 ? 1 : currentStep - 1);
	};

	const steps = [
		{
			id: 1,
			title: 'Informacion Basica',
			content: (
				<BasicInfo
					data={formData}
					handleChange={handleChange}
					next={next}
				/>
			)
		},
		{
			id: 2,
			title: 'Archivos multimedia',
			content: (
				<EventMedia
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
				/>
			)
		}
	
	];
   


    return(
        <Fragment>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <div>
                                    <h1>
                                        Agregar nuevo evento
                                    </h1>
                                    <p>
                                        Llena el formulario para ingresar tu evento.
                                    </p>
                                </div>
                                <div>
                                    <Link to='#'>Volver a los eventos</Link>
                                    <Link to='#'>Publicar</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Stepper currentStep={currentStep} steps={steps} />
        </Fragment>
    )
}