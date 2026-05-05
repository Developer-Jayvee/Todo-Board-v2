import { REFRESH_TOKEN_NAME, TOKEN_NAME } from "@/constant/const";
import axios, { type AxiosInstance } from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    headers : { 'Content-Type' : 'application/json' },
    adapter : "fetch"
});

const axiosInterceptors = (instance : AxiosInstance) => {
    instance.interceptors.request.use(
        config => {
            const token = localStorage.getItem(TOKEN_NAME);
            if(token){
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        response => response,
        error => {
            if(error.response && error.response.status === 401){
                localStorage.removeItem(TOKEN_NAME);
                localStorage.removeItem(REFRESH_TOKEN_NAME); 
                window.location.href = "/login";
            }
            return Promise.reject(error);
        }
    );  
}

axiosInterceptors(axiosInstance);

export default axiosInstance;


