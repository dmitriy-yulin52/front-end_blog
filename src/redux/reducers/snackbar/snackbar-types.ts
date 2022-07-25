export enum ActionTypeNames {
    OPEN_SNACKBAR = 'snackbar/OPEN_SNACKBAR',
    CLOSE_SNACKBAR = 'snackbar/CLOSE_SNACKBAR',
    SET_MESSAGE_IN_SNACKBAR = 'snackbar/SET_MESSAGE_IN_SNACKBAR',
}

export const initialState: InitialStateType = {
    open: false,
    message: null
}


export type InitialStateType = {
    open: boolean
    message: string | null
}


export type OpenSnackBarType = {
    type: ActionTypeNames.OPEN_SNACKBAR
}
export type CloseSnackBarType = {
    type: ActionTypeNames.CLOSE_SNACKBAR
}
export type SetMessageInSnackBar = {
    type: ActionTypeNames.SET_MESSAGE_IN_SNACKBAR,
    message:string
}



export type ActionsType = OpenSnackBarType | CloseSnackBarType | SetMessageInSnackBar