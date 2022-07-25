import * as React from 'react';
import {Alert} from "@mui/material";
import Snackbar from '@material-ui/core/Snackbar';
import {FC, memo, ReactElement} from "react";
import {AlertColor} from "@mui/material/Alert/Alert";

type UniversalSnackBarProps = {
    open: boolean
    onClose: () => void
    severity: AlertColor
    title: string
};

const sx = {width: '100%'} as const
const anchorOrigin = {vertical: 'bottom', horizontal: 'center'} as const

export const UniversalSnackBar: FC<UniversalSnackBarProps> = memo(function UniversalSnackBar(props): ReactElement {

    const {open, onClose, severity, title} = props

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose} anchorOrigin={anchorOrigin}>
            <Alert onClose={onClose} severity={severity} sx={sx}>
                {title}
            </Alert>
        </Snackbar>
    );
});