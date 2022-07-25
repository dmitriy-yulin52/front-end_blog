import * as React from 'react'
import {memo, ReactElement} from 'react'
import {Box, Input} from "@material-ui/core";
import styles from './WriteForm.module.scss'
import dynamic from "next/dynamic";

interface WriteFormProps {
    value?: string
    placeholder?: string

}


const Editor = dynamic(() => import('../../Editor').then((mod) => mod.Editor), {ssr: false})

export const WriteForm = memo(function WriteForm(props: WriteFormProps): ReactElement {

    const {value, placeholder} = props
    return (
        <>
            <Input maxRows={21} multiline className={styles.input} value={value} placeholder={placeholder} fullWidth/>
            <Box fontSize={'18px'}>
                <Editor/>
            </Box>
        </>
    )
})