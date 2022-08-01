import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from "nookies";
import axios from "axios";
import {UserApi} from "./user/user-api";
import {PostApi} from "./post/post-api";
import {CommentApi} from "./comment/comment-api";


export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
    post: ReturnType<typeof PostApi>
    comment: ReturnType<typeof CommentApi>
}

const apis = {
    user: UserApi,
    post: PostApi,
    comment: CommentApi,
}

export const GlobalApi = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = cookies.authToken;


    const instance = axios.create({
        baseURL: `http://localhost:7777`,
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const result: ApiReturnType = Object.entries(apis).reduce((acc, [key, func]) => {
        return {
            ...acc,
            [key]: func(instance)
        }
    }, {} as ApiReturnType)

    return result
}
