import React from 'react'

import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import "../../styles/artists.css";

function imgError(e){
    console.log("Error: " + e.target.src)
    e.target.src = "https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
}

export const ArtistCard = (props) =>{
    const { store, actions } = useContext(Context)
	const ArtistStore = store.artist.filter(char => char.name == props.artist.name)
	useEffect(() => actions.charDescription(props.character.url), [])

    return(
        <div className="card ms-1 my-2" >
					<img src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id +".jpg"} className="card-img-top" alt="..." onError={(e)=>imgError(e)}/>
			<div className="card-body">
					  <h5 className="card-title">{props.character.name}</h5>
                      {pjStore[0] ? ( <div><div><p>Gender: {pjStore[0].gender}</p></div><div><p>Eyes color: {pjStore[0].gender}</p></div><div><p>Hair color: {pjStore[0].gender}</p></div></div>) : (	""	)}

					  <Link to={"/singlePj/" + props.character.uid} data={pjStore}>
                        <button href="#" className="btn btn-primary">Learn more</button>
					</Link>
					  <button variant="outline-warning" className="btn btn-warning ms-2" onClick={() => actions.handleFav({name: props.character.name, link: `/${props.type}/${props.id}`})}><i className="bi bi-heart-fill">Fav</i></button>
			</div>
		</div>
    )
}