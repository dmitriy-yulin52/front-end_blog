import * as React from 'react'
import {memo, ReactElement, useCallback, useState} from 'react'
import {Box, Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../../Comment";
import styles from './post-comments.module.scss'
import {AddCommentForm} from "../../AddCommentForm/AddCommentForm";
import data from '../../../../data'

type UserType = {
    fullname: string
    avatarUrl: string
}


type CommentType = {
    text: string
    id: number
    createdAt: string
    user: UserType
}


interface PostCommentsProps {
    items?: CommentType[]
}

export const PostComments = memo(function PostComments(props: PostCommentsProps): ReactElement {
    const {items} = props

    const [activeTab, setActiveTab] = useState(0)

    const comments = data.module.comments[activeTab ? 'new' : 'popular']

    const handlerActiveTab = useCallback((_, value) => {
        setActiveTab(value)
    }, [activeTab, setActiveTab])


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
            <AddCommentForm/>
            <Box marginBottom={'24px'}/>
            {comments.map((item, index) => <Comment key={item.id - index} createdAt={item.createdAt} user={item.user}
                                                    text={item.text}/>)}
        </Box>
    </Paper>
})
