import * as React from 'react';
import {Box, Button, Paper, Typography} from '@material-ui/core';
import {PostActions} from '../../PostActions';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';
import styles from './FullPost.module.scss';
import {FC, memo, ReactElement, useEffect} from "react";
import {PostType} from "../../../redux/reducers/posts/posts-types";
import {ResponseUserType} from "../../../services/api/user/user-api-types";
import {Avatar} from "@mui/material";
import {useAction, usePartial} from "../../../utils/hooks/hooks-utils";
import {postsActions} from "../../../redux/reducers/posts/posts-actions";


type FullPostProps = {
    post: PostType
}

export const FullPost: FC<FullPostProps> = memo(function FullPost({post}): ReactElement {

    const onSetPostItem = useAction(usePartial(postsActions.setPostItem, post))
    const body_text = post.body.map((el) => el.data.text).slice(1).join(' ')

    useEffect(() => {
        onSetPostItem()
    }, [])


    return (
        <Paper elevation={0} className={styles.paper}>
            <Box flex={'0 1 700px'}>
                <Typography variant="h4" className={styles.title}>
                    {post.title}
                </Typography>
                <div>
                    <Typography>
                        {post.description}
                    </Typography>
                    <Typography className={styles.text} dangerouslySetInnerHTML={{__html: body_text}}/>
                    <Box display={'flex'}>
                        <PostActions/>
                    </Box>
                    <Box display={'flex'}>
                        <Box marginTop={'32px'} marginBottom={'32px'} flex={'0 1 100%'} display={'flex'}
                             justifyContent={'space-between'} flexWrap={'wrap'}>
                            <div className={styles.userInfo}>
                                <Avatar>{post.user.fullName ? post.user.fullName[0] : 'U'}</Avatar>
                                <b>{post.user.fullName}</b>
                                <span>+{post.views}</span>
                            </div>
                            <div>
                                <Button variant="contained" className="mr-15">
                                    <MessageIcon/>
                                </Button>
                                <Button variant="contained">
                                    <UserAddIcon/>
                                    <Box marginLeft={'8px'}>Подписаться</Box>
                                </Button>
                            </div>
                        </Box>
                    </Box>
                </div>
            </Box>
        </Paper>
    );
});
