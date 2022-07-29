import {OutputData} from "@editorjs/editorjs/types/data-formats/output-data";
import {ResponseUserType} from "../../../services/api/user/user-api-types";

export enum NameActionsType {
    SET_POSTS = 'posts/GET_POSTS',
    SET_IS_LOADING = 'posts/SET_IS_LOADING',
    SET_POST_ITEM = 'posts/SET_POST_ITEM',
}


export type PostType = {
    body: OutputData['blocks']
    create: string
    tags: any[] | null
    title: string
    description: string,
    update: string
    views: number
    id: number
    user: ResponseUserType
}


export const initialState: InitialStateType = {
    items: [],
    isLoading: false,
    item: null
}

export type  InitialStateType = {
    items: PostType[]
    isLoading: boolean
    item: PostType
}


export type SetPostsType = {
    type: NameActionsType.SET_POSTS
    payload: PostType[]
}

export type SetIsLoading = {
    type: NameActionsType.SET_IS_LOADING
    payload: boolean
}
export type SetPostItemType = {
    type: NameActionsType.SET_POST_ITEM
    payload: PostType
}


export type ActionsType = SetPostsType | SetIsLoading | SetPostItemType