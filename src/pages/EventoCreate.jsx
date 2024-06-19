//PAGINA DE NUEVO EVENTO, DONDE EL USUARIO PODRÁ CREAR UN NUEVO EVENTO INDICANDO SU FECHA.

//CON UN DATE. 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvento } from '../app/services/events';

const EventoCreate = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');

    return (
        <div>Inscripción de un evento
            <p>Inserta el título de tu nuevo evento</p>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
            <p>¿Cuando lo quieres hacer?</p>
            <input type="date" onChange={(e) => setFecha(e.target.value)} />
            <p>Qué es necesario traer en el evento? </p>
            <textarea />
            <button onClick={async () => {
                await createEvento({nombre, fecha });
                navigate('/');
                }}>Guardar</button>
        </div>
    )
}

export default EventoCreate