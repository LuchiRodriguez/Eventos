import { useState } from "react"
import { createPerfil } from "../app/services/events"
import { Navigate } from "react-router-dom"

const AccesoPopUp = () => {
    const [persona, setPersona] = useState({})


    return (
        <div>
            <form >
                <label htmlFor="username">Username:</label><br></br>
                <input type="text" id="username" onChange={(e) => { setPersona({ ...persona, username: e.target.value }) }}></input><br></br>

                <label htmlFor="pasword">Password:</label><br></br>
                <input type="text" id="pasword" onChange={(e) => { setPersona({ ...persona, password: e.target.value }) }} ></input><br></br>

                <label htmlFor="edad">edad:</label><br></br>
                <input type="number" id="edad" onChange={(e) => { setPersona({ ...persona, edad: e.target.value }) }}></input><br></br>

                <label htmlFor="email">correo electronico:</label><br></br>
                <input type="text" id="email" onChange={(e) => { setPersona({ ...persona, email: e.target.value }) }} ></input><br></br>

                <button onClick={async () => {
                    await createPerfil({ persona });
                    Navigate('/');
                }}>Registrarse</button>
            </form>
        </div >
    )
}

export default AccesoPopUp

//si existe le pido  user y Pass, si no existe creamos un useario
// para crear usuario edad nombre apellido email, password y un about you