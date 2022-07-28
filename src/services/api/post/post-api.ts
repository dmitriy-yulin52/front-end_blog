import {AxiosInstance} from 'axios';
import {CreateUserDto, LoginDto, ResponseUserType} from "../user/user-api-types";
import {PostType} from "../../../redux/reducers/posts/posts-types";
import {CreatePostDto} from "./post-api-types";


export const PostApi = (instance: AxiosInstance) => ({
    async getAll(): Promise<PostType[]> {
        const {data} = await instance.get<PostType[]>('/posts');
        return data
    },
    async create(dto: CreatePostDto): Promise<any> {
        const {data} = await instance.post('/posts', dto);
        return data
    },

})