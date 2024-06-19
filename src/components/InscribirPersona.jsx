
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inscribirPersona } from "../app/api";

const InscribirPersona = () => {
    const navigate = useNavigate();
    const { id } = useContext(UserContext); //aquí sería user
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const inscripcion = async () => {
        if (!id) { //aquí sería user
            setError("No estás autentificado");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await inscribirPersona({ id }); //aquí sería userId : user.id
            navigate('/');
        } catch (err) {
            setError('Hubo un problema al inscribirte al evento. Inténtalo de nuevo');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Inscribirse al evento</h1>
            <button onClick={inscripcion} disabled={loading}>
                {loading ? 'Inscribiendo...' : 'Inscribirse'}</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default InscribirPersona;