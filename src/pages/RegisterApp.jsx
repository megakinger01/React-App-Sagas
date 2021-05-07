import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator'


import { useStyle } from '../hooks/useStyle';
import { useForm } from '../hooks/useForm';
import { SelectForm } from '../components/login/SelectForm';
import { Avatar, Button, Checkbox, Grid, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { registerAction } from '../redux/actions/auth/auth';
import { removeError, setError } from '../redux/actions/validacion/valid';
import { AddAlertOutlined } from '@material-ui/icons';

export const RegisterApp = () => {

    const style     = useStyle()
    const dispatch  = useDispatch()
    const { msg }   = useSelector(state => state.msg)


    const [value, handleInputChange] = useForm({
        name: '',
        dni: '',
        email: '',
        email2: '',
        password: '',
        password2: '',

    })

    const { name, dni, email, email2, password, password2 } = value



    const onsubmit = (ev) => {
        ev.preventDefault()

        if (formValid()) {

            dispatch(registerAction(name, email, password))
        }

    }


    const formValid = () => {


        if (name.trim().length === 0) {

            dispatch(setError('el nombre es obligatorio'))
            return false

        }else if (dni.trim().length === 0) {

            dispatch(setError('el DNI es obligatorio'))
            return false

        } else if (!validator.isEmail(email)) {

            dispatch(setError('El email es obligatorio'))
            return false

        } else if (!validator.isEmail(email2)) {

            dispatch(setError('Repetir email es obligatorio'))
            return false

        } else if (email !== email2) {

            dispatch(setError('email deben ser iguales'))
            return false

        } else if (password !== password2 || password.length < 5) {

            dispatch(setError('contraseñas no coinciden'))
            return false
        }


        dispatch(removeError())
        return true

    }


    const dispatchRemove = () => {
        dispatch(removeError())
    }



    return (
        <div>
            <Grid align="center">
                <Avatar className={style.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <h2>Registrate</h2>
            </Grid>
            
            {
                msg &&
                <h4 className={style.alert}>  <AddAlertOutlined /> {msg}</h4>
            }


            <form onSubmit={onsubmit}>
                <Grid alignItems="center" container spacing={2} direction="row" justify="center">

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

                <Typography variant="subtitle1">
                    Si el titular de poliza es una entidad juridica debe registrarse
                    selecionando CUIT como tipo de documento
                </Typography>

                <TextField
                    placeholder=""
                    label="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    placeholder=""
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    fullWidth

                />

                <TextField
                    placeholder=""
                    label="Repetir email"
                    name="email2"
                    value={email2}
                    onChange={handleInputChange}
                    fullWidth
                />


                <Grid alignItems="center" container spacing={2} direction="row" justify="center">

                    <Grid item xs={6}>
                        <TextField
                            placeholder=""
                            type="password"
                            label="contraseña"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>


                    <Grid item xs={6}>
                        <TextField
                            placeholder=""
                            type="password"
                            label="Repetir contraseña"
                            name="password2"
                            value={password2}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>

                </Grid>


                <Typography variant="subtitle1">
                    <Checkbox
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        required
                    />

                    <Link className={style.link} to="/auth/terminos" >
                        Acepto  Términos y condiciones
                            </Link>
                </Typography>

                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="outlined"
                    className={style.btn}
                >

                    Crear usuario
                        </Button>
            </form>

            <Grid align="center">

                <Typography variant="body1">
                    
                    Soy cliente
                    <Link className={style.link} to="/auth/login" onClick={dispatchRemove} >
                        , Ingresar
                    </Link>
                </Typography>
            </Grid>

        </div>
    )
}
