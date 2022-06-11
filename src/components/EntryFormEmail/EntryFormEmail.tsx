import {Box, Button, Link, Typography} from '@material-ui/core';
import * as React from 'react';
import {memo, ReactElement, useState} from "react";
import {UniversalTextField} from "../../utils/MaterialComponent";

type EntryFormEmailProps = {
    onClickBackRegForm:()=>void
};
export const EntryFormEmail = memo(function EntryFormEmail(props: EntryFormEmailProps): ReactElement {

    const {onClickBackRegForm}=props

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    return (
        <Box>
            <Box>
                <UniversalTextField value={login} onChangeHandler={() => {
                }} placeholder={'Почта'}/>
                <UniversalTextField value={password} onChangeHandler={() => {
                }} placeholder={'Пароль'}/>
            </Box>
            <Button style={{marginTop: '32px'}} fullWidth variant={'contained'}
                    color={'primary'}>Войти</Button>
             <Box marginTop={'16px'}>
                <Typography><Link style={{cursor:'pointer'}}>Забыли пароль?</Link></Typography>
            </Box>
              <Box marginTop={'8px'}>
                <Typography>
                    <Link style={{cursor:'pointer'}} onClick={onClickBackRegForm}>Регистрация</Link>
                </Typography>
            </Box>
        </Box>
    );
})