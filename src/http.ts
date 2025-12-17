import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
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