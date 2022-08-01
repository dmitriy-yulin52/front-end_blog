import * as React from 'react';
import {ChangeEvent, memo, ReactElement, useCallback, useState} from 'react';
import {Box, Button, Input} from "@material-ui/core";
import styles from './AddCommentForm.module.scss'
import clsx from "clsx";
import {GlobalApi} from "../../../services/api";
import {CommentItemType} from "../../../services/api/comment/comment-api-types";


type AddCommentFormProps = {
    postId: number
    setComment: (comment: CommentItemType) => void
};
export const AddCommentForm = memo(function AddCommentForm(props: AddCommentFormProps): ReactElement {

    const {postId, setComment} = props

    const [focusEffect, setFocusEffect] = useState(false)
    const [blurEffect, setBlurEffect] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [text, setText] = useState('')


    const handleSetClicked = useCallback(() => {
        setFocusEffect(true)
        setBlurEffect(true)
    }, [setFocusEffect, setBlurEffect, blurEffect, focusEffect])

    const handleSetFocusEffect = useCallback(() => {
        setBlurEffect(false)
    }, [setBlurEffect, blurEffect])


    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }, [text, setText])


    const onClickSubmit = async () => {
        try {
            setIsLoading(true)
            const comment = await GlobalApi().comment.create({
                postId, text
            })
            setComment(comment)
            setFocusEffect(false)
            setText('')
        } catch (e) {
            console.warn(e, 'AddCommentForm')
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <div className={clsx(styles.form, {
            [styles.focus_effect]: focusEffect && blurEffect,
            [styles.blur_effect]: !blurEffect
        })}>

            <Input
                disabled={isLoading}
                value={text}
                onChange={onChangeHandler}
                onFocus={handleSetClicked}
                onBlur={handleSetFocusEffect}
                multiline
                minRows={focusEffect ? 5 : 1}
                fullWidth
                placeholder={'Написать комментарий...'}
                className={styles.input}
            />
            {focusEffect && <Box display={'flex'} justifyContent={'flex-end'}>
                <Button disabled={isLoading} onClick={onClickSubmit} variant={'contained'}
                        color={'primary'}>Отправить</Button>

            </Box>}
        </div>
    );
});

