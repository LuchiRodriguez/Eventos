/* eslint-disable react/prop-types */
import {useUserContext} from './providers/UserProvider';

const PrivateRoute = ({ component: Component }) => {
    const { userId } = useUserContext();
    return userId && <Component />;
};

export default PrivateRoute;