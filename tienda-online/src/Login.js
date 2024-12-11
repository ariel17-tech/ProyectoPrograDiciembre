import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link, useHistory } from 'react-router-dom'; 
import leftImage from './imgs/LoginIzq.png';
import rightImage from './imgs/LoginDer.png'; 

const Login = ({ onLogin, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    const loginSuccessful = onLogin(username, password);
    if (loginSuccessful) {
      history.push('/'); // Redirige a la página de Home si el inicio de sesión es exitoso
    }
  };

  return (
    <div>
      <h1 className="text-black text-center mt-3">Compra en Linea</h1>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center flex-grow-1 position-relative">
          <img 
            src={leftImage} 
            alt="Imagen Izquierda" 
            className="img-fluid position-absolute" 
            style={{ left: '5%', top: '50%', transform: 'translateY(-50%)', maxWidth: '30%' }} 
          />
          <form className="w-50">
            <h2 className="text-danger text-center mb-4">Autenticacion</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded-pill"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-danger rounded-pill w-100" onClick={handleLogin}>
              Iniciar Sesión
            </button>
            <p className="text-danger text-start mt-2">Olvidaste la contraseña?</p>
            <Link to="/register" className="btn btn-light text-secondary rounded-pill w-100" style={{ border: '1px solid #dc3545' }}>
              Registrarse
            </Link>
          </form>
          <img 
            src={rightImage} 
            alt="Imagen Derecha" 
            className="img-fluid position-absolute" 
            style={{ right: '11%', top: '50%', transform: 'translateY(-50%)', maxWidth: '30%' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;