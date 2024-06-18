//PAGINA DE LISTADO DE EVENTOS. 

const ListaEventos = () => {
    return (
        <div>
            <nav>
                <div>
                    <img src="../app/images/userIcon.png" alt="" />
                </div>
                <div>
                    <img src="../app/images/menuIcon.png" alt="" />
                </div>
            </nav>
            <div>
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
                <button>Crear evento</button>
            </div>
        </div>
    )
}

export default ListaEventos