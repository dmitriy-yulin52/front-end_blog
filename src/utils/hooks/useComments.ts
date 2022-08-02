import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {commentsActions} from "../../redux/reducers/comments/comments-actions";
import {useDispatch} from "react-redux";
import {CommentItemType} from "../../services/api/comment/comment-api-types";
import {GlobalApi} from "../../services/api";
import {useTypedSelector} from "./UseTypedSelector";


type UseCommentsType = {
    comments: CommentItemType[]
    // setComments: Dispatch<SetStateAction<CommentItemType[]>>
    setComments: any
}

export const useComments = (postId?: number): UseCommentsType => {
    const [comments, setComments] = useState<CommentItemType[]>([])
    console.log(comments,'comments no hooks')
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                dispatch(commentsActions.setIsLoading(true))
                const comments: CommentItemType[] = await GlobalApi().comment.getAll(postId)
                console.log(comments,'comments hooks in sync')
                dispatch(commentsActions.setItems([...comments.reverse()]))
                setComments(comments)
            } catch (e) {
                console.warn(e)
            } finally {
                dispatch(commentsActions.setIsLoading(false))
            }
        })()

    }, [setComments])

    return {comments, setComments}
}
