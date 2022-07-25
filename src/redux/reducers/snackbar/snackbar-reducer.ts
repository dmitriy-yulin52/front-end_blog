import {ActionsType, ActionTypeNames, initialState, InitialStateType} from "./snackbar-types";


export const snackbarReducer = (state: InitialStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ActionTypeNames.OPEN_SNACKBAR:
            return {
                ...state,
                open: true
            }
        case ActionTypeNames.CLOSE_SNACKBAR:
            return {
                ...state,
                open: false
            }
        case ActionTypeNames.SET_MESSAGE_IN_SNACKBAR:
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }

}