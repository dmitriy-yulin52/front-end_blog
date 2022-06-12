import {Box, Button, IconButton, InputAdornment, Link, Typography} from '@material-ui/core';
import * as React from 'react';
import {ChangeEvent, memo, ReactElement, useCallback, useMemo, useState} from "react";
import {UniversalTextField} from "../../../utils/MaterialComponent";
import styles from './EntryFormEmail.module.scss'
import {RestoredPassword} from "../RestoredPassword/RestoredPassword";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {JSXElement} from "@babel/types";

type EntryFormEmailProps = {
    openMainContent: () => void
    openRestoredPasswordForm: () => void
    is_restored_password_content: boolean
    is_entry_email_content: boolean
};


const style_icon_button = {
    padding: '3px', margin: '0px'
} as const


export function adornmentElement(inputType:boolean,handlerEditTypeInput:()=>void):ReactElement {
    return <IconButton style={style_icon_button} onClick={handlerEditTypeInput}>
        {inputType ? <VisibilityIcon/> : <VisibilityOffIcon/>}
    </IconButton>
}



const margin_button= {
    marginTop:'16px'
}as const

export const EntryFormEmail = memo(function EntryFormEmail(props: EntryFormEmailProps): ReactElement {

    const {openMainContent, is_restored_password_content, is_entry_email_content, openRestoredPasswordForm} = props

    const [editTypeInput, setEditTypeInput] = useState(false)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    const onChangeLoginHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }, [login, setLogin])
    const onChangePasswordHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }, [password, setPassword])


    const handlerEditTypeInput = useCallback(
        () => {
            setEditTypeInput(!editTypeInput)
        },
        [setEditTypeInput, editTypeInput],
    );

    const endAdornmentElement = adornmentElement(editTypeInput,handlerEditTypeInput)


    return (
        <Box className={styles.wrapper}>
            {is_entry_email_content && <>
                <Box>
                    <UniversalTextField value={login} onChangeHandler={onChangeLoginHandler} placeholder={'Почта'}/>
                    <UniversalTextField
                        value={password}
                        input_type={editTypeInput ? 'text' : 'password'}
                        onChangeHandler={onChangePasswordHandler}
                        placeholder={'Пароль'}
                        endAdornmentElement={endAdornmentElement}
                    />
                </Box>
                <Button style={margin_button} fullWidth variant={'contained'}
                        color={'primary'}>Войти</Button>
                <Box marginTop={'16px'}>
                    <Typography><Link onClick={openRestoredPasswordForm}>Забыли пароль?</Link></Typography>
                </Box>
                <Box marginTop={'8px'}>
                    <Typography>
                        <Link onClick={openMainContent}>Регистрация</Link>
                    </Typography>
                </Box>
            </>}
            {is_restored_password_content && <RestoredPassword handlerCloseRestoredForm={() => {
            }}/>}
        </Box>
    );
})