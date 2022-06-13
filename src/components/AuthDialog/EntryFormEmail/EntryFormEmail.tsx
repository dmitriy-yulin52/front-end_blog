import {Box, Button, IconButton, Link, Typography} from '@material-ui/core';
import * as React from 'react';
import {ChangeEvent, memo, ReactElement, useCallback, useState} from 'react';
import styles from './EntryFormEmail.module.scss'
import {RestoredPassword} from "../RestoredPassword/RestoredPassword";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {EntryFormSchema} from "../../../utils/Validations/validations";
import {ControllerInput} from "../RegistrationForm/RegistrationForm";

type EntryFormEmailProps = {
    openMainContent: () => void
    openRestoredPasswordForm: () => void
    is_restored_password_content: boolean
    is_entry_email_content: boolean
};


const style_icon_button = {
    padding: '3px', margin: '0px'
} as const


export function adornmentElement(inputType: boolean, handlerEditTypeInput: () => void): ReactElement {
    return <IconButton style={style_icon_button} onClick={handlerEditTypeInput}>
        {inputType ? <VisibilityIcon/> : <VisibilityOffIcon/>}
    </IconButton>
}


const margin_button = {
    marginTop: '16px'
} as const

export const EntryFormEmail = memo(function EntryFormEmail(props: EntryFormEmailProps): ReactElement {

    const {openMainContent, is_restored_password_content, is_entry_email_content, openRestoredPasswordForm} = props

    const [editTypeInput, setEditTypeInput] = useState(false)

    const {handleSubmit, control, formState,reset} = useForm({
        mode: 'onChange',
        resolver: yupResolver(EntryFormSchema),

    })

    const handlerEditTypeInput = useCallback(
        () => {
            setEditTypeInput(!editTypeInput)
        },
        [setEditTypeInput, editTypeInput],
    );

    const endAdornmentElement = adornmentElement(editTypeInput, handlerEditTypeInput)

    const onSubmit = (data: any) =>{
        console.log(data)
        reset()
    };

    return (
        <Box className={styles.wrapper}>
            {is_entry_email_content && <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name={'email'}
                        control={control}
                        defaultValue={''}
                        render={ControllerInput({
                            placeholder: 'Почта', input_type: true
                        })}
                    />
                    <Controller
                        name={'password'}
                        control={control}
                        defaultValue={''}
                        render={ControllerInput({
                            input_type: editTypeInput,
                            endAdornmentElement: endAdornmentElement,
                            placeholder: 'Пароль'
                        })}
                    />
                    <Button type={'submit'}
                            style={margin_button}
                            fullWidth
                            variant={'contained'}
                            color={'primary'}
                            disabled={!formState.isValid}
                    >Войти</Button>
                </form>

                <Box marginTop={'16px'}>
                    <Typography><Link onClick={openRestoredPasswordForm}>Забыли пароль?</Link></Typography>
                </Box>
                <Box marginTop={'8px'}>
                    <Typography>
                        <Link onClick={openMainContent}>Регистрация</Link>
                    </Typography>
                </Box>
            </>}
            {is_restored_password_content && <RestoredPassword />}
        </Box>
    );
})