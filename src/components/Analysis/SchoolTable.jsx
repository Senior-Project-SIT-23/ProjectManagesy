import React from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

export default function SchoolTable(props) {
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
    // {
    //   name: "index",
    //   label: "ลำดับ",
    //   options: {
    //     filter: false,
    //     sort: true,
    //   },
    // },
    {
      name: "data_school_name",
      label: "สถาบันการศึกษา",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "IT",
      label: "IT",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "CS",
      label: "CS",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "DSI",
      label: "DSI",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "SUM",
      label: "All",
      options: {
        filter: false,
        sort: true,
      },
    },
  ]

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20],
    downloadOptions: { filename: `สถิตินักเรียนจากโรงเรียนที่มีสิทธิ์เข้าศึกษาที่คณะ.csv` },
    onDownload: (buildHead, buildBody, columns, data) => {
      return "\uFEFF" + buildHead(columns) + buildBody(data)
    },
    sortOrder: {
      name: "SUM",
      direction: "desc",
    },
  }

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"สถิตินักเรียนจากโรงเรียนที่มีสิทธิ์เข้าศึกษาที่คณะ"}
          data={props.data.school_admission}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
