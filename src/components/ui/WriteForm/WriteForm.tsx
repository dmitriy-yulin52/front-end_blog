import * as React from 'react'
import {ChangeEvent, memo, ReactElement, useCallback} from 'react'
import {Box, Button, Input} from "@material-ui/core";
import styles from './WriteForm.module.scss'
import dynamic from "next/dynamic";
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";
import {Api} from "@mui/icons-material";
import {GlobalApi} from "../../../services/api";

interface WriteFormProps {
    value?: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSetBlocks: (blocks: OutputBlockData[]) => void
    blocks: OutputBlockData[]
}


const Editor = dynamic(() => import('../../Editor').then((mod) => mod.Editor), {ssr: false})

export const WriteForm = memo(function WriteForm(props: WriteFormProps): ReactElement {

    const {value, placeholder, onChange, onSetBlocks, blocks} = props


    const onAddPost = useCallback(async () => {
        try {
            const post = await GlobalApi().post.create({
                body: blocks,
                title: value
            })

            console.log(post, 'create post')
        } catch (e) {
            console.warn('Create post', e)
        }
    }, [GlobalApi])


    return (
        <>
            <Input
                maxRows={21}
                multiline
                className={styles.input}
                value={value}
                placeholder={placeholder}
                fullWidth
                onChange={onChange}
            />
            <Box fontSize={'18px'}>
                <Editor onSetBlocks={onSetBlocks}/>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} marginBottom={'24px'}>
                <Button onClick={onAddPost} variant="contained" color="primary">
                    Опубликовать
                </Button>
            </Box>
        </>
    )
})