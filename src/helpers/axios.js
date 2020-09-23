import * as axios from "axios";
import config from "configs/config.js";


const baseURL =  config.server.host;//backend url

let headers = {};

if(localStorage.token) {
    headers.Authorization = localStorage.token;
}

const axiosInstance = axios.create({
    baseURL, 
    headers,
});
export default axiosInstance;