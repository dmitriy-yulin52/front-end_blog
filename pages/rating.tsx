import {Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography,} from '@material-ui/core';
import {MainLayout} from "../src/layouts/MainLayouts";
import {FollowButton} from "../src/components/FollowButton";
import {GlobalApi} from "../src/services/api";
import {memo, ReactElement} from "react";
import {ResponseUserType} from "../src/services/api/user/user-api-types";


const typography_style = {
    fontWeight: 'bold', fontSize: 30, marginBottom: 6
} as const
const typography_font_size = {
    fontSize: 15
} as const


type RatingProps = {
    users: ResponseUserType[]
}

const Rating = memo(function Rating(props: RatingProps): ReactElement {

    const {users} = props

    return (
        <MainLayout>
            <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
                <Typography variant="h5" style={typography_style}>
                    Рейтинг сообществ и блогов
                </Typography>
                <Typography style={typography_font_size}>
                    Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
                    рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
                </Typography>
                <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Август"/>
                    <Tab label="За 3 месяца"/>
                    <Tab label="За всё время"/>
                </Tabs>
            </Paper>

            <Paper elevation={0}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя пользователя</TableCell>
                            <TableCell align="right">Рейтинг</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => {

                            return <TableRow key={user.create}>
                                <TableCell component="th" scope="row">
                                    <span className="mr-15">1</span>{user.fullName}
                                </TableCell>
                                <TableCell align="right">{!user.commentCount ? 0 : user.commentCount * 2}</TableCell>
                                <TableCell align="right">
                                    <FollowButton/>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </MainLayout>
    );
})


export const getServerSideProps = async (ctx) => {
    try {
        const users = await GlobalApi().user.getAll()
        return {
            props: {
                users
            }
        }
    } catch (e) {
        console.log(e, 'error rating')
    }

    return {
        props: {
            users: null
        }
    }
}


export default  Rating

