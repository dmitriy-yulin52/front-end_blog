import * as React from 'react';
import {setCookie} from 'nookies';
import {Box, Button, FormGroup, Input, Link, Typography} from "@material-ui/core";
import {UniversalTextField} from "../../../utils/MaterialComponent";
import {ChangeEvent, memo, ReactElement, useCallback, useState} from 'react';
import {adornmentElement} from "../EntryFormEmail/EntryFormEmail";
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import {RegistrationFormSchema} from "../../../utils/Validations/validations";
import {UserApi} from "../../../services/api";
import {CreateUserDto} from "../../../services/api/types";
import axios from "axios";
import {useDispatch} from "react-redux";
import {snackbarActions} from "../../../redux/reducers/snackbar/snackbar-actions";

type RegistrationFormProps = {
    openEntryContent: () => void
};


const margin_button = {
    marginTop: '16px'
} as const


function loginEndAdornmentElement(value: string): string {
    return value.length >= 30 ? '0' : String(30 - value.length)
}

export const RegistrationForm = (props: RegistrationFormProps) => {
    const {openEntryContent} = props
    const dispatch = useDispatch()

    const [editTypeInput, setEditTypeInput] = useState(false)
    const {handleSubmit, control, formState} = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegistrationFormSchema),

    })

    const handlerEditTypeInput = useCallback(
        () => {
            setEditTypeInput(!editTypeInput)
        },
        [setEditTypeInput, editTypeInput],
    );


    const onSubmit = useCallback(async (dto: CreateUserDto) => {
        try {
            const data = await UserApi.register(dto)
            console.log(data, 'data')
            setCookie(null, 'authToken', data.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
        } catch (e) {
            dispatch(snackbarActions.open())
            dispatch(snackbarActions.setMessage(e.response.data.message))
        }
    }, [UserApi,snackbarActions]);

    const endAdornmentElement = adornmentElement(editTypeInput, handlerEditTypeInput)

    return (
        <Box>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="fullName"
                        control={control}
                        defaultValue={''}
                        render={ControllerInput({
                            placeholder: 'Имя и фамилия',
                            loginEndAdornmentElement,
                            input_type: true
                        })}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={''}
                        render={ControllerInput({placeholder: 'Почта', input_type: true})}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue={''}
                        render={
                            ControllerInput({
                                input_type: editTypeInput,
                                endAdornmentElement: endAdornmentElement,
                                placeholder: 'Пароль'
                            })
                        }
                    />
                    <Button
                        type={'submit'}
                        style={margin_button}
                        fullWidth
                        variant={'contained'}
                        color={'primary'}
                        disabled={!formState.isValid || formState.isSubmitting}
                    >Зарегистрироваться</Button>
                </form>
            </Box>
            <Box marginTop={'16px'}>
                <Typography>Есть аккаунт? <Link
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


interface ControllerInputType {
    input_type?: boolean,
    endAdornmentElement?: string | ReactElement
    placeholder?: string
    loginEndAdornmentElement?: (value: string) => string
}

export function ControllerInput(props: ControllerInputType) {

    const {
        input_type,
        endAdornmentElement,
        placeholder,
        loginEndAdornmentElement
    } = props

    // eslint-disable-next-line react/display-name
    return (register: any) => {
        const {field, fieldState} = register
        return <UniversalTextFieldImpl
            placeholder={placeholder}
            value={field.value}
            onChangeHandler={field.onChange}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : null}
            input_type={input_type ? 'text' : 'password'}
            endAdornmentElement={loginEndAdornmentElement ? loginEndAdornmentElement(field.value) : endAdornmentElement}
        />
    }
}


const UniversalTextFieldImpl = memo(UniversalTextField) as typeof UniversalTextField
