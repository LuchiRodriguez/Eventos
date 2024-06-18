//LOGIN Y REGISTRO.
//HAY QUE DEJAR EL USUARIO DISPONIBLE A LO LARGO DE TODA LA APLICACIÓN

import { useState } from "react"
import AccesoPopUp from "../components/AccesoPopUp"



const Acceso = () => {

    return (
        <Container>
            <h1>Bienvenido a BarnaEvents</h1>
            <div>
                <form>
                    <label for="username">username</label><br></br>
                    <input type="text" id="username" />

                    <label for="password" id="password">password</label>
                    <input type="text" id="password" />
                    <button onClick={ }>Logueate</button>
                </form>

            </div>


            <button onClick={<AccesoPopUp />}>Crear Usuario</button>


        </Container>
    )
}

export default Acceso