export enum NameActionsType {
    GET_POSTS = 'posts/GET_POSTS'
}


export type PostType = {
    body: any[]
    create: string
    tags: string
    title: string
    update: string
    views: number
    id: number
}


export const initialState: InitialStateType = {
    items: [],
    isLoading: false
}

export type  InitialStateType = {
    items: PostType[]
    isLoading: boolean
}


export type GetPostsType = {
    type: NameActionsType.GET_POSTS
    payload: PostType[]
}


export type ActionsType = GetPostsType