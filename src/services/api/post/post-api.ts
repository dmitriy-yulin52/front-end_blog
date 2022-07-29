import {AxiosInstance} from 'axios';
import {CreateUserDto, LoginDto, ResponseUserType} from "../user/user-api-types";
import {PostType} from "../../../redux/reducers/posts/posts-types";
import {CreatePostDto} from "./post-api-types";


export const PostApi = (instance: AxiosInstance) => ({
    async getAll(): Promise<PostType[]> {
        const {data} = await instance.get<PostType[]>('/posts');
        return data
    },
    async getOne(id: number): Promise<PostType> {
        const {data} = await instance.get<PostType>(`/posts/${id}`);
        return data
    },
    async create(dto: CreatePostDto): Promise<PostType> {
        const {data} = await instance.post<CreatePostDto, { data: PostType }>('/posts', dto);
        return data
    },
    async update(id:number,dto: CreatePostDto): Promise<PostType> {
        const {data} = await instance.patch<CreatePostDto, { data: PostType }>(`/posts/${id}`, dto);
        return data
    },

})