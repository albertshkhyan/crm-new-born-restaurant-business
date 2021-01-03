import config from "configs/config.js";
import axiosInstance from 'helpers/axios';

const categoryAPI = {

    async getAllCategory() {
        try {
            const res = await axiosInstance.get(config.server.routes.getAllCategory);//automatic send token
            return res;

        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },

    async getCategoryById(id) {
        try {
            const res = await axiosInstance.get(`${config.server.routes.deleteCategoryById}/${id}`);//automatic send token
            return res;

        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },

    async createCategory(categoryName, selectedFile) {

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('name', categoryName);
        const reqConfig = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        try {

            const res = await axiosInstance.post(config.server.routes.createCategory, formData, reqConfig);//automatic send token
            return res;
        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },

    async updateCategory(id, categoryName, selectedFile, onProgress) {
        /**
            * options
            # onUploadProgress
            * progressEvent -  will contain the current uploaded percentage
                loaded -  loader does so at this point of time
                total - size of the uploading content
    
            * find the percentage we using the formula for calculating the percentage
                How to calculate percentage of a number.
                    P% * X = Y.
            */


        // function onProgress(progressEvent) {
        //     // # Do whatever you want with the native progress event
        //     const { loaded, total } = progressEvent;
        //     //# find the percentage we using the formula for calculating the percentage
        //     const percent = Math.floor((loaded * 100) / total);
        // }
        const reqConfig = {
            headers: {
                'content-type': 'multipart/form-data',
            },
            // # `onUploadProgress` allows handling of progress events for uploads
            // browser only
            // timeout: 5000,
            onUploadProgress: onProgress,
        };
        try {
            const formData = new FormData();
            if (selectedFile) {
                formData.append('image', selectedFile);
            }
            formData.append('name', categoryName);


            const res = await axiosInstance.patch(`${config.server.routes.updateCategory}/${id}`, formData, reqConfig);
            return res;
        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    },

    async deleteCategory(id) {
        try {
            const res = await axiosInstance.delete(`${config.server.routes.getCategoryById}/${id}`);//automatic send token
            return res;

        } catch (error) {
            throw new Error(error.response.data.errors[0].msg);
        }
    }



}

export default categoryAPI;