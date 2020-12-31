export default {
    server: {
        host: 'http://localhost:7832/api/',
        headers: {
            'Content-Type': 'application/json',
        },
        routes: {
            login: "auth/login",
            register: "auth/register",
            me: "auth/me",
            //#categories
            deleteCategoryById: "categories",
            getAllCategory: "categories",
            getCategoryById: "categories",
            createCategory: "categories",
            updateCategory: "categories",
            //#positions
            positionCreate: "positions",
            positionsGetAll: "positions",
            positionDelete: "positions",
            positionsUpdate: "positions"

        },
    },
}
