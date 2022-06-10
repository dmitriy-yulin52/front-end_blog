import * as React from 'react';
import clsx from 'clsx';
import {LeftMenu} from "../components/LeftMenu";
import {SideComments} from "../components/SideComments/SideComments";
import {ReactElement, ReactNode, useCallback, useState} from "react";
import styles from './MainLayouts.module.scss'
import {Box, IconButton, Slide, Typography} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";
import {RightMenu} from "../components/RightMenu/RightMenu";


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

console.log('render')
    return (
        <div className={clsx(styles.wrapper, style)} style={styleReactNode}>
            {!hideLeftMenu && <div>
                <LeftMenu/>
            </div>}
            <div className={clsx(styles.content, {'content--full': contentFullWidth})}>{children}</div>
            {!hideComments && (<RightMenu/>)}
        </div>
    );
};
