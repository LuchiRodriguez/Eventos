//PAGINA DE LISTADO DE EVENTOS. 
import userImg from '../app/images/userIcon.png'
import menu from '../app/images/menuIcon.png'
import { Nav, Div } from './ListaEventosStyles'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react';
import {getEventos} from '../app/services/events';
import { useNavigate } from 'react-router-dom';

const ListaEventos = () => {
    const navigate = useNavigate();
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        getEventos().then(eventos => {
            setEventos(eventos.data);
        });
    }, []);

    return (
        <div>
            <Nav>
                <div>
                    <img src={userImg} alt="" onClick={()=> navigate('/perfil')}/>
                </div>
                <div>
                    <img src={menu} alt="" width={32} height={32}/>
                </div>
            </Nav>
            <Div>
                <h1>Listado de eventos</h1>
                <section>
                    {
                        eventos.map(evento=>
                            <div key={evento.id}>
                                <h2>{evento.nombre}</h2>
                                <p>{evento.fecha}</p>
                                <button><Link to={'/inscribirevento'}>+</Link></button>
                            </div>
                        )
                    }
                </section>
                <button>
                    <Link to={'/crearevento'}>Crear evento</Link>
                </button>
            </Div>
        </div>
    )
}

export default ListaEventos