import React, { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <>
            <div className="h-screen w-full flex items-center justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        </>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;