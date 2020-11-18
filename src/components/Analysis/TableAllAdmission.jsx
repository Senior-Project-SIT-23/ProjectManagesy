import React from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

export default function TableAllAdmission() {
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
      name: "school",
      label: "โครงการสมัครสอบ",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "IT",
      label: "IT",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "CS",
      label: "CS",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
        name: "DSI",
        label: "DSI",
        options: {
          filter: true,
          sort: false,
        },
      },
    {
        name: "All",
        label: "All",
        options: {
          filter: true,
          sort: false,
        },
    },
  ]

  const data = [
    { number: "1", school: "Test Corp", IT: "10", CS: "4",DSI: "1",All:'12'},
    { number: "2", school: "Test Corp", IT: "2", CS: "4",DSI: "2",All:'12' },
    { number: "3", school: "Test Corp", IT: "9", CS: "3",DSI: "2",All:'12' },
    {
        number: "4",
        school: "Test Corp",
        IT: "3",
        CS: "2",DSI: "1",All:'12'
    },
    { number: "5", school: "Test Corp", IT: "5", CS: "4",DSI: "1",All:'12' },
  ]

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5,10,20],
    onDownload: (buildHead, buildBody, columns, data) => {
      return "\uFEFF" + buildHead(columns) + buildBody(data); 
  } 

  }


  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"จำนวนนักเรียนจากโรงเรียนที่มีสิทธิ์เข้าศึกษาที่คณะ"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
