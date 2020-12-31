import config from "configs/config.js";
import axiosInstance from 'helpers/axios';


const positionAPI = {
    async getAllPositions(categoryId) {
        try {
            const res = await axiosInstance.get(`${config.server.routes.positionsGetAll}/${categoryId}`);
            return res;

        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },
    async updatePosition(positionId, positionBody) {
        try {
            const res = await axiosInstance.patch(`${config.server.routes.positionsUpdate}/${positionId}`, positionBody);
            return res;

        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },
    async createPosition(newPositionData) {
        try {
            const res = await axiosInstance.post(config.server.routes.positionCreate, newPositionData);
            return res;

        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },
    async deletePosition(positionId) {
        try {
            const res = await axiosInstance.delete(`${config.server.routes.positionDelete}/${positionId}`);
            return res;

        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },
}

export default positionAPI;