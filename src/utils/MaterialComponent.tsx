import * as React from 'react';
import {Input, InputAdornment, TextField} from "@material-ui/core";
import styles from './MaterialComponent.module.scss'
import {ChangeEvent, memo, ReactElement, ReactNode, useCallback, useMemo, useState} from "react";
import clsx from "clsx";

type UniversalTextFieldProps = {
    placeholder: string
    value: string
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    focusEffect?: boolean
    endAdornmentElement?: string | number | ReactNode
    endAdornment?: any
    input_type?:string
};
export const UniversalTextField = memo(function UniversalTextField(props: UniversalTextFieldProps): ReactElement {

    const {placeholder, value, onChangeHandler, focusEffect = false, endAdornmentElement,input_type} = props

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
        <Input
            value={value}
            type={input_type}
            onFocus={handlerFocusEffect}
            onBlur={handlerFocusEffect}
            onChange={onChangeHandler}
            className={clsx(styles.universal_text_field, {
                [styles.universal_text_field__focus]: focus_effect
            })}
            placeholder={placeholder}
            endAdornment={endAdornmentElement ? useAdornmentElement : null}
        />
    );
});