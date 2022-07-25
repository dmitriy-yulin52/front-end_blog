import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {snackbarReducer} from "./reducers/snackbar/snackbar-reducer";
import {rightMenuReducer} from "./reducers/rightMenu-reducer/rightMenu-reducer";
import {authReducer} from "./reducers/auth/auth-reducer";
import {createWrapper} from "next-redux-wrapper";
import {InitialStateType as snack_bar_reducer} from "./reducers/snackbar/snackbar-types";
import {InitialStateType as right_menu_reducer} from "./reducers/rightMenu-reducer/rightMenu-types";
import {InitialStateType as auth_reducer} from "./reducers/auth/auth-types";


export const rootReducer = combineReducers({
    snackBar: snackbarReducer,
    rightMenu: rightMenuReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export interface RootStateType {
    snackBar: snack_bar_reducer;
    rightMenu: right_menu_reducer;
    auth: auth_reducer;
}

const middleware = [thunk]
const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore)

const dispatch = makeStore().dispatch
export type DispatchType = typeof dispatch;

