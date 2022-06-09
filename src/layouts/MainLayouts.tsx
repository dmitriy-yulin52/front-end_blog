import * as React from 'react';
import clsx from 'clsx';
import {LeftMenu} from "../components/LeftMenu";
import {SideComments} from "../components/SideComments/SideComments";
import {ReactElement, ReactNode, useCallback, useState} from "react";
import styles from './MainLayouts.module.scss'
import {Box, IconButton, Slide, Typography} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";


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


    const [transition, setTransition] = useState(false)


    const handlerClick = useCallback(() => {
        setTransition(!transition)
    }, [setTransition, transition])

    return (
        <div className={clsx(styles.wrapper, style)} style={styleReactNode}>
            {!hideLeftMenu && <div>
                <LeftMenu/>
            </div>}
            <div className={clsx(styles.content, {'content--full': contentFullWidth})}>{children}</div>
            {!hideComments && (<>
                    <Slide direction="left" in={!transition} mountOnEnter unmountOnExit>
                        <Box flex={'0 1 400px'}>
                            <SideComments onClick={handlerClick}/>
                        </Box>
                    </Slide>
                    {transition && <Box display={'flex'} position={'relative'} justifyContent={'flex-end'} alignItems={'flex-start'}>
                        <IconButton onClick={handlerClick}>
                            <ArrowRightIcon/>
                        </IconButton>
                         <Typography style={{transform:'rotate(-90deg)',position:'absolute',top:'115px',left:'-53px'} } variant={'h5'}>
                            Комментарии
                        </Typography>
                    </Box>}
                </>
            )}
        </div>
    );
};
