import React, {memo, ReactElement, useEffect} from 'react';
import {PostComments} from "../../src/components/pages/post/post-comments";
import {FullPost} from "../../src/components/ui/FullPost";
import {MainLayout} from "../../src/layouts/MainLayouts";
import {GetServerSideProps, NextPage} from "next";
import {GlobalApi} from "../../src/services/api";
import {PostType} from "../../src/redux/reducers/posts/posts-types";
import {useDispatch} from "react-redux";
import {postsActions} from "../../src/redux/reducers/posts/posts-actions";
import {useTypedSelector} from "../../src/utils/hooks/UseTypedSelector";
import {commentsActions} from "../../src/redux/reducers/comments/comments-actions";


const style = {
    marginBottom: '50px'
} as const


type PostPageType = {
    post: PostType
    comments:any
}


const Post: NextPage<PostPageType> = memo(function Post({post,comments}): ReactElement {

    const dispatch = useDispatch()

    console.log(comments,'comments')

    useEffect(() => {
        dispatch(postsActions.setPostItem(post))
        dispatch(commentsActions.setItems(comments))
    }, [])

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
        const comments = await GlobalApi(ctx).comment.getAll()

        return {
            props: {
                post,
                comments
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
