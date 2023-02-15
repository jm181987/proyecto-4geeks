import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { Context } from "../../store/appContext.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const ArtistProfile = () => {
  const { store, actions } = useContext(Context);
    const params = useParams()
    let artistId = params.theid
    const [artist, setArtist] = useState({})
    const navigate = useNavigate()
    const goBack = () =>{
      navigate(-1)
    }
     
    useEffect(() => {
        const artistStore = store.artists.filter(art => art.id == artistId)
        if (artistStore.length > 0) {
            setArtist(artistStore[0])
        }
    }, [store.artists, artistId])


  return (
    <Container className="my-5">
      <Row>
        <Col lg={3} className="text-center">
          <Image
            src={artist.image}
            roundedCircle
            className="mb-3"
          />
          <h3 className="text-white">{artist.name}</h3>
          <p>{artist.topic}</p>
        </Col>
        <Col lg={9}>
          <Card className="shadow-sm">
            <Card.Body>
              <div>
                <h5>Genero</h5>
                <p>House</p>
              </div>
              <div>
              <h5>Descripcion</h5>
              <p>
                {artist.about}
              </p>
              </div>
              <div>
                <h5>Repertorio</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                vehicula odio a mauris tincidunt, at hendrerit tellus consequat.</p>
              </div>
              <Button onClick={goBack} className='btn btn-danger'>
                &larr; Volver
              </Button>
              <div>
                <h5>Rating</h5>
              <h5>{artist.rating}/5.0</h5>
              </div>
              <div className="row">
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-soundcloud"></i>
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ArtistProfile;
