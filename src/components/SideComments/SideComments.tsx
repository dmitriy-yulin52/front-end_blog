import React, {memo, ReactElement, useCallback, useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import styles from './SideComments.module.scss';
import {Box, IconButton, Slide, Typography} from "@material-ui/core";

const items = [
    {
        user: {
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        user: {
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        user: {
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
];

interface CommentItemProps {
    user: {
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
}


const CommentItem = memo(function SideComments(props: CommentItemProps): ReactElement {
    const {user, text, post} = props
    return (
        <Box className={styles.commentItem}>
            <Box display={'flex'} alignItems={'center'}>
                <img className={styles.img} src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"/>
                <a href="src/components/SideComments/index#CommentItem.tsx">
                    <Typography>{user.fullname}</Typography>
                </a>
            </Box>
            <Box fontSize={'16px'} margin={'8px 0px'}>{text}</Box>
            <a href="src/components/SideComments/index#CommentItem.tsx">
                <Box fontSize={'15px'} fontWeight={500}>{post.title}</Box>
            </a>
        </Box>
    );
});


interface SideCommentsProps {
    onClick:()=> void
}

export const SideComments = memo(function SideComments(props:SideCommentsProps):ReactElement {

    const {onClick}=props



    return (
        <>
            {/*{!transition && <Box display={'flex'} justifyContent={'flex-end'}>*/}
            {/*    <IconButton onClick={handlerClick}>*/}
            {/*    <ArrowRightIcon/>*/}
            {/*</IconButton>*/}
            {/*</Box>}*/}

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
                        <CommentItem key={index} {...obj} />
                    ))}
                </Box>
        </>
    );
});
