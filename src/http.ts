import axios from "axios";
import {useEndpointStore} from "../stores/endpoint.ts";

export const instance = axios.create({
    withCredentials: false
});

instance.interceptors.request.use((config) => {
    const endpointStore = useEndpointStore() // Gọi store trong này luôn đảm bảo lấy giá trị mới nhất

    config.baseURL = endpointStore.baseUrl

    return config
})

instance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data);
    },
    (error) => {
        return Promise.reject(error)
    }
);