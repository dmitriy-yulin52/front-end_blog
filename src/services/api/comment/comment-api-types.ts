import {ResponseUserType} from "../user/user-api-types";
import {PostType} from "../../../redux/reducers/posts/posts-types";

export type CreateCommentDto = {
    postId: number
    text: string
}


export type CommentItemType = {
    id:number
    text: string
    post: PostType
    user: ResponseUserType
    create: string
    update: string
}

