import * as React from 'react'
import {ReactElement, useEffect} from "react";
import EditorJS from '@editorjs/editorjs';


export const Editor = function Editor(): ReactElement {
    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder:'Нажмите Tab для выбора инструмента',
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
}