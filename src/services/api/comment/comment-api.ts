import {AxiosInstance} from "axios";
import {CommentItemType, CreateCommentDto} from "./comment-api-types";


export const CommentApi = (instance: AxiosInstance) => ({
    async getAll(): Promise<CommentItemType[]> {
        const {data} = await instance.get<CommentItemType[]>('/comments');
        return data
    },
    async create(dto: CreateCommentDto) {
        const {data} = await instance.post<CreateCommentDto, { data: CommentItemType }>('/comments', dto);
        console.log()
        return data
    },
    async remove(id: number): Promise<void> {
        await instance.delete('/comments/' + id);
    },

})