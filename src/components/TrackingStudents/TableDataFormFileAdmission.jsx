import React from "react"
import IconButton from "@material-ui/core/IconButton"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

export default function EnhancedTable(props) {
  const columns = [
    
    {
      name: "data_first_name",
      label: "ชื่อ",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "data_surname",
      label: "นามสกุล",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "data_gpax",
      label: "GPAX",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_proggramme",
      label: "แผนการเรียน",
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
  ]

  // const data = [
  //   ["รวิสรา เกตุแก้ว", "ม.4","3.4", "xxxxxx@gmail.com", "08xxxxxxxx","อัสสัมชัญศึกษา"],
  //   ["อินทิรา ตั้งนิรามัย", "ม.5","3.5",  "xxxxxx@gmail.com", "08xxxxxxxx","นาคประสิทธิ์"],
  //   ["ธนัชชา พิพม์ศิริกุล", "ม.4", "3.25", "xxxxxx@gmail.com", "08xxxxxxxx","อุดรพิทยานุกูล"],
  //   ["ธัญวรัตน์ ดวงสีหา", "ม.6", "2.94", "xxxxxx@gmail.com", "08xxxxxxxx","ดัดดรุณี"],
  //   ["อิทธิเดช ชาญสาธิต", "ม.6", "3.12", "xxxxxx@gmail.com", "08xxxxxxxx","เตรียมอุดมศึกษาน้อมเกล้า"],
  //   ["สุภาวรรณ ชูเชิด", "ม.5", "3.89", "xxxxxx@gmail.com", "08xxxxxxxx","พระหฤทัยคอนแวนต์"],
  // ]

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    download: true,
    downloadOptions: {filename: `${props.title}.csv`},
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
          data={props.data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </>
  )
}
