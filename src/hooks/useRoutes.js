import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { SignIn, SignUp, Overview, Analytics } from "containers";

const useRoutes = (isAuthenticated) => {
    let isAuth = isAuthenticated;
    if(!isAuth) {
        isAuth = localStorage.getItem("token");
    }
    if (isAuth) {
        return (
            <Switch>
                <Route path="/overview" component={Overview} />
                <Route path="/analytics" component={Analytics} />
                <Redirect path="/" to="/overview"/>
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/login" component={SignIn} />
                <Route path="/register" component={SignUp} />
                <Redirect path="/" to="/login"/>
            </Switch>
        )
    }
}
export default useRoutes;