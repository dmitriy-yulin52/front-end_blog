import {SetPostsType, NameActionsType, PostType, SetIsLoading, SetPostItemType} from "./posts-types";
import {GlobalApi} from "../../../services/api";
import {CreatePostDto} from "../../../services/api/post/post-api-types";


export const postsActions = {
    setPosts: (items: PostType[]): SetPostsType => ({type: NameActionsType.SET_POSTS, payload: items}),
    setPostItem: (item: PostType): SetPostItemType => ({type: NameActionsType.SET_POST_ITEM, payload: item}),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({type: NameActionsType.SET_IS_LOADING, payload: isLoading}),

}

export async function createPost(dto: CreatePostDto): Promise<PostType | undefined> {
    try {
        const post = await GlobalApi().post.create(dto)
        return post
    } catch (e) {
        console.warn('Create post', e)
    }
    return undefined
}

export async function updatePost(id: number, dto: CreatePostDto) {
    try {
        const post = await GlobalApi().post.update(id, dto)
        console.log(post, 'create post')
    } catch (e) {
        console.warn('Create post', e)
    }
}