import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStyle } from '../hooks/useStyle'


export const OnBoarding = () => {

    const history = useHistory()
    const style = useStyle()

    const iniciar = () => {
        history.replace('/auth/login')
    }

    return (

        <Grid>
            <Grid>
                <img src="https://pbs.twimg.com/profile_images/1083431136674623488/BXCcykKx_400x400.jpg" alt="logo_seguro" />
            </Grid>
            <Grid align="center">
                <Button
                    variant="outlined"
                    className={style.btn}
                    fullWidth
                    color="primary"
                    align="center"
                    onClick={iniciar}
                >
                    Ingresar
                </Button>
            </Grid>
        </Grid>

    )
}
