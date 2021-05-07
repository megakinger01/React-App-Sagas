import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator'
import Swal from 'sweetalert2'

import { Button, Divider, Grid, TextField } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { useStyle } from '../../hooks/useStyle';

import { removeErrorlogin, signInAction } from '../../redux/actions/auth/auth';
import { SelectForm } from './SelectForm';
import { removeError, setError } from '../../redux/actions/validacion/valid';
import { AddAlertOutlined } from '@material-ui/icons';

export const LoginForm = () => {

    const { error } = useSelector(state => state.auth)
    const { msg } = useSelector(state => state.msg)
    const dispatch = useDispatch()
    const style = useStyle()

    const [value, handleInputChange] = useForm({
        email: '',
        dni: '',
        password: ''
    })
    const { email, dni, password } = value



    const onsubmit = (ev) => {
        ev.preventDefault()

        if (formValid()) {

            dispatch(signInAction(email, password))

        }

    }


    if (error !== null) {

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'usuario no encontrado',
            showConfirmButton: false,
            timer: 2000
        })

        dispatch(removeErrorlogin())
    }





    const formValid = () => {

        if (dni.trim().length === 0) {

            dispatch(setError('el DNI es obligatorio'))
            return false

        } else if (!validator.isEmail(email)) {

            dispatch(setError('El email es obligatorio'))
            return false
        } else if (password.length < 4) {
            dispatch(setError('El password debe ser mayor a 5 caracteres'))
            return false
        }

        dispatch(removeError())
        return true

    }



    return (
        <div>
            <form onSubmit={onsubmit}>

                {
                    msg &&

                    <h4 className={style.alert}>  <AddAlertOutlined /> {msg}</h4>
                }

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
                            fullWidth
                        />
                    </Grid>

                </Grid>


                <TextField
                    label="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    fullWidth
                />

                <TextField
                    placeholder=""
                    type="password"
                    label="contraseña"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    fullWidth
                />

                <Grid align="center">
                    <Link className={style.link} to="/auth/password">Recuperar mi contraseña</Link>
                </Grid>

                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={style.btn}
                    fullWidth
                >

                    INGRESAR
            </Button>

            </form>

            <Divider />
        </div>
    )
}
