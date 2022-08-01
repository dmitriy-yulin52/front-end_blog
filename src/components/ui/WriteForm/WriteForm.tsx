import * as React from 'react'
import {ChangeEvent, memo, ReactElement} from 'react'
import {Box, Button, Input} from "@material-ui/core";
import styles from './WriteForm.module.scss'
import dynamic from "next/dynamic";
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";
import {PostType} from "../../../redux/reducers/posts/posts-types";
import {useRouter} from "next/router";
import {GlobalApi} from "../../../services/api";

interface WriteFormProps {
    title?: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSetBlocks: (blocks: OutputBlockData[]) => void
    blocks: OutputBlockData[]
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
    data?: PostType
}


const Editor = dynamic(() => import('../../Editor').then((mod) => mod.Editor), {ssr: false})

export const WriteForm = memo(function WriteForm(props: WriteFormProps): ReactElement {
    const router = useRouter()

    const {title, placeholder, onChange, onSetBlocks, blocks, isLoading, setIsLoading, data} = props


    const onAddPost =
        async () => {
            try {
                setIsLoading(true)
                if (!data) {
                     await GlobalApi().post.create({
                        title,
                        body: blocks,
                        tags: null
                    })
                    router.push(`/`)
                } else {
                    await GlobalApi().post.update(data?.id ?? 1, {
                        title,
                        body: blocks,
                        tags: null
                    })
                }
            } catch (e) {
                console.warn('Create post', e)
            } finally {
                setIsLoading(false)
            }
        }


    return (
        <>
            <Input
                maxRows={21}
                multiline
                className={styles.input}
                value={title}
                placeholder={placeholder}
                fullWidth
                onChange={onChange}
            />
            <Box fontSize={'18px'}>
                <Editor initialValue={blocks} onSetBlocks={onSetBlocks}/>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} marginBottom={'24px'}>
                <Button disabled={isLoading || !blocks.length || !title} onClick={onAddPost} variant="contained"
                        color="primary">
                    {data ? 'Сохранить' : 'Опубликовать'}
                </Button>
            </Box>
        </>
    )
})