import React from 'react';

const Navbar = () => {
  return (
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Inicio
        </a>

        <a className="navbar-item">
          Productos
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Contacto
          </a>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              Quiénes somos
            </a>
            <a className="navbar-item">
              Preguntas frecuentes 
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
              Ayuda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
