import React from "react"
import IconButton from "@material-ui/core/IconButton"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

export default function EnhancedTable(props) {
  const columns = [
    {
      name: "Name",
      label: "ชื่อ-นามสกุล",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "year",
      label: "ระดับชั้น",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "email",
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
      name: "school",
      label: "โรงเรียน",
      options: {
        filter: true,
        sort: true,
      },
    },
  ]

  const data = [
    ["รวิสรา เกตุแก้ว", "ม.4", "xxxxxx@gmail.com", "08xxxxxxxx","อัสสัมชัญศึกษา"],
    ["อินทิรา ตั้งนิรามัย", "ม.5",  "xxxxxx@gmail.com", "08xxxxxxxx","นาคประสิทธิ์"],
    ["ธนัชชา พิพม์ศิริกุล", "ม.4",  "xxxxxx@gmail.com", "08xxxxxxxx","อุดรพิทยานุกูล"],
    ["ธัญวรัตน์ ดวงสีหา", "ม.6",  "xxxxxx@gmail.com", "08xxxxxxxx","ดัดดรุณี"],
    ["อิทธิเดช ชาญสาธิต", "ม.6",  "xxxxxx@gmail.com", "08xxxxxxxx","เตรียมอุดมศึกษาน้อมเกล้า"],
    ["สุภาวรรณ ชูเชิด", "ม.5",  "xxxxxx@gmail.com", "08xxxxxxxx","พระหฤทัยคอนแวนต์"],
  ]

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    download: false
  }
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          titleText: {
            fontFamily: "Athiti",
          },
        },
        // MUIDataTableSelectCell: {
        //     color: "red",
        // }
      },
    })
  return (
    <>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={props.title}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </>
  )
}
