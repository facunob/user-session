import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import {getJWT, removeJWT} from "../modules/auth/auth.service";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { axiosPrivate } = useAxios();
    const { auth, setAuth } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if(auth?.accessToken || getJWT()) {
            axiosPrivate
                .get('/session')
                .then(({data}) => handleSession(data))
                .catch((err) => handleError(err));
        } else {
            navigate("/login");
        }
    }, []);

    const handleSession = (data) => {
        setAuth({
           accessToken: auth.accessToken || getJWT(),
           user: data
        });
    }

    const handleError = (err) => {
        console.error(err);
        removeJWT();
        navigate("/login");
    }

    useEffect(() => {
        auth.user && setIsLoading(false);
    }, [auth.user]);

    return (
        <>
            {isLoading
                ? <p>Loading session....</p>
                : <Outlet />
            }
        </>
    );
};

export default PersistLogin;