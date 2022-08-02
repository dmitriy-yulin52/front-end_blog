import React, {memo, ReactElement, useEffect, useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import styles from './SideComments.module.scss';
import {Box, IconButton, Typography} from "@material-ui/core";
import Link from "next/link";
import {CommentItemType} from "../../../services/api/comment/comment-api-types";
import {GlobalApi} from "../../../services/api";
import {Avatar} from "@mui/material";


interface CommentItemProps {
    text: string;
    title: string;
    fullName: string
    createdPost: string
    userId: number
    postId: number
}

const style = {
    marginRight: '8px'
} as const

const CommentItem = memo(function SideComments(props: CommentItemProps): ReactElement {

    const {fullName, text, title, userId, createdPost, postId} = props
    return (
        <Box className={styles.commentItem}>
            <Box display={'flex'} alignItems={'center'}>
                <Avatar style={style}>{text?.[0] ?? 'U'}</Avatar>
                <Link href={`/profile/${userId}`}>
                    <a className={styles.link}>
                        <Typography>{fullName}</Typography>
                    </a>

                </Link>
            </Box>
            <Typography>{createdPost}</Typography>
            <Box fontSize={'16px'} margin={'8px 0px'}>{text}</Box>
            <Link href={`/news/${postId}`}>
                <a>
                    <Box fontSize={'15px'} fontWeight={500}>{title}</Box>
                </a>
            </Link>
            <Box fontSize={'15px'} fontWeight={500}>Пост # {postId}</Box>

        </Box>
    );
});


interface SideCommentsProps {
    onClick: () => void
}

export const SideComments = memo(function SideComments(props: SideCommentsProps): ReactElement {

    const {onClick} = props
    const [items, setItems] = useState<CommentItemType[]>([])

    console.log(items, 'items')

    useEffect(() => {
        (async () => {
            const comments: CommentItemType[] = await GlobalApi().comment.getAll()
            setItems(comments)
        })()
    }, [])


    return (
        <>
            <Box position={'sticky'} top={'80px'} margin={'0px 0px 8px 40px'}>
                <Box display={'flex'} alignItems={'center'} marginBottom={'16px'}>
                    <Typography variant={'h5'}>
                        Комментарии
                    </Typography>
                    <IconButton onClick={onClick}>
                        <ArrowRightIcon/>
                    </IconButton>
                </Box>
                {items.map((obj, index) => (
                    <CommentItem
                        key={obj.user.id - index}
                        fullName={obj.user.fullName}
                        userId={obj.user.id}
                        title={obj.post.title}
                        text={obj.text}
                        createdPost={obj.create}
                        postId={obj.post.id}
                    />
                ))}
            </Box>
        </>
    );
});
