import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
export default function TableTop5Act() {
  return (
    <div>
     
            <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
            <div className="font-athiti text-center">
                <b>5 อันดับกิจกรรมที่นักศึกษาเคยเข้าร่วมมากที่สุด</b>
              </div>
          <TableRow>
            <TableCell>อันดับ</TableCell>
            <TableCell align="left">กิจกรรม</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.activity}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  )
}
