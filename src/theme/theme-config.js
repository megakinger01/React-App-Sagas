import { createMuiTheme } from '@material-ui/core/styles'
import { teal , deepOrange, deepPurple } from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette: {
        primary: {
          main: teal[500],
        },
        secondary: {
          main: deepOrange[500]
        },
        info:{
          main:deepPurple[500]
        }
    },
    typography: {
      

      subtitle1: {
        fontSize: 12,
        fontStyle: 'italic',
      },
      body2:{
        fontSize: 12,
        color:teal[500],  
      },
      h5:{
        color:teal[500],
        fontWeight:'bold'
      },
      subtitle2:{
        color:teal[500],
        fontWeight:'bold'
      },
      h4:{
        color:teal[500],
      }
    }
   

})

export default theme