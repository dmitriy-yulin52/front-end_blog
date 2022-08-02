import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {CreateUserDto, LoginDto, ResponseUserMeType, ResponseUserType} from "./user-api-types";


export const UserApi = (instance: AxiosInstance) => ({

    async getAll() {
        const {data} = await instance.get<ResponseUserType[]>('/users')
        return data
    },
    async register(dto: CreateUserDto): Promise<ResponseUserType> {
        const {data} = await instance.post<CreateUserDto, { data: ResponseUserType }>('/auth/register', dto);
        return data
    },
    async login(dto: LoginDto): Promise<ResponseUserType> {
        const {data} = await instance.post<LoginDto, { data: ResponseUserType }>('/auth/login', dto);
        console.log()
        return data
    },
    async getMe() {
        const {data} = await instance.get('/users/me');
        return data
    }
})