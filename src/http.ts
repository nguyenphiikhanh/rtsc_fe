import axios from "axios";

export const instance = axios.create({
    baseURL: '/api',
    withCredentials: false
});

instance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data);
    },
    (error) => {
        return Promise.reject(error)
    }
);