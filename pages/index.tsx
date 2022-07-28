import {Post} from '../src/components/ui/Post';
import {MainLayout} from "../src/layouts/MainLayouts";
import {GlobalApi} from "../src/services/api";
import {NextPage} from "next";
import {ReactElement} from "react";

type HomeProps = {
    posts: any[]
}


const Home: NextPage<HomeProps> = function Home(props): ReactElement {
    const {posts} = props
    console.log(posts,'posts')

    return (
        <MainLayout>
            <Post/>
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