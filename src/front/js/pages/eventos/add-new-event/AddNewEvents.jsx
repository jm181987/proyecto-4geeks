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

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebase.js'

import { v4 } from 'uuid';

export const AddNewEvent = () => {
    const [currentStep, setCurrentStep] = useState(1);
	const [ fileUrl, setFileUrl ] = useState(null)

	const [formData, setFormData] = useState({
		event_title: 'Event Title',
		event_category: 'Event Category',
		event_level: 'Event Level',
		event_description: 'Event Description',
		event_poster_url: 'url_poster',
		event_video_url: 'url_youtube',
		timeStamp: serverTimestamp()
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
		console.log('HOLA HandleChange')
	};

	const handleFile = async (event) => {
		await new Promise(resolve => {
		  setFormData({
			...formData,
			event_poster_url: event
		  }, resolve);
		});
	  
		handleAdd();
	  };
	  
	  const handleAdd = async() =>{
		  try {
			  await setDoc(doc(db, "eventos", v4()), formData);
		  } catch (error) {
			  console.log(error)
		  }
  
	  }
	

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
					handleAdd = {handleAdd}
					previous={previous}
					handleFile={handleFile}
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