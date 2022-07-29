import React, {memo, ReactElement, useEffect} from 'react';
import {PostComments} from "../../src/components/pages/post/post-comments";
import {FullPost} from "../../src/components/ui/FullPost";
import {MainLayout} from "../../src/layouts/MainLayouts";
import {GetServerSideProps, NextPage} from "next";
import {GlobalApi} from "../../src/services/api";
import {PostType} from "../../src/redux/reducers/posts/posts-types";
import {useDispatch} from "react-redux";
import {postsActions} from "../../src/redux/reducers/posts/posts-actions";


const style = {
    marginBottom: '50px'
} as const


type PostPageType = {
    post: PostType
}


const Post: NextPage<PostPageType> = memo(function Post({post}): ReactElement {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(postsActions.setPostItem(post))
    }, [])

    return (
        <MainLayout styleReactNode={style} contentFullWidth>
            <FullPost post={post}/>
            <PostComments/>
        </MainLayout>
    );
})

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    try {
        const id = Number(ctx.params.id)
        const post = await GlobalApi(ctx).post.getOne(id)

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
                destination: '/',
                permanent: false
            }
        }
    }

}

export default Post
