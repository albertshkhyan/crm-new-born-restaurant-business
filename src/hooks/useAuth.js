import React, { useState, useEffect, useContext, createContext, useCallback } from "react";

import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash"
import { getyMeAC } from './../actions/userActions';

const noop = () => {};//noop - this function which nothing do
const authContext = createContext({
    token: null,
    login: noop,
    logout: noop,
    profile: null,
});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
// export function ProvideAuth({ children }) {
//     const auth = useProvideAuth();
//     console.log('ProvideAuth auth', auth);
//     return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }


// Hook for child components to get the auth object ...
// ... and re-render when it changes.
// export const useAuth = () => {
//     return useContext(authContext);
// };

const accessToken = "token";
// Provider hook that creates auth object and handles state
export function useAuth() {
    const logger = useSelector(state => state.logger);
    // console.log('useAuth logger', logger);
    const [token, setToken] = useState(null);
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.users.data)

    const login = useCallback((jwtToken) => {
        if(jwtToken) {
            setToken(jwtToken);
        }
        // localStorage.setItem(accessToken, jwtToken);
    },[]);

    const logout = useCallback(() => {
        setToken(null);
        localStorage.removeItem(accessToken);
    },[]);


    useEffect(() => {
        const fetch = async () => {
            if (_.isEmpty(profile)) {
                const isToken = localStorage.getItem(accessToken);
                await dispatch(getyMeAC(isToken));
                if(isToken) login(isToken);
            }
        }
        fetch()
    }, [profile, dispatch]);


    console.log("--------useAuth end------------");

    // Return the user object and auth methods
    return {
        token,
        login,
        logout,
        profile,
    };
    
}