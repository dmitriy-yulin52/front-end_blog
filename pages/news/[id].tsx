import React, {ReactElement} from 'react';
import {PostComments} from "../../src/components/pages/post/post-comments";
import {FullPost} from "../../src/components/FullPost";
import {MainLayout} from "../../src/layouts/MainLayouts";
import data from '../../data'

const style = {
    marginBottom: '50px'
} as const


export default function Post(): ReactElement {
    return (
        <MainLayout styleReactNode={style} contentFullWidth>
            <FullPost/>
            <PostComments/>
        </MainLayout>
    );
}
