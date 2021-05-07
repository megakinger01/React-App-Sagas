import { types } from "../types/types"



const initialState = {

    loading: false,
    error: null

}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.signInGoogle: {
            return {
                ...state,
                loading: true
            }
        }

        case types.login:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName,
                loading: false,
                error: null
            }

        case types.signInFacebook: {
            return {
                ...state,
                loading: true
            }
        }

        case types.Error:
            return {
                ...state,
                error: action.payload
            }

        case types.removeErrorlogin:
            return {
                ...state,
                error: null
            }


        case types.startRegister:
            return {
                ...state,
                loading: true
            }

        case types.logout:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}