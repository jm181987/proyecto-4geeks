import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AuthProvider } from "./context/authContext.js";

import Mision from "./pages/mision.jsx";
import Caracteristicas from "./pages/caracteristicas.jsx";
import Quienes from "./pages/quienes.jsx";
import Terminos from "./pages/terminos.jsx";
import { Home } from "./pages/home/home.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { SuccessPage } from "./pages/paypal/SuccessPage.jsx";

//import { Artistas } from "./pages/artistas/artistas.jsx";


import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//componentes de acceso
import { Login } from "./auth/login.jsx";
import { SignUp } from "./auth/signup.jsx";
import { Reset } from "./auth/reset.jsx";
import { Recovery } from "./auth/recovery.jsx";
import { Profile } from "./auth/profile.jsx";
import { ForgetPassword } from "/workspace/proyecto-4geeks/src/front/js/auth/password.jsx";
import PageNotFound from "./component/PageNotFound.jsx";
import { ArtistProfile } from "/workspace/proyecto-4geeks/src/front/js/pages/artistas/ArtistProfile.jsx";
import { Artistanuevo } from "/workspace/proyecto-4geeks/src/front/js/pages/artistas/artistanuevo.jsx";
import ArtistCategory from "./pages/browse/ArtistCategory.jsx";
import { EventSingle } from "./pages/eventos/EventSingle.jsx";
import { AddNewEvent } from "./pages/eventos/add-new-event/AddNewEvents.jsx";
//perfiles

import injectContext from "./store/appContext";
import { ProtectedRoute } from "./auth/ProtectedRoute.jsx";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";


  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Artistanuevo />} path="/artistanuevo" />
            <Route element={<Home />} path="/" />
            <Route element={<ArtistCategory />} path="/artistas" />
            <Route element={<Caracteristicas />} path="/caracteristicas" />
            <Route element={<Quienes />} path="/quienes" />
            <Route element={<Mision />} path="/mision" />
            <Route element={<Terminos />} path="/terminos" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<ArtistProfile />} path="/artistprofile" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<Reset />} path="/reset" />
            <Route element={<Recovery />} path="/recovery" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<ForgetPassword />} path="/password" />
            <Route element={<PageNotFound />} path="*" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<EventSingle />} path="/evento/:theid" />
            <Route element={<AddNewEvent/>} path="/evento/nuevo" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<SuccessPage/>} path="evento/paypal/success"/>
          </Routes>
          <Footer />
          <Routes>
          
          </Routes>
          
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
