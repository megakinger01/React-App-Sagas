import React from 'react'
import Swal from 'sweetalert2'
import { Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { useStyle } from '../hooks/useStyle';
import { useHistory } from 'react-router';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const CotizarPage = () => {

    const [auto, setAuto] = React.useState('');
    const style = useStyle()
    const history = useHistory()

    const cotizar = (ev) => {

        ev.preventDefault()

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'cotizacion procesada',
            showConfirmButton: false,
            timer: 3000
        })
        history.replace('/auth/login')

    };

    const handleChange = (event) => {
        setAuto(event.target.value);
    };

    const regresar = () => {
        history.push('/auth/loginr')
    }


    return (
        <div>
            <Typography variant="h5">
                Cotiza tu seguro
            </Typography>

            <Typography variant="subtitle2">
                Elige el tipo de seguro:
            </Typography>

            <form onSubmit={cotizar}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Auto</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Auto"
                        value={auto}
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="">
                            <em>Auto</em>
                        </MenuItem>
                        <MenuItem value={10}>Auto1</MenuItem>
                        <MenuItem value={20}>Moto</MenuItem>
                        <MenuItem value={30}>camioneta</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        label="Año"
                        required
                    />

                    <TextField
                        label="marca"
                        required
                    />

                    <TextField
                        label="modelo"
                        required
                    />
                </FormControl>

                <Button
                    className={style.btn}
                    color="secondary"
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    Cotizar un seguro
            </Button>
            </form>

            <Grid align="center">
                <Avatar className={style.avatar} onClick={regresar}>
                    <KeyboardBackspaceIcon />
                </Avatar>
            </Grid> 
        </div>
    )
}
