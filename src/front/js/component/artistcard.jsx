import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/artists.css";


function imgError(e){
    console.log("Error: " + e.target.src)
    e.target.src = "https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
}

export const ArtistCardv = (props) =>{
    const { store, actions } = useContext(Context)
	const ArtistStore = store.artists.filter(art => art.name == props.artist.name)
	
    return(
        <div className="card ms-1 my-2" >
					<img src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id +".jpg"} className="card-img-top" alt="..." onError={(e)=>imgError(e)}/>
			<div className="card-body">
					  <h5 className="card-title">{props.artist.name}</h5>
                      {ArtistStore[0] ? ( <div><div><p>: {ArtistStore[0].name}</p></div></div>) : (	""	)}
            </div>
		</div>
    )
}

