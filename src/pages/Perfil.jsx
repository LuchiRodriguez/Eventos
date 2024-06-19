import { useUserContext } from '../app/providers/UserProvider';


const Perfil = () => {
    const { userId } = useUserContext();
    return (
        <div>
            <h1>Datos personales</h1>
            <p>{userId.nombre}</p>
            <p>{userId.apellido}</p>
            <p>{userId.edad}</p>
            <p>{userId.intereses}</p>
            <p>{userId.evento}</p>
        </div>
    )
}

export default Perfil