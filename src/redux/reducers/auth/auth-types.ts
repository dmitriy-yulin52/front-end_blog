import {ResponseUserMeType, ResponseUserType} from "../../../services/api/user/user-api-types";


export enum ActionTypeNames {
    SET_IS_AUTH = 'auth/SET_IS_AUTH',
    SET_USER = 'auth/SET_USER',
    SET_IS_LOADING = 'auth/SET_IS_LOADING',
    SET_OPEN_AUTH_DIALOG = 'auth/SET_OPEN_AUTH_DIALOG',
}

export const initialState: InitialStateType = {
    isAuth: false,
    isLoading: false,
    user: null,
    openAuthDialog: false
}

export type InitialStateType = {
    isAuth: boolean
    isLoading: boolean
    user: ResponseUserType & { password: string }
    openAuthDialog: boolean
}

export type SetIsAuthType = {
    type: ActionTypeNames.SET_IS_AUTH,
    payload: boolean
}
export type SetUserType = {
    type: ActionTypeNames.SET_USER,
    payload: ResponseUserType
}
export type SetIsLoading = {
    type: ActionTypeNames.SET_IS_LOADING,
    payload: boolean
}
export type SetOpenAuthDialog = {
    type: ActionTypeNames.SET_OPEN_AUTH_DIALOG,
    payload: boolean
}


export type ActionsType = SetIsAuthType | SetUserType | SetIsLoading | SetOpenAuthDialog



