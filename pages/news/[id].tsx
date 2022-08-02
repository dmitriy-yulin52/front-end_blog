import React, {memo, ReactElement} from 'react';
import {PostComments} from "../../src/components/pages/post/post-comments";
import {FullPost} from "../../src/components/ui/FullPost";
import {MainLayout} from "../../src/layouts/MainLayouts";
import {GetServerSideProps, NextPage} from "next";
import {GlobalApi} from "../../src/services/api";
import {PostType} from "../../src/redux/reducers/posts/posts-types";


const style = {
    marginBottom: '50px'
} as const


type PostPageType = {
    post: PostType
}


const Post: NextPage<PostPageType> = memo(function Post({post}): ReactElement {
    return (
        <MainLayout styleReactNode={style} contentFullWidth>
            <FullPost post={post}/>
            <PostComments postId={post.id}/>
        </MainLayout>
    );
})

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    try {
        const id = Number(ctx.params.id)
        const post = await GlobalApi(ctx).post.getOne(id)

        return {
            props: {
                post,
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {},
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

}

export default Post
