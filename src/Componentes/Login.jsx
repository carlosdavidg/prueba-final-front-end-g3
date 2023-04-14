import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MiContexto from '../Contexto/MiContexto';

const Login = () => {

  const {listaUsuarios, setConectado} = useContext(MiContexto);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();



  const validarUsuario = () => {
    

    const usuarioValido = listaUsuarios.find((usuario)=>  usuario.email === email && usuario.clave === password)
    if (usuarioValido) {
  
      setConectado(true)
      navigate(`/perfil`)

    }
    else {
      alert("usuario o clave incorrecto")
    }
 
  }


  return (

    <div className='login-view'>
      <div className='login-box'>
        <h4>Iniciar sesión</h4>
        <form>
          <div className='user-box'>
            <input type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}></input>
          </div>
          <div className='user-box'>
            <input type='password' placeholder='Contraseña' onChange={(e)=> setPassword(e.target.value)}></input>
          </div>

          <div className='button-form'>
            <button className='resgistrar' onClick={()=> validarUsuario()}>Iniciar Sesión</button>
            <div id='registrar'>
              ¿No te has registrado?
              <NavLink to="/registro" className='resgistrar'><button>Registrate</button></NavLink>
            </div>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Login

