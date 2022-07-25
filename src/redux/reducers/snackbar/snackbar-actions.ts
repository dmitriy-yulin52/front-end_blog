import {ActionTypeNames, CloseSnackBarType, OpenSnackBarType, SetMessageInSnackBar} from "./snackbar-types";


export const snackbarActions = {
    open: (): OpenSnackBarType => ({type: ActionTypeNames.OPEN_SNACKBAR}),
    close: (): CloseSnackBarType => ({type: ActionTypeNames.CLOSE_SNACKBAR}),
    setMessage: (message: string): SetMessageInSnackBar => ({type: ActionTypeNames.SET_MESSAGE_IN_SNACKBAR, message})
}