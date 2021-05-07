import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme-config'
import { AppRoutes } from './routes/App.Routes'
import { useStyle } from './hooks/useStyle'
import { Paper } from '@material-ui/core'
import { Provider } from 'react-redux'
import { store } from './redux/store'



export const App = () => {

    const style = useStyle()

    return (
        <Provider store={store} >
            <ThemeProvider theme={theme}>
                <Paper elevation={9} className={style.paper}>
                    <AppRoutes />
                </Paper>
            </ThemeProvider>
        </Provider>
    )
}
