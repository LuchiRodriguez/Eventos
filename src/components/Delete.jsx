import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEvento } from '../app/api';

const Delete = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');

    return (
        <div>
            <h1>Delete</h1>
            <p>
                <input type="text" placeholder='Event ID' onChange={e => setId(e.target.value)} />
                <button onClick={async () => {
                    await deleteEvento(id);
                    navigate('/');
                }}>Delete</button>
            </p>

        </div>
    )
}

export default Delete;