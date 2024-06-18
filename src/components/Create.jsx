
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvento } from "../app/api";

const Create = () => {
    const navigate = useNavigate();
    const [evento, setEvento] = useState('');

    return (
        <div>
            <h1>Create</h1>
            <p>
                <input type="text" placeholder='Guest Name' onChange={e => setEvento(e.target.value)} />
                <button onClick={async () => {
                    await createEvento({ evento });
                    navigate('/');
                }}>Create</button>
            </p>
        </div>
    )
}

export default Create;