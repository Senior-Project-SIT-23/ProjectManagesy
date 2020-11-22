import React from "react"
import MUIDataTable, { ExpandButton } from "mui-datatables"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Table } from "@material-ui/core"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import _ from 'lodash'

export default function TableMatched(props) {
  const columns = [
    {
      name: "id",
      label: "รหัสบัตรประชาชน",
      options: {
        filter: true,
        sort: true,
        display: true
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
      name: "data_degree",
      label: "ระดับชั้น",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_email",
      label: "email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_tel",
      label: "เบอร์ติดต่อ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_school_name",
      label: "โรงเรียน",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "num_of_activity",
      label: "กิจกรรมที่เข้าร่วม",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "num_of_admission",
      label: "โครงการที่สมัครสอบ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "activity",
      label: "activity",
      options: {
        filter: false,
        sort: false,
        display: false,
        download: false
      },
    },
    {
      name: "admission",
      label: "admission",
      options: {
        filter: false,
        sort: false,
        display: false,
        download: false
      },
    },

    {
      name: "all_activity",
      label: "กิจกรรมที่เข้าร่วม",
      options: {
        filter: false,
        sort: false,
        display: false,
      },
    },

    {
      name: "all_admission",
      label: "โครงการที่สมัครสอบ",
      options: {
        filter: false,
        sort: false,
        display: false,
      },
    },
  ]

  const options = {
    filter: true,
    filterType: "checkbox",
    responsive: "standard",
    selectableRowsHeader: false,
    selectableRows: false,
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    print: false,
   
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1
      console.log("ddd", rowData)
      console.log("props.dataMatch", props.dataMatch)
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
                      <b className="font-athiti text-gray-600">ปีที่จัดกิจกรรม</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {_.map(rowData[9], (data, index) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {data.activity_student_name}
                      </TableCell>
                      <TableCell>{data.activity_student_year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Typography
                gutterBottom
                component="div"
                className="font-athiti mt-2"
                style={{color:"#104976"}}
              >
                รายชื่อโครงการที่สมัครสอบ
              </Typography>
              <Table>
                <TableHead className="font-bold">
                  <TableRow>
                    <TableCell>
                      <p className="font-athiti text-gray-600">ชื่อโครงการที่สมัครสอบ</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-athiti text-gray-600">สาขา</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-athiti text-gray-600">รอบที่สมัครสอบ</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-athiti text-gray-600">ปีที่สมัครสอบ</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {_.map(rowData[10], (data, index) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {data.admission_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {data.admission_major}
                    </TableCell>
                    <TableCell>{data.round_name}</TableCell>
                    <TableCell>{data.admission_year}</TableCell>
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

    downloadOptions: { filename: `ข้อมูลนักเรียน.csv` },
    onDownload: (buildHead, buildBody, columns, data) => {
      return "\uFEFF" + buildHead(columns) + buildBody(data)
    },
  }

  const theme = createMuiTheme({
    overrides: {
      MUIDataTableSelectCell: {
        expandDisabled: {
          // Soft hide the button.
          visibility: "hidden",
        },
      },
      MUIDataTableToolbar: {
        titleText: {
          fontFamily: "Athiti",
        },
      },
    },
  })

  const components = {
    ExpandButton: function (props) {
      //   if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{width:'24px'}} />;
      return <ExpandButton {...props} />
    },
  }
  return (
    <MuiThemeProvider theme={theme}>
      <MUIDataTable
        title={"ข้อมูลนักเรียน"}
        data={props.dataMatch}
        columns={columns}
        options={options}
        components={components}
      />
    </MuiThemeProvider>
  )
}
