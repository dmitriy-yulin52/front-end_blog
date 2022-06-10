import * as React from 'react'
import {ReactElement, useCallback, useState} from "react";
import {Box, IconButton, Slide, Typography} from "@material-ui/core";
import {SideComments} from "../SideComments/SideComments";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";
import clsx from "clsx";
import styles from './RightMenu.module.scss'
import {ArrowLeft} from "@material-ui/icons";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const style_typography = {
    transform: 'rotate(-90deg)', position: 'absolute', top: '115px', left: '-53px'
} as const


export const RightMenu = function RightMenu(): ReactElement {

    const [visible, setVisible] = useState(false)


    const handlerClick = useCallback(() => {
        setVisible(!visible)
    }, [setVisible, visible])

    return <>
        <Slide direction="left" in={!visible} mountOnEnter unmountOnExit>
            <Box flex={'0 1 400px'}>
                <SideComments onClick={handlerClick}/>
            </Box>
        </Slide>
        <Box
            className={clsx( {
                [styles.com]: visible,
                [styles.not_com]: !visible,
            })}
        >
            <IconButton onClick={handlerClick}>
              <ChevronLeftIcon/>
            </IconButton>
            <Typography
                style={style_typography}
                variant={'h5'}>
                Комментарии
            </Typography>
        </Box>
    </>
}
