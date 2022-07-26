import {Post} from '../src/components/ui/Post';
import {MainLayout} from "../src/layouts/MainLayouts";
import {wrapper} from "../src/redux/store";
import {GetServerSideProps, GetServerSidePropsResult} from "next";
import {parseCookies} from "nookies";
import {UserApi} from "../src/services/api";
import {authActions} from "../src/redux/reducers/auth/auth-actions";

export default function Home() {
    return (
        <MainLayout>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </MainLayout>
    );
}


// @ts-ignore
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {

    try {
        const {authToken} = parseCookies(context)

       const userData = await UserApi.getMe(authToken)
        store.dispatch(authActions.setUser(userData))

        return {props:{}}
    } catch (e) {
        console.log(e)

        return{props:{}}
    }
})
