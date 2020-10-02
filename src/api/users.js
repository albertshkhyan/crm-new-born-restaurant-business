import config from "configs/config.js";
import axiosInstance from 'helpers/axios';

/*
* setClientToken
    config.headers.Authorization = `Bearer ${token}`
    return config;
*/



//on login and register we not send Bearer token
const userAPI = {
    async loginUser(formData) {
        // You don't need to stringify your payload. Axios will do it for you when it it send a request.
        // console.log('formData loginUser API', formData);
        try {
            const res = await axiosInstance.post(config.server.routes.login, formData);
            // console.log('res loginUser', res);
            return res;
        } catch (error) {
            throw new Error(error.response.data.errors[0].msg)
        }
    },
    async registerUser(formData) {
        try {
            const res = await axiosInstance.post(config.server.routes.register, formData, {
                params: {//add query param
                    registerd: true
                }
            });
            console.log('res registerUser API', res);
            return res;
        } catch (error) {
            throw new Error(error.response.data.errors[0].msg)
        }
    },
    // async getMeData(token) {
    //not need pass token becase we have token interceptor it check in localStorage have token or not, if have put in Request headers:Authorization: Bearer + token
    async getMeData(token) {
        console.log('getMeData work');
        // try {
        const res = await axiosInstance.get(config.server.routes.me, {
            headers: {
                Authorization: token,
            },
        });

        console.log('res', res);
        return res;
        // } catch (error) {
        // console.log('getMeData - error.response', error.response);
        // throw new Error(error.response.data.errors[0].msg)
        // }
    }
}
export default userAPI;