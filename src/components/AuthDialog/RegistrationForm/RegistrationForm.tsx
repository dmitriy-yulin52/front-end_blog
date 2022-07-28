import * as React from 'react';
import {memo, ReactElement, useCallback, useState} from 'react';
import {Box, Button, Link, Typography} from "@material-ui/core";
import {UniversalTextField} from "../../../utils/MaterialComponent";
import {adornmentElement} from "../EntryFormEmail/EntryFormEmail";
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import {RegistrationFormSchema} from "../../../utils/Validations/validations";
import {CreateUserDto} from "../../../services/api/user/user-api-types";
import {useAction} from "../../../utils/hooks/hooks-utils";
import {authActions} from "../../../redux/reducers/auth/auth-actions";

type RegistrationFormProps = {
    openEntryContent: () => void
};

const margin_button = {
    marginTop: '16px'
} as const


function loginEndAdornmentElement(value: string): string {
    return value.length >= 30 ? '0' : String(30 - value.length)
}

export const RegistrationForm = memo(function RegistrationForm(props: RegistrationFormProps): ReactElement {
    const {openEntryContent} = props

    const [editTypeInput, setEditTypeInput] = useState(false)
    const {handleSubmit, control, formState, reset} = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegistrationFormSchema),

    })

    const onRegister = useAction(authActions.register)

    const handlerEditTypeInput = useCallback(
        () => {
            setEditTypeInput(!editTypeInput)
        },
        [setEditTypeInput, editTypeInput],
    );

    const onRegisterHandler = useCallback((dto: CreateUserDto) => {
        onRegister(dto)
    }, [onRegister])

    const onSubmit = useCallback((dto: CreateUserDto) => {
        onRegisterHandler(dto)
    }, [onRegisterHandler]);

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
});


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
