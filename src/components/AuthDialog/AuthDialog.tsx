import * as React from 'react';
import {Box, Button, Dialog, DialogContent, IconButton, Link, Typography} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {memo, ReactElement, useCallback, useEffect, useState, MouseEvent} from "react";
import styles from './AuthDialog.module.scss'
import {RegistrationForm} from "./RegistrationForm/RegistrationForm";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {EntryFormEmail} from "./EntryFormEmail/EntryFormEmail";
import {ResponseUserMeType, ResponseUserType} from "../../services/api/user/user-api-types";

type Props = {
    openDialog: boolean
    closeDialog: () => void
    isAuth: boolean
    user: ResponseUserType & ResponseUserMeType | null
};


export const AuthDialog = memo(function AuthDialog(props: Props): ReactElement {

    const {openDialog, closeDialog, isAuth, user} = props

    const [formType, setFormType] = useState<'main_content' | 'email_form' | 'restored_password_form' | 'entry_content' | 'entry_email_form'>('main_content')

    const is_main_content: boolean = formType == 'main_content'
    const is_entry_content: boolean = formType == 'entry_content'
    const is_email_content: boolean = formType == 'email_form'
    const is_entry_email_content: boolean = formType == 'entry_email_form'
    const is_restored_password_content: boolean = formType == 'restored_password_form'


    const openEmailForm = useCallback(() => {
        setFormType('email_form')
    }, [setFormType])

    const handlerEntryFormType = useCallback(
        () => {
            setFormType('entry_content')
        },
        [setFormType],
    );

    const openMainContent = useCallback(
        () => {
            setFormType('main_content')
        },
        [setFormType],
    );

    const openEntryEmailForm = useCallback(() => {
        setFormType('entry_email_form')
    }, [setFormType])

    const openRestoredPasswordForm = useCallback(
        () => {
            setFormType('restored_password_form')
        },
        [setFormType],
    );

    const onCloseDialogHandler = useCallback(() => {
        closeDialog()
        openMainContent()
    }, [closeDialog, openMainContent])

    useEffect(() => {
        if (isAuth) {
            if (!user) {
                onCloseDialogHandler()
            }
        }
    }, [isAuth])

    return (
        <Dialog
            aria-labelledby="customized-dialog-title"
            open={openDialog}
            onClose={closeDialog}
        >
            <Box display={'flex'} justifyContent={'center'} height={'600px'} position={'relative'}
            >
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
                    {(is_email_content || is_entry_email_content || is_restored_password_content) &&
                        <Box display={'flex'} justifyContent={'flex-start'}>
                            <Box className={styles.button_reg_from}
                                 onClick={is_email_content ? openMainContent : is_entry_email_content ? handlerEntryFormType : is_restored_password_content ? openEntryEmailForm : null}>
                                <ChevronLeftIcon/>
                                <Box fontSize={'16px'} marginLeft={'8px'} color={'grey'}>Назад</Box>
                            </Box>
                        </Box>}
                    {(is_main_content || is_entry_content) && <Box display={'flex'} justifyContent={'flex-end'}>
                        <IconButton
                            onClick={closeDialog}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Box>}
                    <Box className={styles.right_menu__dialogContent}>
                        <Box marginBottom={'16px'}>
                            <Typography variant={'h5'} className={styles.right_menu__dialogContent__title}>
                                {(is_main_content || is_email_content) && 'Регистрация'}
                                {(is_entry_content || is_entry_email_content) && 'Вход в аккаунт'}
                                {is_restored_password_content && 'Восстановить пароль'}
                            </Typography>
                        </Box>
                        {is_email_content &&
                            <RegistrationForm openEntryContent={handlerEntryFormType}
                            />}
                        <EntryFormEmail
                            openMainContent={openMainContent}
                            is_restored_password_content={is_restored_password_content}
                            is_entry_email_content={is_entry_email_content}
                            openRestoredPasswordForm={openRestoredPasswordForm}
                        />
                        {(is_entry_content || is_main_content) && (<><Box
                                display={'flex'}
                                flexDirection={'column'}
                                className={styles.right_menu__dialogContent__buttonActions}>
                                <Button
                                    variant={'contained'}
                                    startIcon={<MailOutlineIcon/>}
                                    onClick={is_main_content ? openEmailForm : openEntryEmailForm}
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
                                </Box></>
                        )}
                        <Box marginTop={'16px'}>
                            <Typography>
                                {is_main_content && 'Есть аккаунт? '}
                                <Link
                                    onClick={is_main_content ? handlerEntryFormType : openMainContent}>
                                    {is_main_content && 'Войти'}
                                    {is_entry_content && 'Регистрация'}
                                </Link>
                            </Typography>
                        </Box>
                        {is_main_content && <Box marginTop={'8px'} position={'absolute'} bottom={20}>
                            <Typography>
                                <Link>Условия использования</Link>
                            </Typography>
                        </Box>}
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
});