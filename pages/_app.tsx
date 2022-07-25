import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import {theme} from '../src/theme/theme';
import '../styles/globals.scss';
import 'macro-css';
import Head from "next/head";
import {Header} from "../src/components/ui/Header/Header";
import ClientOnly from "../src/ClientOnlyProps";
import {Provider} from 'react-redux';
import { store } from '../src/redux/store';

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>TJournal</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"></link>
            </Head>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Header/>
                    <ClientOnly>
                        <Component {...pageProps} />
                    </ClientOnly>
                </MuiThemeProvider>
            </Provider>
        </>

    );
}

export default MyApp;
