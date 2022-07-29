import * as React from 'react';
import {Box, Button, Paper, Typography} from '@material-ui/core';
import {PostActions} from '../../PostActions';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';
import styles from './FullPost.module.scss';
import {FC, memo, ReactElement} from "react";
import {PostType} from "../../../redux/reducers/posts/posts-types";


type FullPostProps = {
    post: PostType
}

export const FullPost: FC<FullPostProps> = memo(function FullPost({post}): ReactElement {

    const body_text = post.body.map((el) => el.data.text).slice(1).join(' ')

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
                    <Typography>
                        {body_text}
                    </Typography>
                    <Box display={'flex'}>
                        <PostActions/>
                    </Box>
                    <Box display={'flex'}>
                        <Box marginTop={'32px'} marginBottom={'32px'} flex={'0 1 100%'} display={'flex'}
                             justifyContent={'space-between'} flexWrap={'wrap'}>
                            <div className={styles.userInfo}>
                                <img
                                    src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                                    alt="Avatar"
                                />
                                <b>Donnie Darko</b>
                                <span>+1685</span>
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
