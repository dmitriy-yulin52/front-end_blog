import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from "nookies";
import axios from "axios";
import {UserApi} from "./user/user-api";
import {PostApi} from "./post/post-api";


export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
    post: ReturnType<typeof PostApi>
}

export const GlobalApi = (ctx?: NextPageContext | GetServerSidePropsContext):ApiReturnType=> {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = cookies.authToken;


    const instance = axios.create({
        baseURL: `http://localhost:7777`,
        withCredentials:true,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return {
        user:UserApi(instance),
        post:PostApi(instance)
    }

}