import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './assets/scss/theme.scss'

import ScrollToTop from "./component/scrollToTop";

import Mision from "./pages/mision.jsx";
import Caracteristicas from "./pages/caracteristicas.jsx";
import Quienes from "./pages/quienes.jsx";
import Terminos from "./pages/terminos.jsx";
import { Home } from "./pages/home.jsx";

import { Artistas } from "./pages/artistas.jsx";

import injectContext from "./store/appContext";

import { NavbarDefault } from "./layouts/front/navbars/NavbarDefault.jsx"
import { Footer } from "./component/footer.jsx";

//componentes de acceso
import { Login } from "./auth/login.jsx";
import { SignUp } from "./auth/signup.jsx";
import { Reset } from "./auth/reset.jsx";
import { Recovery } from "./auth/recovery.jsx";
import { Profile } from "./auth/profile.jsx";
import { Password } from "./auth/password.jsx";
import { Logout } from "./auth/logout.jsx";
import PageNotFound from "./component/PageNotFound.jsx";

import { Dashboard } from "./admin/dashboard/Dashboard.jsx";
import { List } from "./admin/list/List.jsx";
import { Single } from "./admin/single/Single.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavbarDefault />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Artistas />} path="/artistas" />
            <Route element={<Caracteristicas />} path="/caracteristicas" />
            <Route element={<Quienes />} path="/quienes" />
            <Route element={<Mision />} path="/mision" />
            <Route element={<Terminos />} path="/terminos" />
            <Route element={<Login />} path="/login" />
            <Route element={<Logout />} path="/logout" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<Reset />} path="/reset" />
            <Route element={<Recovery />} path="/recovery" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Password />} path="/password" />
            <Route element={<PageNotFound />} path="*" />
            <Route path="/admin">
              <Route index element={<Dashboard />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
              </Route>
            </Route>
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
