import { useState, useEffect } from 'react';

function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setIsAuthenticated(true);
            setUser(userData);
        }
    }, []);

    return {
        isAuthenticated,
        user,
        login,
        logout
    };
}

export default useAuth;