import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { ArtistCard } from '../component/artistcard.jsx'
import { Context } from '../store/appContext.js'

export const Artistas = () => {
    const { store, actions } = useContext(Context)


    return (
        <Container>
            <div className='my-2'>
                <Button variant="secondary" size="lg">Ubicacion</Button>{' '}
                <Button variant="secondary" size="lg">Fecha</Button>{' '}
                <Button variant="secondary" size="lg">Precio</Button>{' '}
            </div>
            <div className='my-2'>
                <Button variant="secondary" size="lg">Estilo</Button>{' '}
            </div>
            <div className='d-flex my-2'>
                {store.artists.map((elem, index)=>(
					<ArtistCard key={index} id={++index} type={"artist"} artist={elem} />
					))}
            </div>
        </Container>
    )
}

