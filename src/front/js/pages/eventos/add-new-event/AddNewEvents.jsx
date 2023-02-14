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
import { EventFeatures } from "./formularioEvento/EventFeatures.jsx";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebase.js';


import { v4 } from 'uuid';

export const AddNewEvent = () => {
    const [currentStep, setCurrentStep] = useState(1);
	const [ fileUrl, setFileUrl ] = useState(null)

	const [formData, setFormData] = useState({
		title: 'Event Title',
		category: 'Event Category',
		level: 'Event Level',
		description: 'Event Description',
		features: [],
		image: 'url_poster',
		video_url: 'url_youtube',
		price: 'price',
		date_added: serverTimestamp(),
		artist_name: 'Jenny Wilson',
		artist_image: 'Avatar7',
		status: 'Pending',
		duration: '1h 46m',
		rating: 2.0,
		ratingby: 16500,
		recommended: false,
		popular: false,
		trending: true,
		new: true,
		createdBy: 'user_id',
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
		console.log('handleChange')
	};


	const handleFeatures = event => {
		setFormData(prevFormData => ({
			...prevFormData,
			features: event
		}));
	};

	/*const handleFile = async (event) => {
		await new Promise(resolve => {
		  setFormData({
			...formData,
			poster_url: event
		  }, resolve);
		});
		return 'ok'
	  };*/
	  
	  const handleFile = async (event) => {
		setFormData({
		  ...formData,
		  image: event
		});
		setFormData({
			...formData,
			artist_image: event
		  });
		return 'ok';
	  };
	  
	  const handleAdd = async() =>{
			console.log('Activando handleAdd')
			//const user = firebase.auth().currentUser;
			//formData.createdBy = user.uid;
			try {
				await setDoc(doc(db, "eventos", v4()), formData);
			} catch (error) {
				console.log(error)
			}
	  }
	

	const next = () => {
		setCurrentStep(currentStep === 3 ? 1 : currentStep + 1);
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
			title: 'Precio',
			content: (
				<EventFeatures
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
					handleFeatures={handleFeatures}
				/>
			)
		},
		{
			id: 3,
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
        <Fragment >
            <div className='py-4 py-lg-6 bg-primary'>
                <Container>
                    <Row>
                        <Col lg={{span: 10, offset: 1}} md={12} sm={12}>
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="mb-4 mb-lg-0">
                                    <h1 className="mb-1 text-white">
                                        Agregar nuevo evento
                                    </h1>
                                    <p className="mb-0 text-white lead">
                                        Llena el formulario para ingresar tu evento.
                                    </p>
                                </div>
                                <div>
                                    <Link to='#' className="btn btn-success mb-2">Volver a los eventos</Link>
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