import React　from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((them)=> createStyles({
    card:{
        //theme.spacing(2);  `${8 * 2}px` = '16px'
        margin: them.spacing(5),
        padding: them.spacing(3),
    },
    table:{
        
    },
    tableHead:{
        backgroundColor: purple['A100']
    },
}));

function MainTable (props){

    const classes = useStyles();

    const {headerList,rows} = props; //親コンポーネントからpropsで受け取る
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
             {/* ヘッダー部分 */}
            <TableHead className={classes.tableHead}>
              <TableRow>
                  {headerList.map((items,index)=>(
                      <TableCell align="center" key={index}>{items}</TableCell>
                  ))}
              </TableRow>
            </TableHead>
            {/* ボディ部分 */}
            <TableBody>
             　{rows.map((row,index)=>(
                 <TableRow key={index}>
                     {Object.keys(row).map(function(key,i){
                         return(
                         <TableCell align="center" key={i}>{row[key]}</TableCell>
                         )
                     })}
                 </TableRow>
             ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}
export default MainTable;
