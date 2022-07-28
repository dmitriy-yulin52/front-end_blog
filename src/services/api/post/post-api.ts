import {AxiosInstance} from 'axios';
import {CreateUserDto, LoginDto, ResponseUserType} from "../user/user-api-types";



export const PostApi =(instance:AxiosInstance)=> ({
    async getAll(): Promise<any> {
        const {data} = await instance.get('/posts');
        return data
    },

})