import {CommentItemType} from "../../../services/api/comment/comment-api-types";


export enum ActionNamesType {
    SET_ITEMS = 'comments/SET_ITEMS',
    SET_IS_LOADING = 'comments/SET_IS_LOADING',
    SET_CREATED_COMMENT = 'comments/SET_CREATED_COMMENT',
    SET_REMOVE_COMMENT = 'comments/SET_REMOVE_COMMENT',
}


export const initialState: InitialStateType = {
    items: [] as any,
    isLoading: false
}


export type InitialStateType = {
    items: any
    isLoading: boolean

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