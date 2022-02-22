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
    return (
        <div className="container">
            <Card>
                <Button color="primary" variant="contained"　href={`/example`}>Exampleに遷移</Button>
            </Card>
        </div>
    );
}

export default Home;
