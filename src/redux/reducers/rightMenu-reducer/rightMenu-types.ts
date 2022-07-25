export enum ActionTypeNames {
    SET_VISIBLE_RIGHT_MENU = 'rightMenu/SET_VISIBLE_RIGHT_MENU'
}

export const initialState: InitialStateType = {
    isVisible: false
}

export type InitialStateType = {
    isVisible: boolean
}

export type SetVisibleRightMenu = {
    type: ActionTypeNames.SET_VISIBLE_RIGHT_MENU,
    payload:boolean
}



export type ActionTypes = SetVisibleRightMenu
