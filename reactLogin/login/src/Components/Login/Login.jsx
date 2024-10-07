import './Login.css'
import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'

const Login = () => {

   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");

   const handleSubmit = (event) => {
    event.preventDefault()
    alert("enviando os dados " + username + " - " + password)
   } 

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className='input-field'>
                    <input 
                    onChange={(e)=> setUsername(e.target.value)} 
                    type="email" 
                    placeholder='Digite seu e-mail'
                    required
                    ></input>
                    <FaUser className='icon'></FaUser>
                </div>
                <div className='input-field'>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Digite sua senha'></input>
                    <FaLock className='icon'></FaLock>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembra de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta?<a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login