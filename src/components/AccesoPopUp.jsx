import React, { useState } from 'react'
import { createPerfil } from '../app/api';

const AccesoPopUp = () => {
    const [persona, setPersona] = useState({})


    return (
        <div>

            <form >
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" onChange={() => { setPersona({ ...persona, username: e.target.value }) }}></input><br></br>

                <label for="pasword">Password:</label><br></br>
                <input type="text" id="pasword" onChange={() => { setPersona({ ...persona, password: e.target.value }) }} ></input><br></br>

                <label for="edad">edad:</label><br></br>
                <input type="number" id="edad" onChange={() => { setPersona({ ...persona, edad: e.target.value }) }}></input><br></br>

                <label for="email">correo electronico:</label><br></br>
                <input type="text" id="email" onChange={() => { setPersona({ ...persona, email: e.target.value }) }} ></input><br></br>

                <button onClick={async () => {
                    await createPerfil({ persona });
                    navigate('/');
                }}>Registrarse</button>
            </form>


        </div >
    )
}

export default AccesoPopUp

//si existe le pido  user y Pass, si no existe creamos un useario
// para crear usuario edad nombre apellido email, password y un about you