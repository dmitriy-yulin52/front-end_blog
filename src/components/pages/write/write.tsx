import * as React from 'react'
import {ChangeEvent, FC, memo, ReactElement, useCallback, useState} from "react";
import {Box, Button} from "@material-ui/core";
import {WriteForm} from "../../ui/WriteForm/WriteForm";
import {MainLayout} from "../../../layouts/MainLayouts";
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";


const style = {
    backgroundColor: '#fff', justifyContent: 'center'
} as const


type WriteComponentProps = {
    data?: any
}

export const WriteComponent: FC<WriteComponentProps> = memo(function WriteComponent(): ReactElement {

    const [title, setTitle] = useState('')
    const [blocks, setBlocks] = useState<OutputBlockData[]>([])


    console.log(blocks,'blocks')


    const onChangeSetBlocks = useCallback((blocks:OutputBlockData[])=>{
        setBlocks(blocks)
    },[setBlocks])


    const onChangeTitleHandler = useCallback(({currentTarget}: ChangeEvent<HTMLInputElement>) => {
        const {value} = currentTarget;
        setTitle(value)
    }, [setTitle])

    return <MainLayout styleReactNode={style} hideComments hideLeftMenu contentFullWidth>
        <Box height={'100%'} display={'flex'} flexDirection={'column'}>
            <Box flexGrow={1}>
                <WriteForm placeholder={'Заголовок'} value={title} onChange={onChangeTitleHandler} onSetBlocks={onChangeSetBlocks}/>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} marginBottom={'24px'}>
                <Button variant="contained" color="primary">
                    Опубликовать
                </Button>
            </Box>
        </Box>
    </MainLayout>
})





