import React from "react";
import './form.css';
function Form (){
 
    return (
        <div>
            <form action="">
                <label htmlFor="">Nombre Mascota</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Nombre Dueño</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Fecha</label>
                <input type="date" name="" id="" />
                <label htmlFor="">Hora</label>
                <input type="time" name="" id="" />
                <label htmlFor="">Sintomas</label>
                <input type="text" name="" id="" />
                <button type="submit">Agregar Cita</button>
            </form>
        </div>
    )
}
export default Form