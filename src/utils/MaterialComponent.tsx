import * as React from 'react';
import {Box, Input, InputAdornment, TextField, Typography} from "@material-ui/core";
import styles from './MaterialComponent.module.scss'
import {ChangeEvent, memo, ReactElement, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import clsx from "clsx";
import {FieldValues, UseFormRegister, UseFormRegisterReturn} from "react-hook-form";
import {SpanError} from "./SpanError/SpanError";

type UniversalTextFieldProps = {
    placeholder: string
    value: string
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    endAdornmentElement?: string | ReactElement
    input_type?: string
    register?: any
    name?: string
    error?: boolean
    helperText?: string | null
};
export const UniversalTextField = memo(function UniversalTextField(props: UniversalTextFieldProps): ReactElement {

    const {placeholder, value, onChangeHandler, endAdornmentElement, input_type, name, error, helperText} = props

    const [focus_effect, set_focus_effect] = useState(false)

    const handlerFocusEffect = useCallback(() => {
        set_focus_effect(!focus_effect)
    }, [set_focus_effect, focus_effect])


    const useAdornmentElement = useMemo(() => {
        return <InputAdornment position="end">
            {endAdornmentElement}
        </InputAdornment>
    }, [endAdornmentElement]);



    return (
        <>
            <Input
                error={error}
                name={name}
                value={value}
                type={input_type}
                onFocus={handlerFocusEffect}
                onBlur={handlerFocusEffect}
                onChange={onChangeHandler}
                className={clsx(styles.universal_text_field, {
                    [styles.universal_text_field__focus]: focus_effect && !error,
                    [styles.error]: error
                })}
                placeholder={placeholder}
                endAdornment={endAdornmentElement ? useAdornmentElement : null}
            />
            {helperText && <SpanError helperText={helperText} error={error}/>}
        </>

    );
});