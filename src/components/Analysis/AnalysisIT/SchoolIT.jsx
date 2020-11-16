import React from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

export default function SchoolIT() {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          titleText: {
            fontFamily: "Athiti",
          },
        },
        MUIDataTable: {
            
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
      name: "school",
      label: "สถาบันการศึกษา",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "countIT",
      label: "จำนวนนักเรียน",
      options: {
        filter: true,
        sort: true,
      },
    },
   
  ]

  const data = [
    { number: "1", school: "Test Corp",All:'12'},
    { number: "2", school: "Test Corp",All:'12' },
    { number: "3", school: "Test Corp",All:'12' },
    {
        number: "4",
        school: "Test Corp",
        All:'12'
    },
    { number: "5", school: "Test Corp",All:'12' },
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
          title={"จำนวนนักเรียนจากโรงเรียนที่มีสิทธิ์เข้าศึกษาต่อสาขาเทคโนโลยีสารสนเทศ(IT)"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
