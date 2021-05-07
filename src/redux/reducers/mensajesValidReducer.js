import { types } from "../types/types"


const initialState = {

    msg: null

}

export const mensajesValidReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setError:
            return {
                ...state,
                msg: action.payload
            }
        case types.removeError:
            return {
                ...state,
                msg: null
            }


        default:
            return state
    }
}