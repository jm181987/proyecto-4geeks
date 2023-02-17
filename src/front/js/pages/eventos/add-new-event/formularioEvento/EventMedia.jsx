// import node module libraries
import React, { useState } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import { CheckLg } from 'react-bootstrap-icons';
import { uploadFile } from '../../../../firebase/firebase.js'
import Avatar from '../../../../../img/avatar/avatar.jpg'

export const EventMedia = (props) => {
	const { previous, handleChange, handleAdd, handleFile, data } = props;
	const [file, setFile] = useState(null)

	async function rdyToUpload() {
		if(file != null){
			const downloadUrl = await uploadFile(file)
			console.log('File available at OTRO', downloadUrl)
			const result = handleFile(downloadUrl)
			console.log(result)
		}
	  }

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3  border-0">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0 text-black">Multimedia</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>
					{/* Event cover image */}
					<Form.Label>Poster del evento</Form.Label>
					<Image
						src={data.image !== null ? data.image : Avatar}
						alt=""
						className="rounded-top-md"
						height="50"
						width="50"
						/>
					<Form.Group className="mb-1 input-group">
						<Form.Control
							id="image"
							name='image'
							type="file"
							className="form-control"
							onChange={e => setFile(e.target.files[0])}
						/>
						<Button variant="primary" className="input-group-text mb-0" onClick={e => rdyToUpload()}  >
				                Subir
			            </Button>
						<Form.Text className="text-muted">
                        Sube la imagen de tu curso aquí. Debe cumplir con la imagen de nuestro curso
                        estándares de calidad a ser aceptados. Pautas importantes: 750x440
                        píxeles; .jpg, .jpeg, . gif o .png. no hay texto en la imagen.
						</Form.Text>
					</Form.Group>
					{/* Video URL  */}
					<Form.Group className="mb-3 mt-3">
						<Form.Control 
							type="text" 
							placeholder="Video URL" 
							id="video_url" 
							name="video_url"
							onChange={e => handleChange(e)} />
						<Form.Text className="text-m
						\\uted">
                        Introduce una URL de vídeo válida. Una promo bien hecha
                        video tienen 5 veces más probabilidades de comprar su evento.
						</Form.Text>
					</Form.Group>
				</Card.Body>
			</Card>

			{/* Button */}
			<div className="d-flex justify-content-between">
				<Button variant="secondary" onClick={previous}>
					Anterior
				</Button>
				<Button variant="danger" onClick={handleAdd}>Subir a revision</Button>
			</div>
		</Form>
	);
};

