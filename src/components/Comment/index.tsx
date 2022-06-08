import * as React from 'react';
import {memo, ReactElement, useCallback} from "react";
import {Typography, IconButton, MenuItem, Menu} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import styles from './Comment.module.scss';

interface CommentPostProps {
    user: {
        fullname: string;
    };
    text: string;
}

export const Comment = memo(function Comment(props: CommentPostProps):ReactElement {
    const {user, text} = props

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl, anchorEl]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl, anchorEl]);

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                    alt="Avatar"
                />
                <b>Master Oogway</b>
                <span>5 часов</span>
            </div>
            <Typography className={styles.text}>
                Суперджет это ад адский, два раза летала и оба раза прощалась с жизнью. Трясёт хуже, чем в
                копейке по разьебанной дороге
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    );
});
