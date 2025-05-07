import React from 'react';
import './index.css';
import Form from './assets/componentes/Form';
import ListadoCitas from './assets/componentes/ListadoCitas';

function App() {
  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="contenedor">
        <div className="column">
          <h2>CREAR MI CITA</h2>
          <Form />
        </div>
        <div className="column">
          <h2>ADMINISTRA TUS CITAS</h2>
          <ListadoCitas/>
        </div>
      </div>
    </div>
  );
}

export default App;
