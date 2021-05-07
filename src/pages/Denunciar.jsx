import React from 'react'
import { Avatar, Button, Grid, Typography } from '@material-ui/core'
import { useStyle } from '../hooks/useStyle'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'
import { deepPurple } from '@material-ui/core/colors'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const Denunciar = () => {

    const history = useHistory()
    const style = useStyle()

    const iniciar = () => {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: ' inmediatamente serás contactado',
            showConfirmButton: false,
            timer: 3000
        })
        history.replace('/auth/login')
    }

    const regresar = () => {
        history.push('/auth/loginr')
    }



    return (
        <div>
            <Grid>
                <Typography className={style.typography} variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                    inventore
                </Typography>
                <Typography className={style.typography} variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                    inventore
                </Typography>
                <Typography className={style.typography} variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                    inventore
                </Typography>
            </Grid>

            <Button
                variant="contained"
                // color="primary"
                fullWidth
                align="center"
                onClick={iniciar}
                style={{ background: deepPurple[600], color:'#fff',  margin: ('15px 0px')}}
            >
                Quiero que me contacten
                </Button>
            
            <Grid align="center">
                <Avatar className={style.avatar} onClick={regresar}>
                    <KeyboardBackspaceIcon />
                </Avatar>
            </Grid> 

        </div>
    )
}
