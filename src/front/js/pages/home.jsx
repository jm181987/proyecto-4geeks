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
            className="banner vw-100 vh-150 my-0 py-0"
            src="https://drive.google.com/u/0/uc?id=1ns0hg4L0PF1jyXBWl1e2dZioBb4uk4Vp&export=download"
            autoplay="true"
            muted="true"
            loop="true"
            poster="https://carontestudio.com/img/contacto.jpg"
          ></video>
        </section>
      </div>

      <div className="Info">
          <div>
            <h1 className="nosotros">
            Sobre Nosotros
            </h1>
          </div>
          <div className="about-us">
            <p>Somos una plataforma donde podrás encontrar y reservar a tu artista favorito ,<br></br>
               para tu fiesta de cumpelaños , boda o cualquier otro evento que quieras<br></br><button class="shadow__btn" href="" >Ver Artistas</button></p> 
          
            <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </div>
      </div>

      <div className="Info">
          <div>
            <h1 className="artistas">
            Nuestros Artistas
            </h1>
          </div>
          <div className="nuestros-artistas">
            <p>Aqui puedes reservar a tu artista favorito<br></br></p>
          </div>
          <div className="cards">
            <div className="card">
            </div>
            <div className="card3">
            </div>
            <div className="card4">
            </div>
            <div className="card5">
            </div>
          </div>
          
            
            <button class="shadow__btn1" href="" >Ver Artistas</button>
          
      </div>


          
        
          
          
        
     
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        Contactenos Via {" "}
        <a href="https://api.whatsapp.com/send?phone=59893867429">
          {" "}
          <img
            className="whatlogo"
            src="https://i.imgur.com/9HKrmqj.png"
            alt="w"
          />
        </a>
      </p>
    </div>
  );
};
