import {ActionsType, initialState, InitialStateType, NameActionsType} from "./posts-types";

export const postsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case NameActionsType.SET_POSTS:
            return {
                ...state,
                items: action.payload,
            }
        case NameActionsType.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case NameActionsType.SET_POST_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }

}
