import config from "configs/config.js";
import axiosInstance from 'helpers/axios';


const orderAPI = {
    async createOrder(orderData) {
        try {
            const res = await axiosInstance.post(config.server.routes.createOrder, orderData);
            console.log('res createOrder ------------ 0', res);
            return res;
        } catch (error) {
            throw new Error(error.response.data.errors[0].msg)
        }
    },

}
export default orderAPI;