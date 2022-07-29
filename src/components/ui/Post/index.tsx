import React, {FC, memo, ReactElement} from 'react';
import {Paper, Typography} from '@material-ui/core';
import Image from 'next/image';
import styles from './Post.module.scss';
import Link from "next/link";
import {PostType} from "../../../redux/reducers/posts/posts-types";


const root_styles = {
    root: styles.paper
} as const


type PostProps = {
    title?: string
    description?: string
    imageUrl?: string
    views?: number
    id?: number
    body?:any
}


export const Post: FC<PostProps> = memo(function Post(props): ReactElement {

    const {title, description, imageUrl, views, id,body } = props

    const text = body.map((el)=>el.data.text).join(' ')

    return (
        <Paper elevation={0} className="p-20" classes={root_styles}>
            <Typography variant="h5" className={styles.title}>
                <Link href={`/news/${id}`}>
                    <a>
                        {title ? title : 'title'}
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">
                {body ? text : 'body'}
            </Typography>
            <Image
                src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
                height={500}
                width={600}
            />
        </Paper>
    );
});
