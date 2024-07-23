import React from 'react';

const Header = ({showSection}) => {


  const definirSomos = (event) => {
    event.preventDefault();
    showSection('quienes-somos');
  }
  const definirRegistro = (event) => {
    event.preventDefault();
    showSection('registro');
  }
  const definirComentarios = (event) => {
    event.preventDefault();
    showSection('comentarios');
  }
  const definirHome = (event) => {
    event.preventDefault();
    showSection('home');
  }
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item"><a id="boton-home" className="nav-link text-light" href="#" onClick={definirHome}>Home</a></li>
          <li className="nav-item"><a id="boton-catalogo" className="nav-link text-light" href="https://www.farmrio.cl/productos/vestido?gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZpiEWKn6bTi4YIS5hmuh4Tt13fyv0Kv6cKE1P7XmzF_zTiPXrDt_CRoC6D4QAvD_BwE" target="_blank">Catálogo de Ropa</a></li> 
          <li className="nav-item"><a id="boton-registro" className="nav-link text-light" href="#" onClick={definirRegistro}>Registrate</a></li>
          <li className="nav-item"><a id="boton-quienes-somos" className="nav-link text-light" href="#" onClick={definirSomos}>Quienes somos</a></li>
          <li className="nav-item"><a id="boton-comentarios" className="nav-link text-light" href="#" onClick={definirComentarios}>Comentarios</a></li>
        </ul>
      </nav>
    </header>
  );

}



export default Header;