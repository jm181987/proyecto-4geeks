import React, { Component } from "react";
import logo from "/workspace/proyecto-4geeks/docs/assets/logo.png";
export const Footer = () => (
	//<footer className="footer mt-auto py-3 text-center">
	//	<p className="what">
	//		Made by{" Grupo Alpha - Latam 12 from "}
	//		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
	//	</p>
	//</footer>

	<footer className="text-center text-lg-start bg-white text-muted ">


		<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">

			<div className="me-5 d-none d-lg-block ">
				<span> <strong>Encuentrenos en las siguientes redes sociales</strong></span>
			</div>

			<div>
				<a href="https://github.com/luisferdonoso" className="me-4 link-secondary">
					<i className="fab fa-github"></i>
				</a>

				<a href="https://github.com/jougarcia" className="me-4 link-secondary">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://github.com/afantiniv" className="me-4 link-secondary">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://github.com/jm181987" className="me-4 link-secondary">
					<i className="fab fa-github"></i>
				</a>
			</div>

		</section>

		<section className="">
			<div className="container text-center text-md-start mt-5">

				<div className="row mt-3">

					<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

						<h6 className="text-uppercase fw-bold mb-4">
							<a className="navbar-brand" href="/" ><img src={logo} /></a>
						</h6>
						<p>
							Descubre el talento, contrata el arte.
						</p>
					</div>

					<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

						<h6 className="text-uppercase fw-bold mb-4">
							Nosotros
						</h6>
						<p>
							<a href="/quienes" className="text-reset">Quienes somos</a>
						</p>
						<p>
							<a href="/mision" className="text-reset">Mision y Vision</a>
												</p>
												<p>
							<a href="/terminos" className="text-reset">Terminos y condiciones</a>
						</p>
												

					</div>



					<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

						<h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
						<p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
						<p>
							<i className="fas fa-envelope me-3 text-secondary"></i>
							iconsproject@gmail.com
						</p>
						<p><i className="fas fa-phone me-3 text-secondary"></i> + 598 93 867 429</p>
						<p className="what">
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

				</div>

			</div>
		</section>




	</footer>

);
