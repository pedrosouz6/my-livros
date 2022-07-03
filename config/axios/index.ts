import axios from "axios";
import { parseCookies } from 'nookies';

export const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

instance.interceptors.request.use((config) => {
    const { ['token_user']: token } = parseCookies(null);

    if(token) {
        config.headers['Authorization'] =  token ? `Bearer ${token}` : '';
    }

    return config
})