import {RootStateType} from "../../store";
import {createSelector} from "reselect";


export const commentItemsSelector = (state: RootStateType) => state.comment.items
export const postItemSelector = (state: RootStateType) => state.posts.item


export const filteredComments = createSelector([commentItemsSelector, postItemSelector],
    (comments, post) => {
        const result = comments.filter((el) => post ? el?.post?.id === post.id : true)
        return result
    })







