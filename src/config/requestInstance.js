import axios from "axios";

export const requestInstance = axios.create();

requestInstance.defaults.baseURL = '' //backend app url;
requestInstance.defaults.headers['Accept'] = "*/*";

requestInstance.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = "";
        return config;
    },
    (error) => {
        Promise.reject(error)
    }
)