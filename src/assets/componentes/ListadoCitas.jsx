import React from "react";
import Cita from "./Cita";
import './listadocitas.css';


function ListadoCitas() {
  const citas = [
    {
      mascota: "Nina",
      dueno: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueno: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueno: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ];

  return (
    <div className="listado-citas">
      {citas.map((cita, index) => (
        <Cita
          key={index}
          mascota={cita.mascota}
          dueno={cita.dueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
      }  

export default ListadoCitas;
