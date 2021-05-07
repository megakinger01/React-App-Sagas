// import { useDispatch } from 'react-redux'
// import validator from 'validator'
// import { setError } from '../redux/actions/validacion/valid'



// export const RecuperarContraseña = (name, dni, email) => {

//     const dispatch = useDispatch()


//     if ( name.trim().length === 0 ) {
//         console.log('error');
//         dispatch(setError('completa el nombre')) 
//         return true
//     }else if( dni.trim().length === 0){
//         console.log('error');

//         dispatch(setError('completa dni'))
//         return true

//     }else if ( !validator.isEmail( email )) {
//        console.log('error'); 
//         dispatch(setError('email es obligatorio'))
//         return true
//     }

// }   