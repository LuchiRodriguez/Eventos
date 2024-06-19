/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState();
    return (
        <AppContext.Provider value={[userId, setUserId]}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;