import React from "react"

import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

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
    download: false,
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
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

