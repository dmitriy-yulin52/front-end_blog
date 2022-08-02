import {ActionNamesType, SetCreatedComment, SetIsLoading, SetItemsType, SetRemoveComment} from "./comments-types";
import {GlobalApi} from "../../../services/api";
import {DispatchType} from "../../store";
import {CommentItemType} from "../../../services/api/comment/comment-api-types";


export const commentsActions = {
    setItems: (items: any): SetItemsType => ({type: ActionNamesType.SET_ITEMS, payload: items}),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({type: ActionNamesType.SET_IS_LOADING, payload: isLoading}),
    getAll,
    setCreatedComment: (comment: CommentItemType): SetCreatedComment => ({
        type: ActionNamesType.SET_CREATED_COMMENT,
        payload: comment
    }),
    removeCommentTC,
    remove: (id: number): SetRemoveComment => ({type: ActionNamesType.SET_REMOVE_COMMENT, payload: id})
}

function getAll(postId?:number):(dispatch: DispatchType) => Promise<CommentItemType[]> {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(commentsActions.setIsLoading(true))
            const comments: CommentItemType[] = await GlobalApi().comment.getAll(postId)
            dispatch(commentsActions.setItems([...comments.reverse()]))
            return comments
        } catch (e) {
            console.warn(e)
        } finally {
            dispatch(commentsActions.setIsLoading(false))
        }
    }
}

function removeCommentTC(id: number) {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(commentsActions.setIsLoading(true))
            dispatch(commentsActions.remove(id))
            await GlobalApi().comment.remove(id)
        } catch (e) {
            console.warn(e)
        } finally {
            dispatch(commentsActions.setIsLoading(false))
        }
    }

}