import * as React from 'react';
import {Box, Button, Dialog, DialogContent, IconButton, Link, Typography} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {memo, ReactElement, useCallback, useState} from "react";
import styles from './AuthDialog.module.scss'
import {RegistrationForm} from "../RegistrationForm/RegistrationForm";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {EntryFormEmail} from "../EntryFormEmail/EntryFormEmail";

type Props = {
    openDialog: boolean
    closeDialog: () => void
};


export const AuthDialog = memo(function AuthDialog(props: Props): ReactElement {
    const [fromType, setFormType] = useState<'main' | 'email'>('main')


    const [openRegFormEmail, setRegFormEmail] = useState(false)
    const [openEntryFormEmail, setEntryFormEmail] = useState(false)
    const [visibleEntryContent, setVisibleEntryContent] = useState(false)


    const handlerSetRegForm = useCallback(() => {
        setRegFormEmail(!openRegFormEmail)
    }, [openRegFormEmail, setRegFormEmail])


    const handleVisibleEntryContent = useCallback(() => {
        setVisibleEntryContent(!visibleEntryContent)
        setRegFormEmail(!openRegFormEmail)
    }, [visibleEntryContent, setVisibleEntryContent, setRegFormEmail, openRegFormEmail])


    const onClickOpenEntryFormEmail = useCallback(() => {
        setEntryFormEmail(true)
        setRegFormEmail(false)
    }, [setEntryFormEmail, openEntryFormEmail, setRegFormEmail, openRegFormEmail])

    const onClickBackEntryFormEmail = useCallback(() => {
        setEntryFormEmail(false)
    }, [setVisibleEntryContent, visibleEntryContent])


    const onClickBackRegForm = useCallback(() => {
        setRegFormEmail(false)
        setEntryFormEmail(false)
        setVisibleEntryContent(false)
    }, [setRegFormEmail, openRegFormEmail, setEntryFormEmail, openEntryFormEmail, setVisibleEntryContent, visibleEntryContent])

    const {openDialog, closeDialog} = props

    return (
        <Dialog
            aria-labelledby="customized-dialog-title"
            open={openDialog}
        >
            <Box display={'flex'} justifyContent={'center'} height={'600px'}>
                <Box
                    width={'200px'}
                    className={styles.left_menu}
                >
                    <Box padding={'20px 0px 0px 20px'}>
                        <svg className={styles.logo} viewBox="0 0 24 25">
                            <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
                            <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                            <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
                        </svg>
                    </Box>
                </Box>
                <Box width={'400px'}>
                    {(openRegFormEmail || openEntryFormEmail) && <Box display={'flex'} justifyContent={'flex-start'}>
                        <Box className={styles.button_reg_from}
                             onClick={openEntryFormEmail ? onClickBackEntryFormEmail : handlerSetRegForm}>
                            <ChevronLeftIcon/>
                            <Box fontSize={'16px'} marginLeft={'8px'} color={'grey'}>Назад</Box>
                        </Box>
                    </Box>}
                    {!openRegFormEmail && !openEntryFormEmail && <Box display={'flex'} justifyContent={'flex-end'}>
                        <IconButton
                            onClick={closeDialog}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Box>}
                    <Box className={styles.right_menu__dialogContent}>
                        <Box marginBottom={'16px'}>
                            <Typography variant={'h5'} className={styles.right_menu__dialogContent__title}>
                                {visibleEntryContent ? 'Вход в аккаунт' : 'Регистрация'}
                            </Typography>
                        </Box>
                        {openRegFormEmail && !openEntryFormEmail &&
                            <RegistrationForm handleVisibleEntryContent={handleVisibleEntryContent}/>}
                        {openEntryFormEmail && <EntryFormEmail onClickBackRegForm={onClickBackRegForm}/>}
                        {!openRegFormEmail && !openEntryFormEmail && (<><Box display={'flex'} flexDirection={'column'}
                                                                             className={styles.right_menu__dialogContent__buttonActions}>
                            <Button
                                variant={'contained'}
                                startIcon={<MailOutlineIcon/>}
                                onClick={visibleEntryContent ? onClickOpenEntryFormEmail : handlerSetRegForm}
                            >
                                Почта
                            </Button>
                            <Button
                                fullWidth
                                variant={'contained'}
                                startIcon={<FacebookIcon/>}
                            >
                                ВКонтакте
                            </Button>
                            <Button fullWidth variant={'contained'} startIcon={<GoogleIcon/>}>Google</Button>
                        </Box>
                            <Box className={styles.button} marginTop={'16px'} display={'flex'}
                                 justifyContent={'space-between'}>
                                <Button variant={'contained'} startIcon={<MailOutlineIcon/>}/>
                                <Button variant={'contained'} startIcon={<FacebookIcon/>}/>
                                <Button variant={'contained'} startIcon={<GoogleIcon/>}/>
                            </Box></>)}
                        <Box style={{cursor: 'pointer', marginTop: '16px'}}>
                            <Typography>
                                {!openRegFormEmail && !openEntryFormEmail && !visibleEntryContent && 'Есть аккаунт? '}
                                <Link
                                    onClick={!openRegFormEmail && !openEntryFormEmail && visibleEntryContent ? () => setVisibleEntryContent(false) : () => setVisibleEntryContent(true)}>
                                    {!openRegFormEmail && !openEntryFormEmail && visibleEntryContent && 'Регистрация'}
                                    {!openRegFormEmail && !openEntryFormEmail && !visibleEntryContent && 'Войти'}
                                </Link>
                            </Typography>
                        </Box>
                        {!openRegFormEmail && !openEntryFormEmail && !visibleEntryContent && <Box marginTop={'8px'}>
                            <Typography>
                                <Link style={{cursor: 'pointer'}}>Условия использования</Link>
                            </Typography>
                        </Box>}
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
});