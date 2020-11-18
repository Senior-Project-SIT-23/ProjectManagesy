import React from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import Typography from "@material-ui/core/Typography"
import { Table } from "@material-ui/core"

export default function EnhancedTable(props) {
  const columns = [
    {
        name: "studentid",
        label: "รหัสนักศึกษา",
        options: {
          filter: true,
          sort: true,
        },
      },
    {
      name: "name",
      label: "ชื่อ-นามสกุล",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "major",
      label: "สาขา",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "gpax",
      label: "เกรดเฉลี่ย",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "tel",
      label: "เบอร์ติดต่อ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "tel",
      label: "โครงการที่สอบเข้า",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "countAct",
      label: "จำนวนกิจกรรมที่เข้าร่วม",
      options: {
        filter: true,
        sort: true,
      },
    },
  ]

  const data = [
    ["60130500077", "รวิสรา เกตุแก้ว", "IT", "2.65", "08xxxxxxxx","22"],
    ["60130500105", "อินทิรา ตั้งนิรามัย", "IT",  "3.12", "08xxxxxxxx","20"],
    ["60130500038", "ธนัชชา พิพม์ศิริกุล", "CS",  "2.43", "08xxxxxxxx","28"],
    ["60130500108", "ธัญวรัตน์ ดวงสีหา", "CS",  "2.83", "08xxxxxxxx","24"],
    ["60130500104", "อิทธิเดช ชาญสาธิต", "DSI",  "3.24", "08xxxxxxxx","21"],
    ["60130500099", "สุภาวรรณ ชูเชิด", "DSI",  "3.50", "08xxxxxxxx","23"],
  ]

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,

    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1
      return (
        <>
          <TableRow>
            <TableCell colSpan={colSpan}>
              <Typography gutterBottom component="div" className="font-athiti">
                รายชื่อกิจกรรมที่เข้าร่วม
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b className="font-athiti">ชื่อกิจกรรม</b>
                    </TableCell>
                    <TableCell>
                      <b className="font-athiti">ปีที่จัดกิจกรรม</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      XXXXXXXXXXX
                    </TableCell>
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
    download: true,
      onDownload: (buildHead, buildBody, columns, data) => {
        return "\uFEFF" + buildHead(columns) + buildBody(data); 
    } 
  }
  
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          titleText: {
            fontFamily: "Athiti",
          },
        },

      },
    })
  return (
    <>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"ข้อมูลนักศึกษา"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </>
  )
}

