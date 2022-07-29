import {WriteComponent} from "../../src/components/pages/write/write";
import {GetServerSideProps, NextPage} from "next";
import {GlobalApi} from "../../src/services/api";
import {PostType} from "../../src/redux/reducers/posts/posts-types";
import {memo, ReactElement} from "react";


type WritePageProps = {
    post: PostType
}

export const WritePage: NextPage<WritePageProps> = memo(function WritePage({post}): ReactElement {

    return <WriteComponent data={post}/>
})


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    try {
        const id = Number(ctx.params.id)
        const post = await GlobalApi(ctx).post.getOne(id)
        const user = await GlobalApi(ctx).user.getMe();
        console.log(post, 'post')
        if (post.user.id !== user.id) {
            return {
                props: {},
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }


        return {
            props: {
                post
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {},
            redirect: {
                destination: '/messages',
                permanent: false
            }
        }
    }

}


export default WritePage