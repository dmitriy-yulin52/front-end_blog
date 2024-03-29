import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import {theme} from '../src/theme/theme';
import '../styles/globals.scss';
import 'macro-css';
import Head from "next/head";
import {Header} from "../src/components/ui/Header/Header";
import ClientOnly from "../src/ClientOnlyProps";
import {wrapper} from '../src/redux/store';
import {authActions} from "../src/redux/reducers/auth/auth-actions";
import {GlobalApi} from "../src/services/api/index";

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
        const userData = await GlobalApi(ctx).user.getMe()
        store.dispatch(authActions.setUser(userData))
        store.dispatch(authActions.setIsAuth(true))
        console.log(ctx.asPath, 'ctx.asPath')
        console.log(ctx.pathname, 'ctx.pathname')
    } catch (e) {
        if (ctx.asPath === '/write') {
            ctx.res.writeHead(302, {
                Location: 'signin'
            });
            ctx.res.end();
        }
        store.dispatch(authActions.setIsAuth(false))

    }

    return {
        pageProps: {
            ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
            path: ctx.pathname
        },

    }
})

export default wrapper.withRedux(MyApp);
