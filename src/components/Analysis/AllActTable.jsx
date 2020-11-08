import React from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

export default function AllActTable() {
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
      name: "activityname",
      label: "ชื่อกิจกรรม",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "count",
      label: "จำนวนผู้เข้าร่วมทั้งหมด",
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
    rowsPerPageOptions: [5,10,20]
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
