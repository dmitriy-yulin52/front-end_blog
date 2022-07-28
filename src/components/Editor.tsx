import * as React from 'react'
import {FC, memo, ReactElement, useCallback, useEffect, useRef} from "react";
import EditorJS, {OutputData} from '@editorjs/editorjs';
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";

type EditorProps = {
    onSetBlocks: (blocks: OutputBlockData[]) => void
}


export const Editor: FC<EditorProps> = memo(function Editor({onSetBlocks}): ReactElement {

    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: 'Нажмите Tab для выбора инструмента',
            onChange: async () => {
                const {blocks} = await editor.save()
                onSetBlocks(blocks)
            }
        })
        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy()
                })
                .catch((e) => console.error("ERROR editor cleanup", e))
        }
    }, [])

    return <div id={'editor'}/>
})