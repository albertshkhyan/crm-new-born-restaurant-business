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
        try {
            const res = await axiosInstance.post(config.server.routes.login, formData);
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
            return res;
        } catch (error) {
            throw new Error(error.response.data.errors[0].msg)
        }
    },
    // async getMeData(token) {
    //not need pass token becase we have token interceptor it check in localStorage have token or not, if have put in Request headers:Authorization: Bearer + token
    async getMeData() {//token not need, because we have axios interceptor request
        try {
            const res = await axiosInstance.get(config.server.routes.me);
            return res;
        } catch (error) {
            throw new Error(error.response.data.errors[0].msg)
        }
    }
}
export default userAPI;