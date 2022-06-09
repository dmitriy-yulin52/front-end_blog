import * as React from 'react'
import {ReactElement, useCallback, useMemo, useState} from "react";
import {Button, Divider, IconButton, InputAdornment, Paper, TextField, Typography} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {MainLayout} from "../../../layouts/MainLayouts";

type InputsPropsTextFieldType = {
    endAdornment:JSX.Element
}

export const SettingsComponent = ():ReactElement=> {

        const [edit_type, set_edit_type] = useState(false)


    const handlerClick = useCallback(() => {
        set_edit_type(!edit_type)
    }, [edit_type, set_edit_type])


    const inputs_props_text_field:InputsPropsTextFieldType = useMemo(() => {
        return {
            endAdornment: <InputAdornment position="start">
                <IconButton onClick={handlerClick}>
                    {edit_type ? <VisibilityIcon/> : <VisibilityOffIcon/> }
                </IconButton>
            </InputAdornment>
        }
    }, [handlerClick,edit_type])



    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h6" >Основные настройки</Typography>
                <Divider className="mt-20 mb-30"/>
                <form>
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Никнейм"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Эл. почта"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        size="small"
                        label="Пароль"
                        variant="outlined"
                        type={edit_type ? 'text' : 'password'}
                        fullWidth
                        required
                        InputProps={inputs_props_text_field}
                    />
                    <Divider className="mt-30 mb-20"/>
                    <Button color="primary" variant="contained">
                        Сохранить изменения
                    </Button>
                </form>
            </Paper>
        </MainLayout>
    );

}
