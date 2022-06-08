import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import {MainLayout} from "../src/layouts/MainLayouts";
import {FollowButton} from "../src/components/FollowButton";
import styles from './rating.module.scss'


const typography_style = {
  fontWeight: 'bold', fontSize: 30, marginBottom: 6
}as const
const typography_font_size = {
  fontSize: 15
}as const

export default function Rating() {
  return (
    <MainLayout>
      <Paper className={styles.paper} elevation={0}>
        <Typography variant="h5" style={typography_style}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={typography_font_size}>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
          рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className={styles.tabs} value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За всё время" />
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
            <TableRow>
              <TableCell component="th" scope="row">
                <span className={styles.span}>1</span>Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
}
