import {ActionsType, ActionTypeNames, initialState, InitialStateType} from "./auth-types";

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ActionTypeNames.SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case ActionTypeNames.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case ActionTypeNames.SET_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case ActionTypeNames.SET_OPEN_AUTH_DIALOG:
            return {
                ...state,
                openAuthDialog:action.payload
            }
        default:
            return state
    }
}