import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {CreateUserDto, LoginDto, ResponseUserMeType, ResponseUserType} from "./user-api-types";


const instance = axios.create({
    baseURL: 'http://localhost:7777',
    withCredentials: true
});


export const UserApi =(instance:AxiosInstance)=> ({
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