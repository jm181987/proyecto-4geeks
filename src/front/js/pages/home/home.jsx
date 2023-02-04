import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import "/workspace/proyecto-4geeks/src/front/styles/home.css";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png";
import HeroTyped from "./HeroTyped.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center sm">
      <div>
      <HeroTyped/>
        {/*<section id="sect1" class="sect">
          <video
            className="banner sm vw-100 vh-150 my-0 py-0"
            src=""
            autoplay="true"
            muted="true"
            loop="true"
            poster="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
          ></video>
  </section>*/}
      </div>

      <div className="Info sm">
        
          <h1 className="nosotros mt-5 px-5">
          Somos una plataforma donde podrás encontrar y reservar a tu artista favorito ,<br></br>
            para tu fiesta de cumpleaños , boda o cualquier otro evento que quieras!
          </h1>        
           
            

        
      </div>

      <div className="Info sm">
        <div>
          <h1 className="animated-shadow">
            Nuestros Artistas
          </h1>
        </div>
        <div className="nuestros-artistas mb-1">
          <p>  </p>
        </div>
        <div className="cards">
          <div className="cardhome card1">
          </div>
          <div className="cardhome card2">
          </div>
          <div className="cardhome card3">
          </div>
          <div className="cardhome card4">
          </div>
        </div>


        <button class="shadow__btn1 mb-5" href="/artistas" >Ver Artistas</button>

      </div>









      
    </div>
  );
};
