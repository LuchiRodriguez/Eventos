//PAGINA DE INSCRIPCIÓN A UN EVENTO

//TIENE QUE REGISTRAR EN EL EVENTO. 

//dieta especial, acompañante (si/no, y cuantas personas (boton con números))
import { useContext } from "react";
import { inscribirPersona } from "../app/services/users";
import { useUserContext } from "../app/providers/UserProvider";
import { useNavigate } from "react-router-dom";

//TIENE QUE REGISTRAR EN EL EVENTO. 

//dieta especial, acompañante (si/no, y cuantas personas (boton con números))

const InscribirEvento = () => {
    const { userId } = useContext(useUserContext);
    const navigate = useNavigate();

    return (
        <div>Inscribirse usuario al evento
            <button onClick={async () => {
                await inscribirPersona({ userId });
                navigate('/');

            }}></button>

        </div>
        //INSCRIBIR
        //perfil, evento

        //MODIFICAR
        //evento

        //LISTA DE OBJETOS
        //lista con objetos
    )
}

export default InscribirEvento