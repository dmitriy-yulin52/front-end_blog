import React from 'react';
import {Paper, Button, IconButton, Avatar} from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    CreateOutlined as PenIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';
import styles from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import homer from '../../../public/multfilm_gomer (1).png'

const rootStyle = {
    root: styles.root
} as const

export const Header: React.FC = () => {
    return (
        <Paper classes={rootStyle} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Link href="/">
                    <Image src={homer} width={'50px'} height={'50px'}/>
                    {/*<a>*/}
                    {/*    <svg className={styles.logo} viewBox="0 0 24 25">*/}
                    {/*        <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>*/}
                    {/*        <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>*/}
                    {/*        <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                </Link>
                <div className={styles.searchBlock}>
                    <SearchIcon/>
                    <input placeholder="Поиск"/>
                </div>
                <Link href={'/write'}>
                    <Button variant="contained" className={styles.penButton}>
                        Новая запись
                    </Button>
                </Link>

            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                <Link href="/profile/1">
                    <a className="d-flex align-center">
                        <Image
                            className={styles.avatar}
                            alt="Remy Sharp"
                            width={'40px'}
                            height={'40px'}
                            src={homer}
                        />
                        <ArrowBottom/>
                    </a>
                </Link>

            </div>
        </Paper>
    );
};
