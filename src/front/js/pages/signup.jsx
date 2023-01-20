import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div>
        <h1>Registrarse</h1>
        <Link to={"/login/"}>
				<span>Ya tienes cuenta?</span>
			</Link><br />
        <Link to={"/signup/"}>
				<span>Nueva cuenta</span>
		</Link>
    </div>
  )
}
