import * as React from 'react';
import {Box, Button, Link, Typography} from "@material-ui/core";
import {UniversalTextField} from "../../utils/MaterialComponent";
import {ChangeEvent, useCallback, useState} from 'react';

type RegistrationFormProps = {
    handleVisibleEntryContent:()=>void
};


const MAX_LENGTH = 30

export const RegistrationForm = (props: RegistrationFormProps) => {

    const {handleVisibleEntryContent}=props

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const countLimit = MAX_LENGTH - login.length
    const limit = login.length >= MAX_LENGTH ? '0' : String(countLimit)

    const handlerSetLogin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }, [setLogin, login])
    const handlerSetEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [setEmail, email])
    const handlerSetPassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }, [setPassword, password])


    return (
        <Box>
            <Box>
                <UniversalTextField
                    value={login}
                    onChangeHandler={handlerSetLogin}
                    placeholder={'Имя и фамилия'}
                    endAdornmentElement={limit}

                />
                <UniversalTextField
                    value={email}
                    onChangeHandler={handlerSetEmail}
                    placeholder={'Почта'}
                />
                <UniversalTextField
                    value={password}
                    onChangeHandler={handlerSetPassword}
                    placeholder={'Пароль'}
                />
            </Box>
                <Button style={{marginTop:'32px'}} fullWidth variant={'contained'} color={'primary'}>Зарегистрироваться</Button>

            <Box marginTop={'16px'}>
                <Typography>Есть аккаунт? <Link style={{cursor:'pointer'}} onClick={handleVisibleEntryContent}>Войти</Link></Typography>
            </Box>
            <Box marginTop={'8px'}>
                <Typography>
                    <Link style={{cursor:'pointer'}}>Условия использования</Link>
                </Typography>
            </Box>
        </Box>
    );
};