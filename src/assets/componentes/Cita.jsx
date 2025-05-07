import React from "react";
import './cita.css';

function Cita({ mascota, dueno, fecha, hora, sintomas }) {
  return (
    <div className="container">
      <div className="card">
        <p><strong>Mascota:</strong> {mascota}</p>
        <p><strong>Dueño:</strong> {dueno}</p>
        <p><strong>Fecha:</strong> {fecha}</p>
        <p><strong>Hora:</strong> {hora}</p>
        <p><strong>Síntomas:</strong> {sintomas}</p>
        <input type="button" value="ELIMINAR ×" />
      </div>
    </div>
  );
}

export default Cita;
