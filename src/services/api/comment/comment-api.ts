import {AxiosInstance} from "axios";
import {CommentItemType, CreateCommentDto} from "./comment-api-types";


export const CommentApi = (instance: AxiosInstance) => ({
    async getAll(postId?: number): Promise<CommentItemType[]> {
        const {data} = await instance.get<CommentItemType[]>('/comments', {params: {postId}});
        return data
    },
    async create(dto: CreateCommentDto): Promise<CommentItemType> {
        const {data} = await instance.post<CreateCommentDto, { data: CommentItemType }>('/comments', dto);
        console.log()
        return data
    },
    async remove(id: number): Promise<void> {
        await instance.delete('/comments/' + id);
    },

})