import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

// import custom components
import { FormSelect } from '../../../../component/forms/FormSelect.jsx';

export const BasicInfo = (props) => {
	const { next } = props;

	const categoryOptions = [
		{ value: 'Tehcno', label: 'Tehcno' },
		{ value: 'EDM', label: 'EDM' },
		{ value: 'Hiphop', label: 'Hiphop' },
		{ value: 'Dancehall', label: 'Dancehall' },
		{ value: 'Instrumental', label: 'Instrumental' }
	];

	const EventLevel = [
		{ value: '100BPM', label: '100 BPM' },
		{ value: '120BPM', label: '120 BPM' },
		{ value: '140BPM', label: '140 BPM' }
	];

	const initialValue = `<p>Escriba aqui la descripcion del evneto</p>
                      <p><br /></p>        
                      <p>Aqui puedes <strong>escribir</strong> texto</p>
                      <p><br /></p><p><br /></p><p><br /></p><p><br /></p>`;

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3 ">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0">Informacion Basica</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>
					{/* Title  */}
					<Form.Group className="mb-3">
						<Form.Label htmlFor="courseTitle">Titulo del Evento</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre del evento"
							id="course_title"
							name="course_title"
						/>
						<Form.Text className="text-muted">
							Escribe un titulo de 60 palabras.
						</Form.Text>
					</Form.Group>

					{/* Category */}
					<Form.Group className="mb-3">
						<Form.Label>Categoria</Form.Label>
						<FormSelect
							options={categoryOptions}
							id="category_category"
							name="category_category"
							placeholder="Elegir Categoria"
						/>
						<Form.Text className="text-muted">
							Ayuda a las personas a encontrar tu evento por medio de las categorias.
						</Form.Text>
					</Form.Group>

					{/* Event level */}
					<Form.Group className="mb-3">
						<Form.Label>Ritmo</Form.Label>
						<FormSelect
							options={EventLevel}
							id="courses_level"
							name="courses_level"
							placeholder="Nivel del evento (Ritmo)"
						/>
					</Form.Group>

					{/* Event Description*/}
					<Form.Group className="mb-3">
						<Form.Label>Descripcion del evento</Form.Label>
						<Form.Control
							type="text-area"
							placeholder="Descripcion del evento"
							id="event_description"
							name="event_description"
						/>
						<Form.Text className="text-muted">
							Promociona lo mejor que puedas tu evento.
						</Form.Text>
					</Form.Group>
				</Card.Body>
			</Card>
			{/* Button */}
			<Button variant="primary" onClick={next}>
				Siguiente
			</Button>
		</Form>
	);
};
