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
          <h1>texto</h1>
        </section>
        
          
          <p>
            <img src={logo} />
          </p>
        
      </div>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        Contactenos Via{" "}
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
