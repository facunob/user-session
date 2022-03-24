import {useEffect} from "react";
import useAuth from "./useAuth";
import {axiosPrivate} from "../config/axios";
import {JWT_CONSTANTS} from "../config/constans";

const UseAxios = () => {
    const { auth } = useAuth();

    useEffect(() => {
        axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers[JWT_CONSTANTS.AUTHORIZATION_HEADER]) {
                    const token = auth?.accessToken || localStorage.getItem(JWT_CONSTANTS.LOCAL_STORAGE_KEY);
                    config.headers[JWT_CONSTANTS.AUTHORIZATION_HEADER] =
                        `${JWT_CONSTANTS.AUTHORIZATION_BEARER} ${token}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );
    }, [auth]);

    return {axiosPrivate};
};

export default UseAxios;