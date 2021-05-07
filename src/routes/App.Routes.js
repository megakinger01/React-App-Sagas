import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from '../database/firebase-config'
import { loginAction } from "../redux/actions/auth/auth";

import { Grid, Typography } from "@material-ui/core";

import { OnBoarding } from "../pages/OnBoarding";
import { AppPage } from "../pages/AppPage";

import { AuthRoute } from "./Auth.Routes";
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from "./PrivateRoute";
import { CotizarPage } from "../pages/CotizarPage";
import { AsistenciaPage } from "../pages/AsistenciaPage";
import { Denunciar } from "../pages/Denunciar";
import AutorenewIcon from '@material-ui/icons/Autorenew';




export const AppRoutes = () => {

  const dispatch = useDispatch()
  const [isLogged, setIsLogged] = useState(false)
  const [isCheking, setIsCheking] = useState(true)

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {

      if (user?.uid) {
        dispatch(loginAction(user.uid, user.displayName))
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }

      setIsCheking(false)
    })



  }, [dispatch, setIsCheking, setIsLogged])


  if (isCheking) {
    return (
      <Typography variant="h4" align="center">
          Espere....
          <AutorenewIcon />
      </Typography>
    )
  }



  return (
    <Router>
      <Grid>
        <div>
          <Switch>
            <PublicRoute
              isAuthenticated={isLogged}
              exact
              path="/"
              component={OnBoarding} />

            <PublicRoute
              isAuthenticated={isLogged}
              exact
              path="/cotizar"
              component={CotizarPage} />

            <PublicRoute
              isAuthenticated={isLogged}
              path="/auth"
              component={AuthRoute} />

            <PublicRoute
              isAuthenticated={isLogged}
              path="/asistencia"
              component={AsistenciaPage} />

            <PublicRoute
              isAuthenticated={isLogged}
              path="/denunciar"
              component={Denunciar} />


            <PrivateRoute
              isAuthenticated={isLogged}
              exact
              path="/page1"
              component={AppPage} />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Grid>
    </Router>
  )
}

