import React, { useState } from 'react';
import ButtonCounter from './ButtonCounter'; 
import ProfileCard from './ProfileCard'; 
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Esteban', age: 19, hobby: 'Pintura' },
    { name: 'Profe', age: 24, hobby: 'React' },
    { name: 'Ivan', age: 32, hobby: 'Piano'}
    // Agrega más objetos de usuario según sea necesario
  ]);

  return (
    <div>
      <h1>Galería de Perfiles</h1>
      {users.map((user, index) => (
        <div key={index}>
          <ProfileCard user={user} />
          <ButtonCounter />
        </div>
      ))}
    </div>
  );
};

export default App;
