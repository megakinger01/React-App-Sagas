  
import { makeStyles } from "@material-ui/core";


 

export const useStyle = makeStyles({

    paper: {
        padding: 20,
        margin: '20px auto',
        height: '96vh',
        width: 300
    },
    avatarSocial: {
        background: '#fff',
        
    },

    avatar:{
        background: '#829bf7d1',
        cursor:'pointer'
    },

    alert:{
        background:'#fe3946',
        borderRadius:15,
        color:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: ('5px 0px'),
        height:45,
        fontSize:18
    },
    btn: {
        margin: ('18px  0'),
        borderEndEndRadius:15,
        borderEndStartRadius:15,
        borderTopRightRadius:15,
    },
    link:{
        color: '#009688', 
    },

    feedLink:{
        textDecoration: 0,
        color: '#009688',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        
    },
    google:{
        background:'#fff',
        height:20
    },
    typography:{
        margin:('15px 0px')
    },
    formControl: {
        margin:('15px 0px'),
        minWidth: 80,
      }
    
})