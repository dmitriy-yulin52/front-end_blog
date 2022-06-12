import {Box, Button, Link, Typography} from '@material-ui/core';
import * as React from 'react';
import {ChangeEvent, memo, ReactElement, useCallback, useState} from "react";
import {UniversalTextField} from "../../utils/MaterialComponent";
import styles from './EntryFormEmail.module.scss'
import {RestoredPassword} from "../RestoredPassword/RestoredPassword";

type EntryFormEmailProps = {
    openMainContent: () => void
    openRestoredPasswordForm: () => void
    is_restored_password_content:boolean
    is_entry_email_content:boolean
};


export const EntryFormEmail = memo(function EntryFormEmail(props: EntryFormEmailProps): ReactElement {

    const {openMainContent,is_restored_password_content,is_entry_email_content,openRestoredPasswordForm} = props

    const [visibleRestoredPassword,setVisibleRestoredPassword ] = useState(false)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    const onChangeLoginHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }, [login, setLogin])
    const onChangePasswordHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }, [password, setPassword])




    return (
        <Box className={styles.wrapper}>
            {is_entry_email_content && <>
                    <Box>
                        <UniversalTextField value={login} onChangeHandler={onChangeLoginHandler} placeholder={'Почта'}/>
                        <UniversalTextField value={password} onChangeHandler={onChangePasswordHandler}
                                            placeholder={'Пароль'}/>
                    </Box>
                    <Button fullWidth variant={'contained'}
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
            {is_restored_password_content && <RestoredPassword handlerCloseRestoredForm={()=>{}}/>}
        </Box>
    );
})