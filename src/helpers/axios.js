import * as axios from "axios";
import config from "configs/config.js";
import store from "app/store";

import { setLoggerState } from 'app/reducers/loggerReducer';


const baseURL = config.server.host;//backend url

let headers = {};

// if (localStorage.token) {
//     headers.Authorization = localStorage.token;
// }

const axiosInstance = axios.create({
    baseURL,
    headers,
});

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
axiosInstance.interceptors.response.use(
    response => {
        return new Promise((resolve, reject) => {
            resolve(response);
        })
    },
    error => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                resolve(error);
            })
        }
        if (error.response.status === UNAUTHORIZED) {
            localStorage.removeItem("token");
            store.dispatch(setLoggerState({ error: true, status: "Unauthorized", isAuthorized: false }));
            return new Promise((resolve, reject) => {
                reject(error);
                window.location.reload()
            })
        }
        if (error.response.status === FORBIDDEN) {
            // store.dispatch(setLoggerState({ error: true, status: "Forbidden", isAuthorized: false }))
            // store.dispatch(setLoggerMessage(error.response.data.errors[0].msg))
            return new Promise((resolve, reject) => {
                reject(error);//continue work of axios handler with catch
            })

        }

    }
);


axiosInstance.interceptors.request.use(config => {
    const ACCESS_TOKEN = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '';
    config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: (ACCESS_TOKEN ? ACCESS_TOKEN : undefined),
    }
    return config;
},
    error => {
        Promise.reject(error)
    })

export default axiosInstance;