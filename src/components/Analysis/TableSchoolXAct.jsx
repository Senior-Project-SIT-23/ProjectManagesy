import React, { useEffect, useState } from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import _ from "lodash"

export default function TableSchoolXAct(props) {
  // let response
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
  console.log("sss", props.data.school_activity)

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20],
    downloadOptions: {
      filename: `สถิตินักเรียนจากโรงเรียนที่เข้าร่วมกิจกรรม.csv`,
    },
    onDownload: (buildHead, buildBody, columns, data) => {
      return "\uFEFF" + buildHead(columns) + buildBody(data)
    },
    sortOrder: {
      name: "SUM",
      direction: "desc",
    },
  }

  console.log("54564654", props.data)

  const column = [
    {
      name: "data_school_name",
      label: "สถาบันการศึกษา",
      options: { 
        filter: true },
    },
  ]
  _.map(props.data.Header, (head) => {
    column.push({
      name: head.activity_student_name,
      label: head.activity_student_name,
    })
  })
  column.push({
    name: "SUM",
    label: "All",
  })
  const temp = []
  column.map((item) => {
    temp.push({
      name: item.name,
      label: item.label,
      options: {
        customBodyRender: (value, tableMeta) => {
          if (!value) {
            return 0
          } else {
            return value
          }
        },
        filter: true,
      },
    })
  })

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"สถิตินักเรียนจากโรงเรียนที่เข้าร่วมกิจกรรม"}
          data={props.data.school_activity}
          // data={data}
          columns={temp}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
