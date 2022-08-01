import {SetPostsType, NameActionsType, PostType, SetIsLoading, SetPostItemType} from "./posts-types";
import {GlobalApi} from "../../../services/api";
import {CreatePostDto} from "../../../services/api/post/post-api-types";
import {DispatchType} from "../../store";
import {snackbarActions} from "../snackbar/snackbar-actions";


export const postsActions = {
    setPosts: (items: PostType[]): SetPostsType => ({type: NameActionsType.SET_POSTS, payload: items}),
    setPostItem: (item: PostType): SetPostItemType => ({type: NameActionsType.SET_POST_ITEM, payload: item}),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({type: NameActionsType.SET_IS_LOADING, payload: isLoading}),
    createPost:createPostTC,
    updatePost:updatePostTC
}

async function createPostTC(dto: CreatePostDto): Promise<(dispatch: DispatchType) => Promise<PostType>> {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(postsActions.setIsLoading(true))
            const post = await GlobalApi().post.create(dto)
            return post
        } catch (e) {
            dispatch(snackbarActions.open())
            dispatch(snackbarActions.setMessage('Ошибка'))
        } finally {
            dispatch(postsActions.setIsLoading(false))
        }
    }
}

async function updatePostTC(id: number, dto: CreatePostDto): Promise<(dispatch: DispatchType) => void> {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(postsActions.setIsLoading(true))
            await GlobalApi().post.update(id, dto)
        } catch (e) {
            dispatch(snackbarActions.open())
            dispatch(snackbarActions.setMessage('Ошибка'))
        } finally {
            dispatch(postsActions.setIsLoading(false))
        }
    }
}