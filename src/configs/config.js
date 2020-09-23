export default {
    server: {
        host: 'http://localhost:5050/api',
        headers: {
            'Content-Type': 'application/json',
        },
        routes: {
            login: "/auth/login", 
            register: "/auth/register",
            me: "auth/me"
        },
    },
}