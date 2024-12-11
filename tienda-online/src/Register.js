import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    if (name === '' || username === '' || password === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Llama a la función onRegister pasada como prop para registrar al usuario
    onRegister({name, username, password });

    // Redirige al login después de registrarse
    history.push('/login');
  };

  return (
    <div className="container mt-4">
      <h2>Registrarse</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleRegister}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Registrarse</button> {}
      </form>
    </div>
  );
};

export default Register;