import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Contact from './Contact'; 
import Profile from './Profile'; 
import About from './About';
import NavBar from './NavBar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]); // Estado para manejar los usuarios registrados
  const [cart, setCart] = useState([]); // Estado para manejar el carrito
  const [currentUser , setCurrentUser ] = useState(null); // Estado para el usuario actual

const handleLogin = (username, password) => {
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    setIsAuthenticated(true);
    setCurrentUser (user); // Guarda el usuario actual
    return true; // Indica que el inicio de sesión fue exitoso
  } else {
    alert('Credenciales incorrectas');
    return false; // Indica que el inicio de sesión falló
  }
};

  const handleRegister = (newUser ) => {
    // Verificar si el usuario ya existe
    const existingUser  = users.find(user => user.username === newUser .username);
    if (existingUser ) {
      alert('El usuario ya está registrado.');
      return;
    }
    // Agregar el nuevo usuario al estado
    setUsers([...users, newUser ]);
    alert('Registro exitoso');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCart([]); // Vaciar el carrito al cerrar sesión
  };

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/register">
          <Register onRegister={handleRegister} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/profile">
          <Profile user={currentUser } />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home isAuthenticated={isAuthenticated} onLogout={handleLogout} setCart={setCart} cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;