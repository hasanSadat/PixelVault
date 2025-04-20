import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

const BASE_URL = import.meta.env.VITE_BASE_URL

export  const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
});
