import axios, {AxiosResponse} from 'axios';
import {CreateUserDto, LoginDto, ResponseUserMeType, ResponseUserType} from "./types";


const instance = axios.create({
    baseURL: 'http://localhost:7777',
    withCredentials: true
});


export const UserApi = {
    async register(dto: CreateUserDto): Promise<ResponseUserType> {
        const {data} = await instance.post<CreateUserDto, { data: ResponseUserType }>('/auth/register', dto);
        return data
    },
    async login(dto: LoginDto): Promise<ResponseUserType> {
        const {data} = await instance.post<LoginDto, { data: ResponseUserType }>('/auth/login', dto);
        return data
    },
    async getMe(token:string) {
        const {data} = await instance.get('/users/me',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return data
    }
}