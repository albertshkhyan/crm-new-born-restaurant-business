import * as axios from "axios";
import config from "configs/config.js";


const baseURL = config.server.host;//backend url

let headers = {};

// let token = null;

if (localStorage.token) {
    headers.Authorization = localStorage.token;
}

const axiosInstance = axios.create({
    baseURL,
    headers,
});


// axiosInstance.interceptors.response.use(
//     config => {
//         console.log('INTERCEPTOR OF AXIOS - config', config);
//         // Do something before request is sent
//         token = config.data.token;
//         // config.headers["Authorization"] = "bearer " + config.data.token;
//         return config;
//     },
//     error => {
//         Promise.reject(error);
//     }
// );

export default axiosInstance;