import * as React from 'react';
import {ReactElement, ReactNode, useCallback, useState} from 'react';
import clsx from 'clsx';
import {LeftMenu} from "../components/ui/LeftMenu/LeftMenu";
import styles from './MainLayouts.module.scss'
import {RightMenu} from "../components/ui/RightMenu/RightMenu";
import {UniversalSnackBar} from "../components/common/Snackbar/Snackbar";
import {useTypedSelector} from "../utils/hooks/UseTypedSelector";
import {useDispatch} from "react-redux";
import {snackbarActions} from "../redux/reducers/snackbar/snackbar-actions";


interface MainLayoutProps {
    hideComments?: boolean;
    hideLeftMenu?: boolean;
    contentFullWidth?: boolean;
    style?: string;
    styleReactNode?: any
    children: ReactNode
}

const styleWrapper = {
    justifyContent: 'center'
} as const

export const MainLayout = (props: MainLayoutProps): ReactElement => {
    const {hideComments, contentFullWidth, style, children, hideLeftMenu, styleReactNode} = props

    const {open,message} = useTypedSelector(state=>state.snackBar)
    const dispatch = useDispatch()

    const onClickCloseSnackBar = useCallback(()=>{
        dispatch(snackbarActions.close())
    },[snackbarActions])

    return (
        <div className={clsx(styles.wrapper, style)} style={styleReactNode}>
            {!hideLeftMenu && <div>
                <LeftMenu/>
            </div>}
            <div className={clsx(styles.content, {'content--full': contentFullWidth})}>{children}</div>
            <UniversalSnackBar open={open} onClose={onClickCloseSnackBar} severity={'error'} title={message}/>
            {!hideComments && (<RightMenu/>)}
        </div>
    );
};

