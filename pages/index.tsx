import {Post} from '../src/components/ui/Post';
import {MainLayout} from "../src/layouts/MainLayouts";
import {GlobalApi} from "../src/services/api";
import {NextPage} from "next";
import {ReactElement, useEffect} from "react";
import {useDispatch} from "react-redux";
import {postsActions} from "../src/redux/reducers/posts/posts-actions";
import {PostType} from "../src/redux/reducers/posts/posts-types";

type HomeProps = {
    posts:  PostType[]
}


const Home: NextPage<HomeProps> = function Home(props): ReactElement {
    const {posts} = props
    const dispatch = useDispatch()

    console.log(posts,'posts')

    useEffect(() => {
        dispatch(postsActions.getPosts(posts))
    }, [])

    return (
        <MainLayout>
            {posts ? posts.map((post,index) => <Post key={post.id - index}/>) : []}
        </MainLayout>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        const posts = await GlobalApi().post.getAll()
        return {
            props: {
                posts
            }
        }
    } catch (e) {
        console.log(e, 'e')
    }

    return {
        props: {
            posts: null
        }
    }
}


export default Home