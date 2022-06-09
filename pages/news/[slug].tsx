import React, {ReactElement} from 'react';
import {PostComments} from "../../src/components/pages/post/post-comments";
import {FullPost} from "../../src/components/FullPost";
import {MainLayout} from "../../src/layouts/MainLayouts";

const style = {
    marginBottom: '50px'
} as const


const comments = [
    {
        id:1212,
        createdAt:'5 часов назад',
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    },
    {
        id:212344,
        createdAt:'5 часов назад',
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    },
    {
        id:367777,
        createdAt:'5 часов назад',
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    },
];


export default function Post(): ReactElement {
    return (
        <MainLayout styleReactNode={style} contentFullWidth>
            <FullPost/>
            <PostComments items={comments}/>
        </MainLayout>
    );
}
