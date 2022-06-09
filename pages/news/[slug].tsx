import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, {ReactElement} from 'react';
import {MainLayout} from "../../src/layouts/MainLayouts";
import {FullPost} from "../../src/components/FullPost";
import {Comment} from "../../src/components/Comment";


const user = {
  user:{
    fullname:'dmitriy'
  },
  text: 'Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ изрейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.'
}

const style = {
  marginBottom:'50px'
}as const


export default function Home():ReactElement {
  return (
    <MainLayout styleReactNode={style} contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-20" />
        <Comment user={user.user} text={user.text}/>
        <Comment user={user.user} text={user.text}/>
        <Comment user={user.user} text={user.text}/>
      </Paper>
    </MainLayout>
  );
}
