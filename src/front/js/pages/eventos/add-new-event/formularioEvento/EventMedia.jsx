// import node module libraries
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export const EventMedia = (props) => {
	const { next, previous } = props;

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
					<Form.Label>Porter del evento</Form.Label>
					<Form.Group className="mb-1 input-group">
						<Form.Control
							id="inputfavicon"
							type="file"
							className="form-control"
						/>
						<Form.Label
							htmlFor="inputfavicon"
							className="input-group-text mb-0"
						>
							Subir
						</Form.Label>
						<Form.Text className="text-muted">
                        Sube la imagen de tu curso aquí. Debe cumplir con la imagen de nuestro curso
                        estándares de calidad a ser aceptados. Pautas importantes: 750x440
                        píxeles; .jpg, .jpeg, . gif o .png. no hay texto en la imagen.
						</Form.Text>
					</Form.Group>
					{/* Video URL  */}
					<Form.Group className="mb-3 mt-3">
						<Form.Control type="text" placeholder="Video URL" id="VideoURL" />
						<Form.Text className="text-muted">
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
				<Button variant="primary" onClick={next}>
					Publicar
				</Button>
			</div>
		</Form>
	);
};

