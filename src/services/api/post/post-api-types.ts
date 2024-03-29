import {OutputBlockData, OutputData} from "@editorjs/editorjs/types/data-formats/output-data";


export type CreatePostDto = {
    title:string
    body:OutputData['blocks']
    tags:string[]
}

export class SearchPostDto {
  title?: string;
  body?: string;
  views?: 'DESC' | 'ASC';
  limit?: number;
  take?: number;
  tag?: string;
}
