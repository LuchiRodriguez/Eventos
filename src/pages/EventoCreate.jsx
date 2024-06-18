//PAGINA DE NUEVO EVENTO, DONDE EL USUARIO PODRÁ CREAR UN NUEVO EVENTO INDICANDO SU FECHA.

//CON UN DATE. 

import React from 'react'
import { createEvento } from '../app/api';

const EventoCreate = () => {
    const [nombre, setNombre] = useState('');
    const [evento, setEvento] = useState('');
    const [fecha, setFecha] = useState('');

    const guardar = async () => {
        const res = await createEvento({ nombre, evento, fecha })
        console.log(res);
        return res;
    }
    return (
        <div>Inscripción de un evento
            <p>Inserta tu nombre</p>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
            <p>Inserta el título de tu nuevo evento</p>
            <input type="text" onChange={(e) => setEvento(e.target.value)} />
            <p>¿Cuando lo quieres hacer?</p>
            <input type="date" onChange={(e) => setFecha(e.target.value)} />
            <p>Qué es necesario traer en el evento? </p>
            <textarea />
            <button onClick={guardar}></button>
        </div>
    )
}

export default EventoCreate