import {Box, Button} from "@material-ui/core";
import {MainLayout} from "../src/layouts/MainLayouts";
import {WriteForm} from "../src/components/WriteForm/WriteForm";


export default function WritePage() {
    return <MainLayout style={'writePage_mainLayout'} hideComments hideLeftMenu contentFullWidth>
        <Box height={'100%'} display={'flex'} flexDirection={'column'}>
            <WriteForm placeholder={'Заголовок'}/>
            <Box display={'flex'} justifyContent={'flex-start'} marginBottom={'24px'}>
                  <Button  variant="contained" color="primary">
                Опубликовать
            </Button>
            </Box>
        </Box>
    </MainLayout>
}