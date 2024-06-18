import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
    <div>
        <div>
            <ul>
                <li><Link to=".">Read</Link></li>
                <li><Link to="create">Create</Link></li>
                <li><Link to="delete">Delete</Link></li>
            </ul>
        </div>
        {children}
    </div>
)

export default Layout;