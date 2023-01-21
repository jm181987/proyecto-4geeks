import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Artistas } from "./pages/artistas.jsx";
import { Caracteristicas } from "./pages/caracteristicas.jsx";
import { Quienes } from "./pages/quienes.jsx";
import  Terminos  from "./pages/terminos.jsx";
import { Home } from "./pages/home.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";

//componentes de acceso
import { Login } from "./auth/login.jsx";
import { SignUp } from "./auth/signup.jsx";
import { Reset } from "./auth/reset.jsx";
import { Recovery } from "./auth/recovery.jsx";
import { Profile } from "./auth/profile.jsx";
import { Password } from "./auth/password.jsx";
import { Logout } from "./auth/logout.jsx";
import PageNotFound from "./component/PageNotFound.jsx";


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
                        <Route element={<Home />} path="/" />
                        <Route element={<Artistas />} path="/artistas" />
                        <Route element={<Caracteristicas />} path="/caracteristicas" />
                        <Route element={<Quienes />} path="/quienes" />
                        <Route element={<Terminos />} path="/terminos" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Logout />} path="/logout" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<Reset />} path="/reset" />
                        <Route element={<Recovery />} path="/recovery" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Password />} path="/password" />
                        <Route element={<PageNotFound />} path="*" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
