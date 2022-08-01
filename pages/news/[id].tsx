import React, {memo, ReactElement, useEffect} from 'react';
import {PostComments} from "../../src/components/pages/post/post-comments";
import {FullPost} from "../../src/components/ui/FullPost";
import {MainLayout} from "../../src/layouts/MainLayouts";
import {GetServerSideProps, NextPage} from "next";
import {GlobalApi} from "../../src/services/api";
import {PostType} from "../../src/redux/reducers/posts/posts-types";
import {postsActions} from "../../src/redux/reducers/posts/posts-actions";
import {useTypedSelector} from "../../src/utils/hooks/UseTypedSelector";
import {commentsActions} from "../../src/redux/reducers/comments/comments-actions";
import {useAction, usePartial} from "../../src/utils/hooks/hooks-utils";
import {filteredComments} from "../../src/redux/reducers/comments/comment-selectors";
import {useComments} from "../../src/utils/hooks/useComments";
import {useDispatch} from "react-redux";


const style = {
    marginBottom: '50px'
} as const


type PostPageType = {
    post: PostType
}


const Post: NextPage<PostPageType> = memo(function Post({post}): ReactElement {

    const {items} = useTypedSelector(state => state.comment)

    const {comments} = useComments(post.id)

    const dispatch = useDispatch()

    const onGetAllComments = useAction(commentsActions.getAll)
    const onSetPostItem = useAction(usePartial(postsActions.setPostItem, post))


    useEffect(() => {
        onSetPostItem()
        // onGetAllComments(post.id)
    }, [])
    // useEffect(() => {
    //     dispatch(commentsActions.setItems([...comments.reverse()]))
    // }, [comments])


    return (
        <MainLayout styleReactNode={style} contentFullWidth>
            <FullPost post={post}/>
            <PostComments postId={post.id} comments={comments}/>
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
