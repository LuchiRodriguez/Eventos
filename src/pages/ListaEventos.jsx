//PAGINA DE LISTADO DE EVENTOS. 
import userImg from '../app/images/userIcon.png'
import menu from '../app/images/menuIcon.png'
import { Nav, Div } from './ListaEventosStyles'
import { Link } from 'react-router-dom'

const ListaEventos = () => {
    return (
        <div>
            <Nav>
                <div>
                    <img src={userImg} alt="" />
                </div>
                <div>
                    <img src={menu} alt="" width={32} height={32}/>
                </div>
            </Nav>
            <Div>
                <h1>Listado de eventos</h1>
                <section>
                    <div>
                        <h2>Viernes de juegos</h2>
                        <button>+</button>
                    </div>
                    <div>
                        <h2>Noche de hamburguesas</h2>
                        <button>+</button>
                    </div>
                    <div>
                        <h2>Domingo de asadito</h2>
                        <button>+</button>
                    </div>
                </section>
                <button>
                    <Link to={'/crearevento'}>Crear evento</Link>
                </button>
            </Div>
        </div>
    )
}

export default ListaEventos