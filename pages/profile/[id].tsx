import Link from 'next/link';
import {Paper, Avatar, Typography, Button, Tabs, Tab} from '@material-ui/core';
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';
import {MainLayout} from "../../src/layouts/MainLayouts";
import {Post} from "../../src/components/Post";
import {ReactElement} from "react";

const avatar_style = {
    width: 120, height: 120, borderRadius: 6
}as const

const button_settings_icon_style = {
    height: 42, minWidth: 45, width: 45, marginRight: 10
}as const

const button_style = {
    height: 42
}as const

const typography_style = {
    fontWeight: 'bold', color: '#35AB66'
}as const

const typography_font_weight = {
    fontWeight: 'bold'
}as const

const paper_style = {
    width: 300
}as const


export default function Profile():ReactElement {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
                <div className="d-flex justify-between">
                    <div>
                        <Avatar
                            style={avatar_style}
                            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                        />
                        <Typography style={typography_font_weight} className="mt-10" variant="h4">
                            Amon Bower
                        </Typography>
                    </div>
                    <div>
                        <Link href="/profile/settings">
                            <Button
                                style={button_settings_icon_style}
                                variant="contained">
                                <SettingsIcon/>
                            </Button>
                        </Link>
                        <Button style={button_style} variant="contained" color="primary">
                            <MessageIcon className="mr-10"/>
                            Написать
                        </Button>
                    </div>
                </div>
                <div className="d-flex mb-10 mt-10">
                    <Typography style={typography_style} className="mr-15">
                        +208
                    </Typography>
                    <Typography>2 подписчика</Typography>
                </div>
                <Typography>На проекте с 15 сен 2016</Typography>

                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Статьи"/>
                    <Tab label="Комментарии"/>
                    <Tab label="Закладки"/>
                </Tabs>
            </Paper>
            <div className="d-flex align-start">
                <div className="mr-20 flex">
                    <Post/>
                </div>
                <Paper style={paper_style} className="p-20 mb-20" elevation={0}>
                    <b>Подписчики</b>
                    <div className="d-flex mt-15">
                        <Avatar
                            className="mr-10"
                            src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
                        />
                        <Avatar
                            className="mr-10"
                            src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
                        />
                    </div>
                </Paper>
            </div>
        </MainLayout>
    );
}