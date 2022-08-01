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
        case ActionNamesType.SET_CREATED_COMMENT:
            return {
                ...state,
                items:[action.payload,...state.items],
                lastCreateComment:action.payload
            }
        case ActionNamesType.SET_REMOVE_COMMENT:
            return {
                ...state,
                items:state.items.filter((el)=>el.id !== action.payload)
            }
        default:
            return state
    }
}