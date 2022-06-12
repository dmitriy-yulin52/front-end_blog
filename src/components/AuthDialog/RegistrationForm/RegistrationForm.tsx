import * as React from 'react';
import {Box, Button, FormGroup, Input, Link, Typography} from "@material-ui/core";
import {UniversalTextField} from "../../../utils/MaterialComponent";
import {ChangeEvent, useCallback, useState} from 'react';
import {adornmentElement} from "../EntryFormEmail/EntryFormEmail";
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema} from "../../../utils/LoginSchema/LoginSchema";
import {TextField} from "@mui/material";

type RegistrationFormProps = {
    openEntryContent: () => void
};


const MAX_LENGTH = 30


const margin_button = {
    marginTop: '16px'
} as const

export const RegistrationForm = (props: RegistrationFormProps) => {


    const {openEntryContent} = props

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [editTypeInput, setEditTypeInput] = useState(false)

    const {handleSubmit, register, control} = useForm({
        mode: 'onSubmit',
        shouldFocusError:true,
        resolver: yupResolver(LoginSchema)
    })


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


    const handlerEditTypeInput = useCallback(
        () => {
            setEditTypeInput(!editTypeInput)
        },
        [setEditTypeInput, editTypeInput],
    );

    const endAdornmentElement = adornmentElement(editTypeInput, handlerEditTypeInput)


    const onSubmit = (data: any) => console.log(data);


    return (
        <Box>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="login"
                        control={control}
                        defaultValue={login}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <UniversalTextField
                                placeholder="Имя и фамилия"
                                value={value}
                                onChangeHandler={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                input_type="text"
                                endAdornmentElement={value.length >= 30 ? '0' : String(30 - value.length)}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={email}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <UniversalTextField
                                placeholder="Почта"
                                value={value}
                                onChangeHandler={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                input_type="email"
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue={password}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <UniversalTextField
                                placeholder="Пароль"
                                value={value}
                                onChangeHandler={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                input_type={editTypeInput ? 'text' : 'password'}
                                endAdornmentElement={endAdornmentElement}
                            />
                        )}
                    />
                    <Button
                        type={'submit'}
                        style={margin_button}
                        fullWidth
                        variant={'contained'}
                        color={'primary'}

                    >Зарегистрироваться</Button>
                </form>
            </Box>
            <Box marginTop={'16px'}>
                <Typography>Есть аккаунт? <Link style={{cursor: 'pointer'}}
                                                onClick={openEntryContent}>Войти</Link></Typography>
            </Box>
            <Box marginTop={'8px'} position={'absolute'} bottom={20}>
                <Typography>
                    <Link>Условия использования</Link>
                </Typography>
            </Box>
        </Box>
    );
};