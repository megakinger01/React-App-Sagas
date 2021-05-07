import React from 'react'
import { Avatar, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import BuildIcon from '@material-ui/icons/Build';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { useStyle } from '../hooks/useStyle';
import { useHistory } from 'react-router';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const AsistenciaPage = () => {

    const history = useHistory()
    const style = useStyle()

    const denunciar = () => {
        history.replace('/denunciar')
    }

    const regresar = () => {
        history.push('/auth/loginr')
    }


    return (
        <div>
            <Grid>
                <Typography variant="h6">
                    como podemos ayudarte
                </Typography>
            </Grid>

            <Grid>
                <List
                    component="nav"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="auxilio mecánico" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <BusinessCenterIcon />
                        </ListItemIcon>
                        <ListItemText primary="asistencia legal" />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <AirplanemodeActiveIcon />
                        </ListItemIcon>
                        <ListItemText primary="asistencia viajero" />
                    </ListItem>

                </List>
            </Grid>

            <Button
                variant="outlined"
                className={style.btn}
                fullWidth
                color="primary"
                align="center"
                onClick={denunciar}
            >
                Denunciar Sinientro
                </Button>

                <Grid align="center">
                    <Avatar className={style.avatar} onClick={regresar}>
                        <KeyboardBackspaceIcon />
                    </Avatar>
                </Grid>   
        </div>
    )
}
