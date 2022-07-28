import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";


export type CreatePostDto = {
    title:string
    body:OutputBlockData[]
}