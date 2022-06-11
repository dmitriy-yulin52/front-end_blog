import {Box, Button, Link, Typography} from '@material-ui/core';
import * as React from 'react';
import {ChangeEvent, memo, ReactElement, useCallback, useState} from "react";
import {UniversalTextField} from "../../utils/MaterialComponent";
import styles from './EntryFormEmail.module.scss'
import {RestoredPassword} from "../RestoredPassword/RestoredPassword";

type EntryFormEmailProps = {
    onClickBackRegForm: () => void
    openRestoredFormPassword:boolean
    onClickOpenRestoredFrom:()=>void
    handlerCloseRestoredForm:()=>void
};


export const EntryFormEmail = memo(function EntryFormEmail(props: EntryFormEmailProps): ReactElement {

    const {onClickBackRegForm,openRestoredFormPassword,onClickOpenRestoredFrom,handlerCloseRestoredForm} = props


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
            {!openRestoredFormPassword && (
                <>
                    <Box>
                        <UniversalTextField value={login} onChangeHandler={onChangeLoginHandler} placeholder={'Почта'}/>
                        <UniversalTextField value={password} onChangeHandler={onChangePasswordHandler}
                                            placeholder={'Пароль'}/>
                    </Box>
                    <Button fullWidth variant={'contained'}
                            color={'primary'}>Войти</Button>
                    <Box marginTop={'16px'}>
                        <Typography><Link onClick={onClickOpenRestoredFrom}>Забыли пароль?</Link></Typography>
                    </Box>
                    <Box marginTop={'8px'}>
                        <Typography>
                            <Link onClick={onClickBackRegForm}>Регистрация</Link>
                        </Typography>
                    </Box>
                </>
            )}
            {openRestoredFormPassword && <RestoredPassword handlerCloseRestoredForm={handlerCloseRestoredForm}/>}
        </Box>
    );
})