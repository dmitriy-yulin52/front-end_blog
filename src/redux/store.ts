import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {snackbarReducer} from "./reducers/snackbar/snackbar-reducer";
import {rightMenuReducer} from "./reducers/rightMenu-reducer/rightMenu-reducer";
import {authReducer} from "./reducers/auth/auth-reducer";
import {createWrapper} from "next-redux-wrapper";

export const rootReducer = combineReducers({
    snackBar: snackbarReducer,
    rightMenu: rightMenuReducer,
    auth: authReducer
})


const middleware = [thunk]
const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore)


export const store = makeStore()

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch;

