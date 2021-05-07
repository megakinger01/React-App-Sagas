import React from 'react'
import { Avatar, Button, Divider, Grid } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'


import { useStyle } from '../../hooks/useStyle';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

export const LoginFeed = () => {

    const style = useStyle()
    const history = useHistory()

    const cotizarSeguro = () => {
        history.push('/cotizar')
    }

    return (
        <div>
            <Divider />

            <Button
                className={style.btn}
                color="secondary"
                variant="contained"
                fullWidth
                onClick={cotizarSeguro}
            >
                Cotizar un seguro
            </Button>

            <Grid alignItems="center" container spacing={3} direction="row" justify="center">

                <Grid item xs={3}>
                    <Link className={style.feedLink} to="/asistencia">
                        <Avatar className={style.avatar}>
                            <HeadsetMicIcon />
                        </Avatar>
                        Solicitar asistencia
                    </Link >
                </Grid>

                <Grid item xs={3}>
                    <Link className={style.feedLink} to="/denunciar">
                        <Avatar className={style.avatar}>
                            <PriorityHighIcon />
                        </Avatar>
                        Denunciar siniestro
                    </Link>
                </Grid>

                <Grid item xs={3}>
                    <Link className={style.feedLink} to="/*">
                        <Avatar className={style.avatar}>
                            <NotListedLocationIcon />
                        </Avatar>
                        No soy cliente
                    </Link>
                </Grid>

            </Grid>
        </div>
    )
}
