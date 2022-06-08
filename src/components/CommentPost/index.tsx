import * as React from 'react';
import {memo, useCallback} from "react";
import {IconButton, Menu, MenuItem, Paper, Typography} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import styles from './CommentPost.module.scss';

interface CommentPostProps {
    user: {
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
}

const root_style = {
    root: styles.paper
} as const

export const CommentPost = memo(function CommentPost(props: CommentPostProps) {

    const {user, text, post} = props

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl, anchorEl]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl, anchorEl]);

    return (
        <Paper elevation={0} className="p-20" classes={root_style}>
            <Typography variant="h6" className={styles.title}>
                <a href="src/components/CommentPost/index#">{post.title}</a>
                <IconButton onClick={handleClick}>
                    <MoreVertIcon/>
                </IconButton>
            </Typography>
            <Typography className="mt-10 mb-15">{text}</Typography>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                elevation={3}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </Paper>
    );
});
