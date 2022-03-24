import axios from "../../config/axios";
import {JWT_CONSTANTS} from "../../config/constans";

export const register = (body) => {
    return axios.post("/register" ,body);
}

export const login = (body) => {
    const params = {
        username: body.username,
        password: body.password
    };

    return axios.post("/login", null, { params });
}

export const getJWT = () => {
    return localStorage.getItem(JWT_CONSTANTS.LOCAL_STORAGE_KEY);
}

export const removeJWT = () => {
    localStorage.removeItem(JWT_CONSTANTS.LOCAL_STORAGE_KEY);
}