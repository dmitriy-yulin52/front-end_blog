import React, {ReactElement} from "react";
import {useRouter} from "next/router";
import {MainLayout} from "../../src/layouts/MainLayouts";

const style = {
    marginBottom: '50px'
} as const

export default function SlugPost(): ReactElement {

    const router = useRouter()

    return (
        <MainLayout styleReactNode={style} contentFullWidth>
            <h1>slug</h1>
        </MainLayout>
    );
}