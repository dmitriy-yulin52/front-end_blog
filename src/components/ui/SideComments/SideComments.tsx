import React, {memo, ReactElement} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import styles from './SideComments.module.scss';
import {Box, IconButton, Typography} from "@material-ui/core";
import Link from "next/link";
import {useComments} from "../../../utils/hooks/useComments";


interface CommentItemProps {
    text: string;
    title: string;
    fullName: string
    userId: number
}

const CommentItem = memo(function SideComments(props: CommentItemProps): ReactElement {

    const {fullName, text, title,userId} = props
    return (
        <Box className={styles.commentItem}>
            <Box display={'flex'} alignItems={'center'}>
                <img className={styles.img} src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                     alt={'User avatar'}/>

                <Link href={`/profile/${userId}`}>
                    <a className={styles.link}>
                        <Typography>{fullName}</Typography>
                    </a>
                </Link>
            </Box>
            <Box fontSize={'16px'} margin={'8px 0px'}>{text}</Box>
            <Link href={`/news/${userId}`}>
                <a>
                    <Box fontSize={'15px'} fontWeight={500}>{title}</Box>
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
    const {comments} = useComments()


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
                {comments.map((obj, index) => (
                    <CommentItem
                        key={obj.user.id - index}
                        fullName={obj.user.fullName}
                        userId={obj.user.id}
                        title={obj.post.title}
                        text={obj.text}
                    />
                ))}
            </Box>
        </>
    );
});
