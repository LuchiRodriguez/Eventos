//PAGINA DE INSCRIPCIÓN A UN EVENTO

//TIENE QUE REGISTRAR EN EL EVENTO. 

//dieta especial, acompañante (si/no, y cuantas personas (boton con números))
import { useContext, useEffect, useState } from 'react';
import { inscribirPersona } from "../app/services/users";
import { useUserContext } from "../app/providers/UserProvider";
import { useNavigate, Link } from 'react-router-dom';
import { getEventos } from '../app/services/events';

//TIENE QUE REGISTRAR EN EL EVENTO. 

//dieta especial, acompañante (si/no, y cuantas personas (boton con números))

const InscribirEvento = () => {
    const { userId } = useContext(useUserContext);
    const navigate = useNavigate();
    const [eventos, setEventos] = useState();

    useEffect(() => {
        getEventos().then(eventos => {
            setEventos(eventos.data);
        });
    }, []);

    return (
        <div>
            <h1>Quieres inscribirte al evento? </h1>
            <button onClick={async () => {
                await inscribirPersona({ userId });
                navigate('/perfil');
            }}></button>


            <h1>¿Quieres modificar la reserva?</h1>
            <section>
                {
                    eventos.map(evento =>
                        <div key={evento.id}>
                            <h2>{evento.nombre}</h2>
                            <p>{evento.fecha}</p>
                            <button><Link to={'/inscribirevento'}>+</Link></button>
                        </div>
                    )
                }
            </section>
        </div>

        //MODIFICAR
        //evento

        //LISTA DE OBJETOS
        //lista con objetos
    )
}

export default InscribirEvento