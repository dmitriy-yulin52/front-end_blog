import * as React from 'react'
import {memo, ReactElement} from 'react'
import {Box, Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../../Comment";
import styles from './post-comments.module.scss'

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
    items: CommentType[]
}

export const PostComments = memo(function PostComments(props: PostCommentsProps): ReactElement {

    const {items} = props

    return <Paper elevation={0} className={styles.wrapper}>
        <Box flex={'0 1 480px'}>
             <Typography variant="h6" className={styles.wrapper__title}>
            42 комментария
        </Typography>
        <Tabs className={styles.wrapper_tabs} value={0} indicatorColor="primary" textColor="primary">
            <Tab label="Популярные"/>
            <Tab label="По порядку"/>
        </Tabs>
        <Divider/>
        <Box marginBottom={'24px'}/>
        {items.map((item, index) => <Comment key={item.id - index} createdAt={item.createdAt} user={item.user}
                                             text={item.text}/>)}
        </Box>
    </Paper>
})
