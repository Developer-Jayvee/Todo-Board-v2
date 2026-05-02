import axios, { type AxiosInstance } from "axios";

const ACCESS_TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refresh_token";
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    headers : { 'Content-Type' : 'application/json' },
    adapter : "fetch"
});

const axiosInterceptors = (instance : AxiosInstance) => {
    instance.interceptors.request.use(
        config => {
            const token = localStorage.getItem(ACCESS_TOKEN_KEY);
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
                localStorage.removeItem(ACCESS_TOKEN_KEY);
                localStorage.removeItem(REFRESH_TOKEN_KEY); 
                window.location.href = "/login";
            }
            return Promise.reject(error);
        }
    );  
}

axiosInterceptors(axiosInstance);

export default axiosInstance;


