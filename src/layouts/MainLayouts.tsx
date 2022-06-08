import * as React from 'react';
import clsx from 'clsx';
import {LeftMenu} from "../components/LeftMenu";
import {SideComments} from "../components/SideComments";
import {ReactElement, ReactNode} from "react";


interface MainLayoutProps {
    hideComments?: boolean;
    contentFullWidth?: boolean;
    className?: string;
    children: ReactNode
}


export const MainLayout = (props: MainLayoutProps): ReactElement => {
    const {hideComments, contentFullWidth, className, children} = props

    return (
        <div className={clsx('wrapper', className)}>
            <div className="leftSide">
                <LeftMenu/>
            </div>
            <div className={clsx('content', {'content--full': contentFullWidth})}>{children}</div>
            {!hideComments && (
                <div className="rightSide">
                    <SideComments/>
                </div>
            )}
        </div>
    );
};
