import * as React from 'react'
import {ChangeEvent, memo, ReactElement} from 'react'
import {Box, Input} from "@material-ui/core";
import styles from './WriteForm.module.scss'
import dynamic from "next/dynamic";
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";

interface WriteFormProps {
    value?: string
    placeholder?: string
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    onSetBlocks:(blocks:OutputBlockData[])=>void
}


const Editor = dynamic(() => import('../../Editor').then((mod) => mod.Editor), {ssr: false})

export const WriteForm = memo(function WriteForm(props: WriteFormProps): ReactElement {

    const {value, placeholder,onChange,onSetBlocks} = props
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
        </>
    )
})