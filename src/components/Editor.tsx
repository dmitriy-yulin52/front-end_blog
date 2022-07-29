import * as React from 'react'
import {FC, memo, ReactElement, useCallback, useEffect, useRef} from "react";
import EditorJS, {API, OutputData} from '@editorjs/editorjs';
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";
import ImageTool from '@editorjs/image';

type EditorProps = {
    onSetBlocks: (blocks: OutputBlockData[]) => void
    initialValue?: OutputBlockData[]
}


export const Editor: FC<EditorProps> = memo(function Editor({onSetBlocks, initialValue}): ReactElement {


    useEffect(() => {
        const editor = new EditorJS({

            holder: 'editor',
            placeholder: 'Нажмите Tab для выбора инструмента',
            onChange: async () => {
                const {blocks} = await editor.save()
                onSetBlocks(blocks)
            },
            data: {
                blocks: initialValue
            },
            tools: {
                image: {
                    class: ImageTool,
                    config: {
                        actions: [
                            {
                                name: 'new_button',
                                icon: '<ImageIcon/>',
                                title: 'New Button',
                                action: (name) => {
                                    alert(`${name} button clicked`);
                                    return false;
                                }
                            }
                        ],
                        endpoints: {
                            byFile: 'http://localhost:7777/write', // Your backend file uploader endpoint
                            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                        },
                    }
                },

            },

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