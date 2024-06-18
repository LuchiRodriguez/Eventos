import { useEffect, useState } from 'react';
import { getEventos } from '../app/api';

const Read = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        getEventos().then(eventos => {
            setEventos(eventos.data);
        });
    }, []);

    return (
        <div>
            <h1>Read</h1>
            <div>
                {
                    eventos.map(evento => <p key={evento.id}>{evento.id} - {evento.nombre}</p>)
                }
            </div>
        </div>
    )
}

export default Read;