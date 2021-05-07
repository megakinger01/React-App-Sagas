import { types } from "../../types/types";







export const setError = (error) => ({
    type: types.setError,
    payload: error
})

export const removeError = () => ({
    type: types.removeError,
  
}) 