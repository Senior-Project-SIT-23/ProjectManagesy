import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default function TableTop5Act(props) {
  function createData(id, activity) {
    return { id, activity };
  }
  
  const rows = [
    createData(1,'Frozen yoghurt'),
    createData(2,'Ice cream sandwich'),
    createData(3,'Eclair'),
    createData(4,'Cupcake'),
    createData(5,'Gingerbread'),
  ];
  return (
    <div>
     
      <TableContainer component={Paper}>
        <div className="font-athiti text-center"><b>5 อันดับกิจกรรมที่นักศึกษาเคยเข้าร่วมมากที่สุด</b></div>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>อันดับ</TableCell>
            <TableCell align="left">กิจกรรม</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row" width="10" padding="12px">
                {row.id}
              </TableCell>
              <TableCell align="left" padding="12px">{row.activity}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  )
}
