import React, {PropsWithChildren} from 'react'
import {ChangeEvent, FC, FormEvent, memo, ReactElement, ReactNode, useCallback, useState} from "react";
import {Box, styled} from "@mui/material";
import {validator, ValidatorConfigType} from "../Validations/validations";


type ErrorsType = {
    [key: string]: string
}

export function useForm<T>(initialData: T, validateOnChange: boolean, validateConfig: ValidatorConfigType) {
    const [data, setData] = useState<T>(initialData);
    const [errors, setErrors] = useState<ErrorsType>({});

    const validate = useCallback((data: { [x: string]: string; }) => {
        const errors = validator(data, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }, [validateConfig, setErrors])

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors({});
        if (validateOnChange) {
            validate({[name]: value})
        }
    }, [validate, validateOnChange])

    const handleResetForm = useCallback((event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setData(initialData);
        setErrors({});
    }, [initialData]);

    return {
        data,
        setData,
        errors,
        setErrors,
        handleInputChange,
        validate,
        handleResetForm,
    }
}


type FromType = {
    data?: {
        [key: string]: any
    },
    children: ReactNode,
    errors?: {
        [key: string]: any;
    },
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    props?: {
        [key: string]: any
    }
}

type FormItemProps = {
    name: string;
    data?: {
        [key: string]: any;
    };
    value?: string;
    error?: string;
    type?: string;
    props?: {
        [key: string]: any;
    };
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


// eslint-disable-next-line react/display-name
export const Form: FC<FromType> = memo((props): ReactElement => {
    const {data, children, errors, onChange, ...rest} = props;

    const clonedElements = React.Children.map(children, child => {
        const item = child as ReactElement<PropsWithChildren<FormItemProps>>;
        const childType = typeof child;
        let config: FormItemProps = {name: ''};
        if (childType === 'object' ||
            (childType === 'function' && item.props.type !== 'submit' && item.props.type !== 'button')) {
            config = {
                ...item.props,
                data,
                onChange,
                value: data?.[item.props.name],
                error: errors?.[item.props.name],
            }
        }
        return React.cloneElement(item, config);
    })

    return <ContainerBox
        component={'form'}
        {...rest}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'calc(100vh - 64px)'}
    >
        {clonedElements}
    </ContainerBox>

})

const ContainerBox = styled(Box)`
    div{
      margin-bottom: 8px
    }
`