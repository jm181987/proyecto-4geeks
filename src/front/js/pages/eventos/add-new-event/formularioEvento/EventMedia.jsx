// import node module libraries
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { CheckLg } from 'react-bootstrap-icons';
import { uploadFile } from '../../../../firebase/firebase.js'

export const EventMedia = (props) => {
	const { previous, handleChange, handleAdd, handleFile } = props;
	const [file, setFile] = useState(null)

	async function rdyToUpload() {
		const downloadUrl = await uploadFile(file);
		console.log('File available at OTRO', downloadUrl);
		handleFile(downloadUrl)
	  }

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3  border-0">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0">Multimedia</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>
					{/* Event cover image */}
					<Form.Label>Poster del evento</Form.Label>
					<Form.Group className="mb-1 input-group">
						<Form.Control
							id="event_image"
							name='event_image'
							type="file"
							className="form-control"
							onChange={e => setFile(e.target.files[0])}
						/>
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
							id="event_video_url" 
							name="event_video_url"
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
				<Button variant="danger" onClick={rdyToUpload}>Subir a revision</Button>
			</div>
		</Form>
	);
};

