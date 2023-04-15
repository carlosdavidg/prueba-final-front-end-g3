import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import MiContexto from '../Contexto/MiContexto';

const Barraprivada = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
    const {setConectado, usuarioActual} = useContext(MiContexto);

    const cerrarsesion = ()=> {
      setConectado(false)
    }

    return (
      <div className='barra1'>
        <header className='bg-dark w-100 py-2 px-3 d-flex justify-content-end'><span className="text-light">¡Hola, <b>{usuarioActual.nombre}!</b> </span></header>
        <Navbar className='barra' expand="lg">
          <Container>
            <NavLink to="/"><Navbar.Brand className='logo2'>BurgerTown</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='navtoggle' />

            <Navbar.Collapse id="basic-navbar-nav" className='navtoggle'>
              <Nav className="ms-auto">

                <NavLink className={setActiveClass} id='letras' to="/menu">
                   Menú Hamburguesas
                </NavLink>
  
                <NavLink className={setActiveClass} id='letras' to="/carrito">
                  Carrito
                </NavLink>
                <NavLink className={setActiveClass} id='letras' to="/perfil">
                  Mi perfil
                </NavLink>
                <NavLink className={setActiveClass} id='letras' to="/favoritos">
                  Favoritos
                </NavLink>
                <NavLink className={setActiveClass} id='letras' to="/comentarios">
                  Comentarios
                </NavLink>

                <NavLink className={setActiveClass} id='letras' to="/" onClick={()=>cerrarsesion()}>
                  Cerrar Sesión 
                </NavLink>
              </Nav>
            </Navbar.Collapse>
  
          </Container>
        </Navbar>
      </div>
    )
  }

export default Barraprivada