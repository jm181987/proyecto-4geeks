import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div>
            <h1>Login System afantiniv</h1>
            <Link to={"/login/"}>
								<span>Link to login</span>
			</Link><br />
            <Link to={"/signup/"}>
								<span>Link to Register</span>
			</Link>
        </div>
    )
}
