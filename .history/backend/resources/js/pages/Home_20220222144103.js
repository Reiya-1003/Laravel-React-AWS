import React from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';

//スタイルの定義
const useStyles = makeStyles((them)=> createStyles({
    card:{
        //theme.spacing(2);  `${8 * 2}px` = '16px'
        margin: them.spacing(5),
        padding: them.spacing(3),
    },
    table:{
        maxWidth:650,
    },
    tableHead:{
        backgroundColor: purple['A100']
    },
}));

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];


function Home() {
    const classes = useStyles();
    return (
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                  <div className="card">
                    <h1>タスク管理</h1>
                    　<TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                             {/* ヘッダー部分 */}
                            <TableHead className={classes.tableHead}>
                              <TableRow>
                                  {headerList.map((items,index)=>(
                                      <TableCell align="center" key={index}>{item}</TableCell>
                                  ))}
                              </TableRow>
                            </TableHead>
                            {/* ボディ部分 */}
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">森田ひかる</TableCell>
                                    <TableCell align="center">ボイトレ</TableCell>
                                    <TableCell align="center"><Button　color="secondary" variant="contained">編集</Button></TableCell>
                                    <TableCell align="center"><Button　color="primary" variant="contained">完了</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">東村芽依</TableCell>
                                    <TableCell align="center">トレーニング</TableCell>
                                    <TableCell align="center"><Button　color="secondary" variant="contained">編集</Button></TableCell>
                                    <TableCell align="center"><Button　color="primary" variant="contained">完了</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                  </div>

              </div>
            </div>
        </div>
    );
}

export default Home;
