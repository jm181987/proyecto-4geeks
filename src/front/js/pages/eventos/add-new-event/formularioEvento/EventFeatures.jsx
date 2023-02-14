import React, { useEffect, useState } from 'react'
import {
    Form,
    Button,
    Card,
    Modal,
    ListGroup,
    Container
} from 'react-bootstrap'


export const EventFeatures = (props) => {
    const { next, previous, handleChange, handleFeatures, data } = props
    const [included, setIncluded] = useState([])
    const [newFeature, setNewFeature] = useState("")

    const incluidos = data.features

    useEffect(() => {
        setIncluded(incluidos)
        console.log('useEffect')
    }, [])

    useEffect(() => {
        handleFeatures(included);
        console.log("handleFeaturesAdd");
    }, [included])


    function addFeature() {
        if (newFeature !== "") {
            console.log("Agregado")
            setIncluded(prevIncluded => [...prevIncluded, newFeature])
            setNewFeature("")
        }
    }


    function removeFeature(index) {
        console.log(index)

        var newIncluded = [...included]
        newIncluded.splice(index, 1)
        setIncluded(newIncluded)
        handleFeatures(included)
        console.log('handleFeaturesRemove')
    }




    return (
        <Form>
            <Card className='mb-3'>
                <Card.Header>
                    <h4 className='mb-0 text-black'>Precio y caracteristicas</h4>
                </Card.Header>
                <Card.Body>
                    {/* Price  */}
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="event_price">Precio del Evento</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Precio del evento"
                            id="event_price"
                            name="event_price"
                            onChange={e => handleChange(e)}
                        />
                        <Form.Text className="text-muted">
                            Precio en dolares americanos $USD.
                        </Form.Text>
                    </Form.Group>
                    <Container className='bg-light rounded p-2 mb-4'>
                        <Form.Label htmlFor="event_feature">Que incluye el evento?</Form.Label>
                        <Form.Group className="mb-1 input-group">
                            <Form.Control
                                type="text"
                                placeholder="Que incluye?"
                                id="event_feature"
                                name="event_feature"
                                onChange={e => setNewFeature(e.target.value)}
                                value={newFeature}
                            />
                            <Button variant="primary" className="input-group-text mb-0" onClick={addFeature}  >
                                Incluir
                            </Button>
                        </Form.Group>
                        <ListGroup>
                            {/*
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        <input className="form-control" type="text" onKeyDown={e=>addFeature(e)} onChange={e=>setNewFeature(e.target.value)} value={newFeature}  name="feature" id="feature" />
                        
                    </li>*/}
                            {included.map((feature, index) => (
                                <ListGroup.Item key={index} className="list-group-item todoitem d-flex justify-content-between align-items-center">
                                    {feature}
                                    <Button className="badge hover-hidden bg-danger rounded-pill" onClick={() => removeFeature(index)}>X</Button>
                                </ListGroup.Item>

                            ))}
                            <ListGroup.Item className="list-group-item d-flex disabled text-muted justify-content-center align-items-center">
                                <small>{included.length} Incluidos.</small>
                            </ListGroup.Item>

                        </ListGroup>
                    </Container>




                </Card.Body>
            </Card>
            {/* NAVEGACION BUTTONS */}
            <div className='d-flex justify-content-between'>
                <Button variant="secondary" onClick={previous}  >
                    Anterior
                </Button>
                <Button variant="primary" onClick={next}  >
                    Siguiente
                </Button>
            </div>
        </Form>
    )
}
