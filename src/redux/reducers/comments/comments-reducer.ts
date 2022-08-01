import {ActionNamesType, ActionsType, initialState, InitialStateType} from "./comments-types";


export const commentsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ActionNamesType.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case ActionNamesType.SET_ITEMS:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }

        default:
            return state
    }
}