import React from 'react'
import { Avatar, Button, Grid, Typography } from '@material-ui/core'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { useStyle } from '../hooks/useStyle';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/auth/auth';

export const AppPage = () => {

    const style = useStyle()
    const dispatch = useDispatch()


    const salirsesion = () => {
        dispatch(logout())
    }
    return (
        <Grid>
            <Grid align="center">
                <Avatar className={style.avatar}>
                    <DirectionsCarIcon />
                </Avatar>
            </Grid>

            <Typography variant="subtitle1" className={style.typography}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis fuga, iure omnis sed itaque earum amet atque ea dicta
                similique velit veniam maiores suscipit reprehenderit repellat
                sint asperiores esse obcaecati.
            </Typography>

            <Grid align="center">
                <Avatar className={style.avatar}>
                    <DirectionsBusIcon />
                </Avatar>
            </Grid>

            <Typography variant="subtitle1" className={style.typography}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis fuga, iure omnis sed itaque earum amet atque ea dicta
                similique velit veniam maiores suscipit reprehenderit repellat
                sint asperiores esse obcaecati.
            </Typography>

            <Button
                color="primary"
                variant="contained"
                onClick={salirsesion}
                fullWidth
            > Salir </Button>
        </Grid>
    )
}
