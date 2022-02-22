import React from 'react'

function MainTable (){
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
