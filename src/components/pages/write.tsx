import * as React from 'react'
import {ReactElement} from "react";
import {Box, Button} from "@material-ui/core";
import {WriteForm} from "../WriteForm/WriteForm";
import {MainLayout} from "../../layouts/MainLayouts";


const style = {
    backgroundColor: '#fff'
} as const


export const WriteComponent = (): ReactElement => {
    return <MainLayout styleReactNode={style} hideComments hideLeftMenu contentFullWidth>
        <Box height={'100%'} display={'flex'} flexDirection={'column'}>
            <Box flexGrow={1}>
                <WriteForm placeholder={'Заголовок'}/>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} marginBottom={'24px'}>
                <Button variant="contained" color="primary">
                    Опубликовать
                </Button>
            </Box>
        </Box>
    </MainLayout>
}







