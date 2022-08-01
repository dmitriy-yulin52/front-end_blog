import {CommentItemType} from "../../../services/api/comment/comment-api-types";
import {ResponseUserType} from "../../../services/api/user/user-api-types";
import {CommentType} from "../../../components/pages/post/post-comments";


export enum ActionNamesType {
    SET_ITEMS = 'comments/SET_ITEMS',
    SET_IS_LOADING = 'comments/SET_IS_LOADING',
    SET_CREATED_COMMENT = 'comments/SET_CREATED_COMMENT',
    SET_REMOVE_COMMENT = 'comments/SET_REMOVE_COMMENT',
}


export type itemType = {
    create: string
    id: number
    post: { id: number }
    text: string
    update: string
    user: ResponseUserType
}

export const initialState: InitialStateType = {
    items: [],
    isLoading: false,
    lastCreateComment: {} as CommentItemType
}


export type InitialStateType = {
    items: CommentItemType[]
    isLoading: boolean
    lastCreateComment: CommentItemType

}


export type SetItemsType = {
    type: ActionNamesType.SET_ITEMS
    payload: any[]
}
export type SetIsLoading = {
    type: ActionNamesType.SET_IS_LOADING
    payload: boolean
}
export type SetCreatedComment = {
    type: ActionNamesType.SET_CREATED_COMMENT
    payload: CommentItemType
}
export type SetRemoveComment = {
    type: ActionNamesType.SET_REMOVE_COMMENT
    payload: number
}


export type ActionsType = SetItemsType | SetIsLoading | SetCreatedComment | SetRemoveComment