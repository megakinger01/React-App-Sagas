import React from 'react'
import { Avatar, Button, Grid, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import { useStyle } from '../../hooks/useStyle';
import { useDispatch } from 'react-redux';
import {  signInGoogleAction } from '../../redux/actions/auth/auth';
import { blue } from '@material-ui/core/colors';

export const SocialNetworks = () => {

    const style = useStyle()
    const dispatch = useDispatch()

    const signGoogle = () => {
        dispatch(signInGoogleAction())
    }


    const faceSignIn = () => {
        dispatch(signInGoogleAction())
    }

    return (
        <div>
            <Typography align="center">
                O ingresa con :
            </Typography>

            <Grid alignItems="center" container spacing={3} direction="row" justify="center">

                <Grid item xs={3}>
                    <Avatar className={style.avatarSocial}>
                        <Button
                            onClick={faceSignIn}
                        >
                            <FacebookIcon style={{ color: blue[500] }} />
                        </Button>
                    </Avatar>
                </Grid>

                <Grid item xs={3}>
                    <Avatar className={style.avatarSocial}>
                        <Button
                            onClick={signGoogle}
                        >
                            <img className={style.google} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </Button>
                    </Avatar>
                </Grid>

            </Grid>
        </div>
    )
}
