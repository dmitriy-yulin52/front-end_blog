import {AxiosInstance} from "axios";
import {CommentItemType, CreateCommentDto} from "./comment-api-types";


export const CommentApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data} = await instance.get('/comments');
        return data
    },
    async create(dto: CreateCommentDto) {
        const {data} = await instance.post<CreateCommentDto, { data: CommentItemType }>('/comments', dto);
        console.log()
        return data
    },

})