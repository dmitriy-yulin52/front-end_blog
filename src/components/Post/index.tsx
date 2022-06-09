import React, {ReactElement} from 'react';
import {Paper, Typography} from '@material-ui/core';
import Image from 'next/image';
import styles from './Post.module.scss';
import Link from "next/link";
import homer from "../../../public/multfilm_gomer (1).png";


const root_styles = {
    root: styles.paper
} as const

export const Post = ():ReactElement => {
    return (
        <Paper elevation={0} className="p-20" classes={root_styles}>
            <Typography variant="h5" className={styles.title}>
                <Link href="/news/test-123">
                    <a>
                        Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о
                        «гигантском пушистом захватчике»
                    </a>
                </Link>

            </Typography>
            <Typography className="mt-10 mb-15">
                Пока одни не могли соотнести размеры животного и окружения, другие начали создавать
                апокалиптические сюжеты с котом в главной роли.
            </Typography>
            <Image
                src={homer}
                height={500}
                width={600}
            />
        </Paper>
    );
};
