import {ActionsType, initialState, InitialStateType, NameActionsType} from "./posts-types";

export const postsReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {

    switch (action.type) {
        case NameActionsType.GET_POSTS:
            return {
                ...state,
                items:action.payload,
                isLoading:false
            }

        default:
            return state
    }

}
