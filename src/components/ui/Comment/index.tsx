import * as React from 'react';
import {memo, ReactElement, useCallback} from "react";
import {Typography, IconButton, MenuItem, Menu} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import styles from './Comment.module.scss';
import {Avatar} from "@mui/material";
import {ResponseUserType} from "../../../services/api/user/user-api-types";
import {commentsActions} from "../../../redux/reducers/comments/comments-actions";
import {useAction, usePartial} from "../../../utils/hooks/hooks-utils";

interface CommentPostProps {
    user: ResponseUserType;
    text: string;
    createdAt: string
    curUserId: number
    id: number
}

const style = {
    marginRight: '8px'
} as const

export const Comment = memo(function Comment(props: CommentPostProps): ReactElement {
    const {user, text, createdAt, curUserId, id} = props

    const onRemoveCommit = useAction(usePartial(commentsActions.removeCommentTC, id))

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl, anchorEl]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl, anchorEl]);

    const onClickRemoveComment = async () => {
        try {
            await onRemoveCommit()
        } catch (e) {
            console.warn(e)
        } finally {
            handleClose()
        }
    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <Avatar style={style}>{user.fullName ? user.fullName[0] : 'U'}</Avatar>
                <b>{user.fullName ? user.fullName : 'U'}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>

            {user.id === curUserId && (
                <>
                    <IconButton onClick={handleClick}>
                        <MoreIcon/>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        elevation={2}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        keepMounted>
                        <MenuItem onClick={onClickRemoveComment}>Удалить</MenuItem>
                        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                    </Menu>
                </>
            )}
        </div>
    );
});
