import * as React from 'react';
import {Box} from "@material-ui/core";
import {UniversalTextField} from "../../utils/MaterialComponent";
import {ChangeEvent, useCallback, useState} from 'react';

type RegistrationFormProps = {};


const MAX_LENGTH = 30

export const RegistrationForm = (props: RegistrationFormProps) => {

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
    );
};