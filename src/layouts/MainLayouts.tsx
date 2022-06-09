import * as React from 'react';
import clsx from 'clsx';
import {LeftMenu} from "../components/LeftMenu";
import {SideComments} from "../components/SideComments";
import {ReactElement, ReactNode} from "react";
import styles from './MainLayouts.module.scss'


interface MainLayoutProps {
    hideComments?: boolean;
    hideLeftMenu?: boolean;
    contentFullWidth?: boolean;
    style?: string;
    styleReactNode?:any
    children: ReactNode
}


export const MainLayout = (props: MainLayoutProps): ReactElement => {
    const {hideComments, contentFullWidth, style, children, hideLeftMenu,styleReactNode} = props

    return (
        <div className={clsx(styles.wrapper, style)} style={styleReactNode}>
            {!hideLeftMenu && <div >
                <LeftMenu/>
            </div>}
            <div className={clsx(styles.content, {'content--full': contentFullWidth})}>{children}</div>
            {!hideComments && (
                <div >
                    <SideComments/>
                </div>
            )}
        </div>
    );
};
