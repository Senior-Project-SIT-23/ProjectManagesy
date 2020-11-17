import React from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";

export default function TableAdmissionXSchoolCS() {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          titleText: {
            fontFamily: "Athiti",
          },
        },
        MUIDataTableBodyCell: {
          root: {
            
          }
        }
      },
    })
   
    
  const columns = [
    {
      name: "number",
      label: "ลำดับ",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "activityname",
      label: "ชื่อโครงการสมัครสอบ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "count",
      label: "จำนวนผู้สมัครสอบทั้งหมด",
      options: {
        filter: true,
        sort: false,

      },
    },
    
  ]

  const data = [
    { number: "1", activityname: "Test Corp", count: "10", },
    { number: "2", activityname: "Test Corp", count: "2", },
    { number: "3", activityname: "Test Corp", count: "9",  },
    {
        number: "4",
        activityname: "Test Corp",
        count: "3",
       
    },
    { number: "5", activityname: "Test Corp", count: "5",  },
  ]

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5,10,20],
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,

    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1
      console.log("ddd",rowData)

      return (
        <>
          <TableRow>
            <TableCell colSpan={colSpan}>
              <Typography gutterBottom component="div" className="font-athiti">
                รายชื่อโรงเรียน 10 อันดับแรกที่นักเรียนมาสมัครสอบเยอะที่สุด
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell>
                      <b className="font-athiti">ลำดับ</b>
                    </TableCell>
                    <TableCell>
                      <b className="font-athiti">ชื่อโรงเรียน</b>
                    </TableCell>
                    <TableCell>
                      <b className="font-athiti">จำนวนนักเรียนที่มาสมัครสอบ</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      X
                    </TableCell>
                    <TableCell>XXXXXXXX</TableCell>
                    <TableCell>XXXXXXXX</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </>
      )
    },
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) =>
      console.log(curExpanded, allExpanded, rowsExpanded),
  
  }
  

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"ตารางแสดงจำนวนผู้เข้าร่วมกิจกรรม"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
