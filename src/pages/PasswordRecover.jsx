import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'
import Swal from 'sweetalert2'

import { useStyle } from '../hooks/useStyle'
import { useForm } from '../hooks/useForm';

import { SelectForm } from '../components/login/SelectForm'
import { Avatar, Button, Grid, TextField, Typography } from '@material-ui/core'
import { AddAlertOutlined } from '@material-ui/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { removeError, setError } from '../redux/actions/validacion/valid';




export const PasswordRecover = () => {


    const { msg } = useSelector(state => state.msg)
    const dispatch = useDispatch()
    const history = useHistory()
    const style = useStyle()

    const [value, handleInputChange] = useForm({
        name: 'vanessa',
        dni: '123456879',
        email: 'email@correo.com'
    })

    const { name, dni, email } = value


    const onsubmit = (ev) => {
        ev.preventDefault()

        if (formValid()) {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'se ha enviado un  correo electrónico a su direccion para continuar',
                showConfirmButton: false,
                timer: 3000
            })
            history.replace('/auth/login')
        }
    }


    const formValid = () => {

        if (name.trim().length === 0) {

            dispatch(setError('El nombre es obligatorio'))
            return false

        } else if (dni.trim().length === 0) {

            dispatch(setError('el DNI es obligatorio'))
            return false

        } else if (!validator.isEmail(email)) {

            dispatch(setError('El email es obligatorio'))
            return false
        }

        dispatch(removeError())
        return true

    }


    return (
        <div>

            <Typography variant="h5">
                Recupero contraseña
            </Typography>

            <Typography variant="body2" className={style.typography}>
                para generar una nueva contraseña ingrese los siguientes datos.
                <br />
                Se le enviara una correo electrónico con un enlace que debera terminar para
                terminar el proceso
            </Typography>

            {
                msg &&

                <h4 className={style.alert}>  <AddAlertOutlined /> {msg}</h4>
            }

            <Typography variant="body1" className={style.typography}>
                Tipo y numero de documento
            </Typography>

            <form onSubmit={onsubmit}>

                <Grid alignItems="center" container spacing={3} direction="row" justify="center">

                    <Grid item xs={4}>
                        <SelectForm />
                    </Grid>

                    <Grid item xs={8}>
                        <TextField
                            placeholder=""
                            label="DNI"
                            name="dni"

                            value={dni}
                            onChange={handleInputChange}
                        />
                    </Grid>

                </Grid>

                <Grid >
                    <TextField
                        placeholder=""
                        label="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>

                <Grid >
                    <TextField
                        placeholder=""
                        label="Email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>

                <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    className={style.btn}
                    fullWidth
                >
                    Recuperar clave
                </Button>

            </form>

            <Grid align="center">
                <Avatar className={style.avatar}>
                    <Link to="/auth/login">
                        <ArrowBackIcon />
                    </Link>
                </Avatar>
            </Grid>

        </div>
    )
}
