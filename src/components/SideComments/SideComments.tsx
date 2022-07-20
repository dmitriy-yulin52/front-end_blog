import React, {memo, ReactElement, useCallback, useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import styles from './SideComments.module.scss';
import {Box, IconButton, Slide, Typography} from "@material-ui/core";
import Link from "next/link";

const items = [
    {
        user: {
            id: 112,
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            id: 1234,
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        user: {
            id: 2,
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            id: 123,
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        user: {
            id: 2234,
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я ffffffffffffffffffffffffffffffffffffffffffffffперекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            id: 1554,
            title: 'Какая у вас дома ванна?',
        },
    },
];

interface CommentItemProps {
    user: {
        id: number
        fullname: string;
    };
    text: string;
    post: {
        id: number
        title: string;
    };
}


const CommentItem = memo(function SideComments(props: CommentItemProps): ReactElement {
    const {user, text, post} = props
    return (
        <Box className={styles.commentItem}>
            <Box display={'flex'} alignItems={'center'}>
                <img className={styles.img} src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                     alt={'User avatar'}/>
                <Link href={`/profile/${user.id}`}>
                    <a className={styles.link}>
                        <Typography>{user.fullname}</Typography>
                    </a>
                </Link>
            </Box>
            <Box fontSize={'16px'} margin={'8px 0px'}>{text}</Box>
            <Link href={`/news/${user.id}`}>
                <a >
                    <Box fontSize={'15px'} fontWeight={500}>{post.title}</Box>
                </a>
            </Link>
        </Box>
    );
});


interface SideCommentsProps {
    onClick: () => void
}

export const SideComments = memo(function SideComments(props: SideCommentsProps): ReactElement {

    const {onClick} = props


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
                    <CommentItem key={obj.user.id - index} {...obj} />
                ))}
            </Box>
        </>
    );
});
