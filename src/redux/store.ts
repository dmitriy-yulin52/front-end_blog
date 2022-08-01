import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {snackbarReducer} from "./reducers/snackbar/snackbar-reducer";
import {rightMenuReducer} from "./reducers/rightMenu-reducer/rightMenu-reducer";
import {authReducer} from "./reducers/auth/auth-reducer";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {composeWithDevTools} from "redux-devtools-extension";
import {postsReducer} from "./reducers/posts/posts-reducer";
import {commentsReducer} from "./reducers/comments/comments-reducer";

export const rootReducer = combineReducers({
    snackBar: snackbarReducer,
    rightMenu: rightMenuReducer,
    auth: authReducer,
    posts: postsReducer,
    comment:commentsReducer
})


const masterReducer = (state: RootStateType, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        }
    } else {
        return rootReducer(state, action)
    }

}

const middleware = [thunk]
const makeStore = () => createStore(masterReducer, composeWithDevTools(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore)

export const store = makeStore()

export type RootStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch;



