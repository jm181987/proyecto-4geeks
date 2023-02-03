import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "/workspace/proyecto-4geeks/src/front/styles/home.css";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <div>
        <section id="sect1" class="sect">
          <video
            className="banner sm vw-10 vh-150 my-0 py-0"
            src=""
            autoplay="true"
            muted="true"
            loop="true"
            poster="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
          ></video>
        </section>
      </div>

      <div className="Info sm">
        <div>
          <h1 className="nosotros">
            Sobre Nosotros
          </h1>
        </div>
        <div className="about-us">
          <p>Somos una plataforma donde podrás encontrar y reservar a tu artista favorito ,<br></br>
            para tu fiesta de cumpleaños , boda o cualquier otro evento que quieras<br></br><button class="shadow__btn" href="" >Ver Artistas</button></p>

          <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
      </div>

      <div className="Info sm">
        <div>
          <h1 className="artistas">
            Nuestros Artistas
          </h1>
        </div>
        <div className="nuestros-artistas">
          <p>  Aqui puedes reservar a tu artista favorito  <br></br></p>
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


        <button class="shadow__btn1" href="" >Ver Artistas</button>

      </div>









      
    </div>
  );
};
