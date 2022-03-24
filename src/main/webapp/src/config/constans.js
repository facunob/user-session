export const API_URL = 'http://localhost:8080/api';


export const ROLES = {
    ROLE_USER: 'ROLE_USER',
    ROLE_ADMIN: 'ROLE_ADMIN',
}

export const JWT_CONSTANTS = {
    AUTHORIZATION_HEADER:  'Authorization',
    AUTHORIZATION_BEARER:  'Bearer',
    LOCAL_STORAGE_KEY: 'accessToken'
}

export const PAGES_CONFIG = {
    HOME: {
        name: 'Home',
        pathname: '/'
    },
    GOALS: {
        name: 'Goals',
        pathname: '/goals'
    },
    NOTIFICATIONS: {
        name: 'Notifications',
        pathname: '/notifications'
    },
}