import {ReactElement} from "react";
import Link from 'next/link';
import {Paper, Avatar, Typography, Button, Tabs, Tab, Box} from '@material-ui/core';
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';
import {MainLayout} from "../../src/layouts/MainLayouts";
import {Post} from "../../src/components/Post";
import styles from './[id].module.scss'


const typography_style = {
    fontWeight: 'bold',
    color: '#35AB66',
    marginRight: '15px'
}as const

const button_margin ={
    marginRight:'10px'
}as const



export default function Profile():ReactElement {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className={styles.paper} elevation={0}>
                <div className={styles.paper_wrapper}>
                    <div>
                        <Avatar
                            className={styles.paper_wrapper__img}
                            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                        />
                        <Typography className={styles.paper_wrapper__typography}variant="h4">
                            Amon Bower
                        </Typography>
                    </div>
                    <div>
                        <Link href="/profile/settings">
                            <Button
                                className={styles.paper_wrapper__button}
                                style={button_margin}
                                variant="contained">
                                <SettingsIcon/>
                            </Button>
                        </Link>
                        <Button  variant="contained" color="primary">
                            <MessageIcon className={styles.paper_wrapper__button_icon}/>
                            Написать
                        </Button>
                    </div>
                </div>
                <Box display={'flex'} marginBottom={'10px'} marginTop={'10px'} >
                    <Typography style={typography_style}>
                        +208
                    </Typography>
                    <Typography>2 подписчика</Typography>
                </Box>
                <Typography>На проекте с 15 сен 2016</Typography>

                <Tabs className={styles.tabs} value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Статьи"/>
                    <Tab label="Комментарии"/>
                    <Tab label="Закладки"/>
                </Tabs>
            </Paper>
            <div className={styles.followers}>
                <div className={styles.followers_post}>
                    <Post/>
                </div>
                <Paper className={styles.followers_paper} elevation={0}>
                    <b>Подписчики</b>
                    <div className={styles.followers_paper_wrapper}>
                        <Avatar
                            className={styles.followers_paper_wrapper__img}
                            src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
                        />
                        <Avatar
                            className={styles.followers_paper_wrapper__img}
                            src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
                        />
                    </div>
                </Paper>
            </div>
        </MainLayout>
    );
}
