import { types } from "../../types/types"



export const signInAction = ( email, password ) => ({
    type: types.startloading,
    payload: { email , password }
}) 


export const loginAction = ( uid, displayName ) => ({
    type: types.login,
    payload:{
        uid, displayName
    }
})


export const registerAction = ( name , email, password ) => ({
    type: types.startRegister,
    payload: { name , email, password}
})

export const signInGoogleAction = () => ({
    type: types.signInGoogle
})

export const signInFacebookAction = () => ({
    type: types.signInFacebook
})

export const errorAction = (error) => ({
    type: types.Error,
    payload: error
})

export const logout = () => ({
    type: types.logout
})

export const removeErrorlogin = () => ({
    type:types.removeErrorlogin
})




// export const finishloadingAction = () => ({
   
    
// })