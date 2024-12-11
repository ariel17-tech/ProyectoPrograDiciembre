import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#c72c41' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Compra en Linea</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto"> {/* Alineación a la izquierda */}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">Contacto</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">Acerca de</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">Perfil</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto"> {/* Alineación a la derecha */}
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Registrarse</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Iniciar Sesión</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="nav-link text-white" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={onLogout}>
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;