import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  // Verifica si hay un usuario autenticado
  if (!user) {
    return <div className="text-center">Por favor, inicia sesión para ver tu perfil.</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="text-center">Perfil de usuario</h1>
      <div className="profile-box">
        <div className="profile-image">
          <img 
            src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" 
            alt="Usuario"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="profile-info">
          <p className="font-weight-bold">Nombre:</p>
          <p className="text-gray text-centered">{user.name}</p>
          <p className="font-weight-bold">Username:</p>
          <p className="text-gray text-centered">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;