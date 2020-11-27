import React, { useEffect, useState } from "react"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import _ from "lodash"
import { TramRounded } from "@material-ui/icons"

export default function TableSchoolXAct(props) {
  let response
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

  // const columns = [
  //   {
  //     name: "number",
  //     label: "ลำดับ",
  //     options: {
  //       filter: false,
  //       sort: true,
  //     },
  //   },
  //   {
  //     name: "data_school_name",
  //     label: "สถาบันการศึกษา",
  //     options: {
  //       filter: true,
  //       sort: true,
  //     },
  //   },
  //   {
  //     name: "activity_name",
  //     label: "Act 1",
  //     options: {
  //       filter: true,
  //       sort: true,
  //     },
  //   },

  //   {
  //     name: "sum",
  //     label: "All",
  //     options: {
  //       filter: true,
  //       sort: true,
  //     },
  //   },
  // ]

  // const data = [
  //   { number: "1", school: "Test Corp", IT: "10", CS: "4",DSI: "1",All:'12'},
  //   { number: "2", school: "Test Corp", IT: "2", CS: "4",DSI: "2",All:'12' },
  //   { number: "3", school: "Test Corp", IT: "9", CS: "3",DSI: "2",All:'12' },
  //   {
  //       number: "4",
  //       school: "Test Corp",
  //       IT: "3",
  //       CS: "2",DSI: "1",All:'12'
  //   },
  //   { number: "5", school: "Test Corp", IT: "5", CS: "4",DSI: "1",All:'12' },
  // ]

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
  // const data = [
  //   {
  //     school_name: "school1",
  //     activity: [
  //       { amount1: 10, act1: "act1" },
  //       { amount1: 50, act2: "act2" },
  //     ],
  //   },
  // ]
  // const data = [
  //   { school_name: "school2", wip10: 1, wip11: 2, wip12: 3, wip13: 4 },
  //   { school_name: "school", wip10: 1, wip11: 2, },
  // ]
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

  // const column3 =  column2.map(items => {
  //   const act = items.activity.map(activity => {
  //     return ([{name : items.school_name} , {}])
  //   })it

  // })

  // const column2 = [
  //   {
  //     name: "school_name",
  //     label: "fdgfdgdfg",
  //     options: {
  //       filter: false,
  //       sort: true,
  //     },
  //   },
  //   {
  //     name: "wip10",
  //     label: "schoolname",
  //     options: {
  //       filter: false,
  //       sort: true,
  //     },
  //   },
  //   {
  //     name: "wip11",
  //     label: "schoolname",
  //     options: {
  //       filter: false,
  //       sort: true,
  //     },
  //   },
  // ]
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
