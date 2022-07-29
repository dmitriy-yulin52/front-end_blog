import * as React from 'react'
import {ChangeEvent, FC, memo, ReactElement, useCallback, useState} from 'react'
import {Box} from "@material-ui/core";
import {WriteForm} from "../../ui/WriteForm/WriteForm";
import {MainLayout} from "../../../layouts/MainLayouts";
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";
import {PostType} from "../../../redux/reducers/posts/posts-types";
import {useTypedSelector} from "../../../utils/hooks/UseTypedSelector";


const style = {
    backgroundColor: '#fff', justifyContent: 'center'
} as const


type WriteComponentProps = {
    data?: PostType
}

export const WriteComponent: FC<WriteComponentProps> = memo(function WriteComponent({data}): ReactElement {


    const [title, setTitle] = useState(data?.title ?? '')
    const [blocks, setBlocks] = useState<OutputBlockData[]>(data?.body ?? [])
    const [isLoading, setIsLoading] = useState<boolean>(false)

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
                <WriteForm
                    placeholder={'Заголовок'}
                    title={title}
                    onChange={onChangeTitleHandler}
                    onSetBlocks={onChangeSetBlocks}
                    blocks={blocks}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    data={data}
                />
            </Box>
        </Box>
    </MainLayout>
})





