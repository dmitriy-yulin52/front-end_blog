import {CreateUserDto, LoginDto, ResponseUserType} from "../../../services/api/types";
import {UserApi} from "../../../services/api";
import {setCookie, parseCookies, destroyCookie} from "nookies";
import {ActionTypeNames, SetIsAuthType, SetIsLoading, SetOpenAuthDialog, SetUserType} from "./auth-types";
import {snackbarActions} from "../snackbar/snackbar-actions";
import {Dispatch} from "redux";
import {DispatchType} from "../../store";


export const authActions = {
    login: loginTC,
    logout: logout,
    setIsAuth: (auth: boolean): SetIsAuthType => ({type: ActionTypeNames.SET_IS_AUTH, payload: auth}),
    register: registerTC,
    setIsLoading: (loading: boolean): SetIsLoading => ({type: ActionTypeNames.SET_IS_LOADING, payload: loading}),
    // setUser: (dto: ResponseUserType): SetUserType => ({type: ActionTypeNames.SET_USER, payload: dto}),
    setUser: (dto: ResponseUserType): SetUserType => {
        console.log(dto, 'dto')
        return {type: ActionTypeNames.SET_USER, payload: dto}
    },
    me:setUserMe,
    setOpenAuthDialog: (open: boolean): SetOpenAuthDialog => ({
        type: ActionTypeNames.SET_OPEN_AUTH_DIALOG,
        payload: open
    }),
}


function setUserMe(dto: ResponseUserType) {
    return (dispatch: DispatchType) => {
        dispatch(authActions.setIsLoading(true))
        try {
            dispatch(authActions.setUser(dto))
            dispatch(authActions.setIsAuth(true))

        } catch (e) {
            dispatch(snackbarActions.open())
            dispatch(snackbarActions.setMessage(e.response.data.message))
        } finally {
            dispatch(authActions.setIsLoading(false))
        }
    }
}


function loginTC(dto: LoginDto): (dispatch: DispatchType) => Promise<void> {
    return async (dispatch: DispatchType): Promise<void> => {
        dispatch(authActions.setIsLoading(true))
        try {
            const data = await UserApi.login(dto)
            console.log(data, 'data')
            setCookie(null, 'authToken', data.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
            dispatch(authActions.setIsAuth(true))
            dispatch(authActions.setUser(data))
        } catch (e) {
            dispatch(snackbarActions.open())
            dispatch(snackbarActions.setMessage(e.response.data.message))
        } finally {
            dispatch(authActions.setIsLoading(false))
        }
    }
}

function registerTC(dto: CreateUserDto): (dispatch: DispatchType) => Promise<void> {
    return async (dispatch: DispatchType): Promise<void> => {
        dispatch(authActions.setIsLoading(true))
        try {
            const data = await UserApi.register(dto)
            console.log(data, 'data')
            setCookie(null, 'authToken', data.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
            dispatch(authActions.setIsAuth(true))
            dispatch(authActions.setUser(data))
        } catch (e) {
            dispatch(snackbarActions.open())
            dispatch(snackbarActions.setMessage(e.response.data.message))
        } finally {
            dispatch(authActions.setIsLoading(false))
        }
    }
}


function logout() {
    return (dispatch: DispatchType) => {
        dispatch(authActions.setIsLoading(true))
        try {
            dispatch(authActions.setIsAuth(false))
            dispatch(authActions.setUser(null))
            destroyCookie(null,'authToken')
        } catch (e) {
            dispatch(snackbarActions.open())
            dispatch(snackbarActions.setMessage(e.response.data.message))
        } finally {
            dispatch(authActions.setIsLoading(false))
        }
    }
}