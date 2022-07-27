import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import {theme} from '../src/theme/theme';
import '../styles/globals.scss';
import 'macro-css';
import Head from "next/head";
import {Header} from "../src/components/ui/Header/Header";
import ClientOnly from "../src/ClientOnlyProps";
import {Provider} from 'react-redux';
import {store, wrapper} from '../src/redux/store';
import {destroyCookie, parseCookies} from "nookies";
import {UserApi} from "../src/services/api";
import {authActions} from "../src/redux/reducers/auth/auth-actions";
import {NextPageContext} from "next";
import Router from "next/router";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Forum</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"></link>
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <ClientOnly>
                    <Component {...pageProps} />
                </ClientOnly>
            </MuiThemeProvider>
        </>

    );
}


MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ctx, Component}) => {
    try {
        const {authToken} = parseCookies(ctx)

        const userData = await UserApi.getMe(authToken)
        store.dispatch(authActions.setUser(userData))
        console.log(userData, 'usedata')
        console.log(userData, 'usedata')
        console.log(ctx, 'ctx')


    } catch (e) {
        console.log(e)

    }

    return {
        pageProps: Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {},

    }
})


export default wrapper.withRedux(MyApp);
