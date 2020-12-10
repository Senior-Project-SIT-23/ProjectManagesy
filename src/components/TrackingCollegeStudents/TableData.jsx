import React from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import Typography from "@material-ui/core/Typography"
import { Table } from "@material-ui/core"
import _ from 'lodash'

export default function EnhancedTable(props) {
  const columns = [
    // {
    //     name: "data_id",
    //     label: "รหัสประชาชน",
    //     options: {
    //       filter: true,
    //       sort: true,
    //     },
    //   },
    {
      name: "data_entrance_year",
      label: "ปีการศึกษา",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_id",
      label: "รหัสบัตรประชาชน",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
        name: "data_student_id",
        label: "รหัสนักศึกษา",
        options: {
          filter: true,
          sort: true,
        },
      },
    {
      name: "data_first_name",
      label: "ชื่อ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_surname",
      label: "นามสกุล",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_gender",
      label: "เพศ",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_major",
      label: "สาขา",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_gpax",
      label: "เกรดเฉลี่ย",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_tel",
      label: "เบอร์ติดต่อ",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_email",
      label: "email",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_school_name",
      label: "โรงเรียนเดิม",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_province",
      label: "จังหวัดของโรงเรียน",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_admission",
      label: "โครงการที่สอบเข้า",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "num_of_activity",
      label: "จำนวนกิจกรรมที่เข้าร่วม",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "activity",
      label: "จำนวนกิจกรรมที่เข้าร่วม",
      options: {
        filter: false,
        sort: false,
        display:false,
        download: false,
        viewColumns: false
      },
    },
    {
      name: "all_activity",
      label: "กิจกรรมที่เข้าร่วม",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false
      },
    },
  ]

  // const data = [
  //   ["60130500077", "รวิสรา เกตุแก้ว", "IT", "2.65", "08xxxxxxxx","22"],
  //   ["60130500105", "อินทิรา ตั้งนิรามัย", "IT",  "3.12", "08xxxxxxxx","20"],
  //   ["60130500038", "ธนัชชา พิพม์ศิริกุล", "CS",  "2.43", "08xxxxxxxx","28"],
  //   ["60130500108", "ธัญวรัตน์ ดวงสีหา", "CS",  "2.83", "08xxxxxxxx","24"],
  //   ["60130500104", "อิทธิเดช ชาญสาธิต", "DSI",  "3.24", "08xxxxxxxx","21"],
  //   ["60130500099", "สุภาวรรณ ชูเชิด", "DSI",  "3.50", "08xxxxxxxx","23"],
  // ]
  console.log("props",props.allData)



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
      console.log("rowData",rowData)
      return (
        <>
          <TableRow>
            <TableCell colSpan={colSpan}>
              <Typography gutterBottom component="div" className="font-athiti" style={{color:"#104976"}}>
                รายชื่อกิจกรรมที่เข้าร่วม
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b className="font-athiti text-gray-600">ชื่อกิจกรรม</b>
                    </TableCell>
                    <TableCell>
                      <b className="font-athiti text-gray-600">สาขาที่จัดกิจกรรม</b>
                    </TableCell>
                    <TableCell>
                      <b className="font-athiti text-gray-600">ปีที่จัดกิจกรรม</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {_.map(rowData[14],(data,index) =>(
                  <TableRow>
                    <TableCell component="th" scope="row">
                       {data.activity_student_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                       {data.activity_student_major}
                    </TableCell>
                <TableCell>{data.activity_student_year}</TableCell>
                  </TableRow>
                  ))}
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
    downloadOptions: { filename: `ข้อมูลนักศึกษา.csv` },
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
          data={props.allData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </>
  )
}

