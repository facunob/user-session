import useAuth from "../hooks/useAuth";
import {Outlet, useLocation, Navigate} from 'react-router-dom';
import {ROLES} from "../config/constans";

const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();

    return (
        auth?.user?.role === ROLES.ROLE_USER
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace  />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;