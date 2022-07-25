import * as React from 'react';
import {ChangeEvent, memo, ReactElement, useCallback, useMemo, useState} from "react";
import {Box, Button, IconButton, Input, InputAdornment, TextField} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import styles from './AddCommentForm.module.scss'
import clsx from "clsx";


type AddCommentFormProps = {};
export const AddCommentForm = memo(function AddCommentForm(props: AddCommentFormProps): ReactElement {

    const [focusEffect, setFocusEffect] = useState(false)
    const [blurEffect, setBlurEffect] = useState(false)
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


    const onClickSubmit = useCallback(() => {
        setText('')
        setFocusEffect(false)
    }, [setText, text])


    return (
        <div className={clsx(styles.form, {
            [styles.focus_effect]: focusEffect && blurEffect,
            [styles.blur_effect]: !blurEffect
        })}>

            <Input
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
                <Button onClick={onClickSubmit} variant={'contained'} color={'primary'}>Отправить</Button>

            </Box>}
        </div>
    );
});

