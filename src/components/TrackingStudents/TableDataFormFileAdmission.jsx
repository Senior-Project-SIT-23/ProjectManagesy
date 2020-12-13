import React from "react"
import IconButton from "@material-ui/core/IconButton"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

export default function EnhancedTable(props) {
  const columns = [
    {
      name: "data_year",
      label: "ปีที่สมัครสอบ",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "admission_categories",
      label: "รูปแบบการรับสมัคร",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "admission_name",
      label: "ชื่อโครงการสมัครสอบ",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "admission_major",
      label: "สาขาที่สมัครสอบ",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_id",
      label: "รหัสบัตรประชาชน",
      options: {
        filter: false,
        sort: true,
      },
    },
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
      name: "data_gender",
      label: "เพศ",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_gpax",
      label: "GPAX",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "data_programme",
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
      name: "data_province",
      label: "จังหวัดของโรงเรียน",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_education",
      label: "จังหวัดของโรงเรียน",
      options: {
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_email",
      label: "email",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "data_tel",
      label: "เบอร์ติดต่อ",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "status",
      label: "สถานะ",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          if (value === 1) {
            return "ยื่นสมัครสอบ"
          }else if(value === 2) {
            return "มีสิทธิ์สอบสัมภาษณ์"
          }else if(value === 3){
            return "มีสิทธิ์เข้าศึกษา"
          }else if(value === 4){
            return "ยืนยันเข้าศึกษาต่อ"
          }else if(value === 5){
            return "ยืนยันการชำระเงิน"
          }
        },
      },
    },
  ]

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
