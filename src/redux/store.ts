import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {snackbarReducer} from "./reducers/snackbar/snackbar-reducer";
import {rightMenuReducer} from "./reducers/rightMenu-reducer/rightMenu-reducer";
import {authReducer} from "./reducers/auth/auth-reducer";


export const rootReducers = combineReducers({
    snackBar: snackbarReducer,
    rightMenu:rightMenuReducer,
    auth:authReducer
})


export const store = createStore(rootReducers, applyMiddleware(thunk));


export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;


console.log(store.getState(),'store')