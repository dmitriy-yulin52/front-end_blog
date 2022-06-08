import * as React from 'react';
import clsx from 'clsx';
import {LeftMenu} from "../components/LeftMenu";
import {SideComments} from "../components/SideComments";
import {ReactElement, ReactNode} from "react";
import styles from './MainLayouts.module.scss'


interface MainLayoutProps {
    hideComments?: boolean;
    contentFullWidth?: boolean;
    className?: string;
    children: ReactNode
}


export const MainLayout = (props: MainLayoutProps): ReactElement => {
    const {hideComments, contentFullWidth, className, children} = props

    return (
        <div className={clsx(styles.wrapper, className)}>
            <div className="leftSide">
                <LeftMenu/>
            </div>
            <div className={clsx(styles.content, {'content--full': contentFullWidth})}>{children}</div>
            {!hideComments && (
                <div className="rightSide">
                    <SideComments/>
                </div>
            )}
        </div>
    );
};
