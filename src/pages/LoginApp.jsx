import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useStyle } from '../hooks/useStyle';
import { LoginForm } from '../components/login/LoginForm';
import { SocialNetworks } from '../components/login/SocialNetworks';
import { LoginFeed } from '../components/login/LoginFeed';
import { useDispatch } from 'react-redux';
import { removeError } from '../redux/actions/validacion/valid';



export const LoginApp = () => {

    const style = useStyle()
    const dispatch = useDispatch()

    
    const dispatchRemove = () => {
        dispatch(removeError())
    }


    return (
        <div>
            <Grid align="center">
                <Avatar className={style.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
            </Grid>

            <LoginForm />

            <SocialNetworks />

            <Grid align="center">
                <Typography>
                    Soy cliente, pero no tengo usuario <br />
                    <Link className={style.link} to="/auth/register" onClick={dispatchRemove} >
                        Crear Usuario
                    </Link>
                </Typography>
            </Grid>

            <LoginFeed />

        </div>
    )
}
