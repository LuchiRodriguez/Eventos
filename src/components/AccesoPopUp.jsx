import Acceso from "../pages/Acceso"

const AccesoPopUp = () => {
    const [userExist, setUserExist] = useState({})


    return (
        <div>
            (userExist ? <div>
                <form >
                    <label for="username">Username:</label><br></br>
                    <input type="text" id="username" name="username" value="John"></input><br></br>
                    <label for="pasword">Password:</label><br></br>
                    <input type="text" id="pasword" name="password" value="Doe"></input><br></br>
                    <label for="edad">edad:</label><br></br>
                    <input type="number" id="edad" name="edad" value="John"></input><br></br>
                    <label for="email">correo electronico:</label><br></br>
                    <input type="text" id="email" name="username" value="John"></input><br></br>
                    <input type="submit" value="Submit"></input>
                    <button onClick={guardar}>Crear Usuario</button>
                </form>
            </div> :  <Acceso />)

        </div >
    )
}

export default AccesoPopUp

//si existe le pido  user y Pass, si no existe creamos un useario
// para crear usuario edad nombre apellido email, password y un about you