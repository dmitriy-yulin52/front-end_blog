import * as React from 'react'
import {memo, ReactElement, useCallback, useState} from 'react'
import {Box, Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../../ui/Comment";
import styles from './post-comments.module.scss'
import {AddCommentForm} from "../../ui/AddCommentForm/AddCommentForm";
import {useAction, usePartial} from "../../../utils/hooks/hooks-utils";
import {commentsActions} from "../../../redux/reducers/comments/comments-actions";
import {CommentItemType} from "../../../services/api/comment/comment-api-types";
import {useTypedSelector} from "../../../utils/hooks/UseTypedSelector";
import {ResponseUserType} from "../../../services/api/user/user-api-types";
import {itemType} from "../../../redux/reducers/comments/comments-types";


export type CommentType = {
    text: string
    id: number
    createdAt: string
    user: ResponseUserType
    post: {
        id: number
    }
}


interface PostCommentsProps {
    comments?: itemType[]
    postId: number
}

export const PostComments = memo(function PostComments(props: PostCommentsProps): ReactElement {
    const {postId, comments} = props

    const {isAuth, user} = useTypedSelector(state => state.auth)
    const onSetCreatedComment = useAction(usePartial(commentsActions.setCreatedComment))


    const [activeTab, setActiveTab] = useState(0)
    const handlerActiveTab = useCallback((_, value) => {
        setActiveTab(value)
    }, [activeTab, setActiveTab])

    const onClickHandler = useCallback((comment: CommentItemType) => {
        onSetCreatedComment(comment)
    }, [onSetCreatedComment])


    return <Paper elevation={0} className={styles.wrapper}>
        <Box flex={'0 1 480px'}>
            <Typography variant="h6" className={styles.wrapper__title}>
                42 комментария
            </Typography>
            <Tabs onChange={handlerActiveTab} className={styles.wrapper_tabs} value={activeTab} indicatorColor="primary"
                  textColor="primary">
                <Tab label="Популярные"/>
                <Tab label="По порядку"/>
            </Tabs>
            <Divider/>
            {isAuth &&
                <AddCommentForm
                    setComment={onClickHandler}
                    postId={postId}
                />
            }
            <Box marginBottom={'24px'}/>
            {comments.length === 0 ? <Typography>Нет комментариев</Typography> : comments.map((item, index) => <Comment
                key={item.text}
                createdAt={item?.user?.create}
                user={item.user}
                text={item.text}
                curUserId={user?.id}
                id={item.id}
            />)}
        </Box>
    </Paper>
})
