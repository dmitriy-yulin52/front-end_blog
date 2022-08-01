import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {commentsActions} from "../../redux/reducers/comments/comments-actions";
import {useDispatch} from "react-redux";
import {CommentItemType} from "../../services/api/comment/comment-api-types";
import {GlobalApi} from "../../services/api";
import {useTypedSelector} from "./UseTypedSelector";


type UseCommentsType = {
    comments: CommentItemType[]
    setComments: Dispatch<SetStateAction<CommentItemType[]>>
}

export const useComments = (postId?: number): UseCommentsType => {
    const [comments, setComments] = useState<CommentItemType[]>([])
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                dispatch(commentsActions.setIsLoading(true))
                const comments: CommentItemType[] = await GlobalApi().comment.getAll(postId)
                setComments(comments)
                dispatch(commentsActions.setItems([...comments.reverse()]))
            } catch (e) {
                console.warn(e)
            } finally {
                dispatch(commentsActions.setIsLoading(false))
            }
        })()

    }, [])

    return {comments, setComments}
}
