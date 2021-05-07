import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginApp } from '../pages/LoginApp';
import { PasswordRecover } from '../pages/PasswordRecover';
import { RegisterApp } from '../pages/RegisterApp';


export const AuthRoute = () => {
    return (
        <div>
            <Switch>
                <Route
                    component={LoginApp}
                    path="/auth/login"
                    exact
                />
                <Route
                    component={RegisterApp}
                    path="/auth/register"
                    exact
                />

                <Route
                    component={PasswordRecover}
                    path="/auth/password"
                    exact
                />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
