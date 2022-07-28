import {GetPostsType, NameActionsType, PostType} from "./posts-types";


export const postsActions = {
    getPosts: (items: PostType[]): GetPostsType => ({type: NameActionsType.GET_POSTS, payload: items})
}