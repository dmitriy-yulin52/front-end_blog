import * as React from 'react';
import {MainLayout} from "../src/layouts/MainLayouts";
import {Box} from "@mui/material";

type Props = {

};
export default function Signin(props: Props) {
    return (
       <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
           <h2>Signin</h2>
       </Box>
    );
};