import {ActionTypeNames, ActionTypes, initialState, InitialStateType} from "./rightMenu-types";


export const rightMenuReducer = (state: InitialStateType = initialState, action: ActionTypes):InitialStateType => {

    switch (action.type) {
        case ActionTypeNames.SET_VISIBLE_RIGHT_MENU:
            return {
                ...state,
                isVisible:action.payload
            }
        default:
            return state
    }

}
