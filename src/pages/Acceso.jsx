//LOGIN Y REGISTRO.
//HAY QUE DEJAR EL USUARIO DISPONIBLE A LO LARGO DE TODA LA APLICACIÓN

import { useState } from "react"
import AccesoPopUp from "../components/AccesoPopUp"
import { loguear } from '../app/api';



const Acceso = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = () => {
        loguear(username, password)
    }
    return (
        <div>
            <h1>Bienvenido a BarnaEvents</h1>
            <div>
                <h3>Acceso</h3>
                <input type="text" placeholder="Usuario" onChange={setUsername(e.target.value)} />
                <input type="text" placeholder="Password" onChange={setPassword(e.target.value)} />
                <button onClick={login}>Login</button>
            </div>
            <button onClick={<AccesoPopUp />}>Crear Usuario</button>
        </div>
    )
}

export default Acceso