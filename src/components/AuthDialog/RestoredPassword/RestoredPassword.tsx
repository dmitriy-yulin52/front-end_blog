import * as React from 'react';
import {ChangeEvent, ReactElement, useCallback, useState} from "react";
import {UniversalTextField} from "../../../utils/MaterialComponent";
import {Box, Button, Link, Typography} from "@material-ui/core";

type RestoredPasswordProps = {
};


export const RestoredPassword = (props: RestoredPasswordProps): ReactElement => {

    const [email, setEmail] = useState('')


    const onChangeEmailHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [email, setEmail])

    return (
        <Box>
            <UniversalTextField value={email} onChangeHandler={onChangeEmailHandler} placeholder={'Почта'}/>
            <Button fullWidth variant={'contained'}
                    color={'primary'}>Отправить</Button>
             <Box marginTop={'8px'}>
                <Typography>
                    <Link>Регистрация</Link>
                </Typography>
            </Box>
        </Box>
    );
};