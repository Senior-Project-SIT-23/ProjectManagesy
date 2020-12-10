import React from "react"
import IconButton from "@material-ui/core/IconButton"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

export default function TableDataInFile(props) {
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
      name: "data_entrance_year",
      label: "ปีการศึกษา",
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
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
    {
      name: "data_student_id",
      label: "รหัสนักศึกษา",
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
      name: "data_major",
      label: "สาขา",
      options: {
        filter: false,
        sort: true,
        
      },
    },
    {
      name: "data_gpax",
      label: "เกรดเฉลี่ย",
      options: {
        filter: false,
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
        name: "data_admission",
        label: "โครงการที่สมัครเข้า",
        options: {
          filter: false,
          sort: true,
        },
    },
    {
      name: "data_tel",
      label: "เบอร์ติดต่อ",
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
        download: true,
        display: false,
        filter: false,
        sort: false,
        viewColumns: false
      },
    },
  ]

  const options = {
    filterType: "checkbox",
    selectableRowsHeader: false,
    selectableRows: false,
    print: false,
    responsive: 'standard',
    download: true,
    downloadOptions: { filename: `${props.title}.csv` },
    onDownload: (buildHead, buildBody, columns, data) => {
      return "\uFEFF" + buildHead(columns) + buildBody(data)
    },
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

      // MUIDataTable: {
      //   responsiveScroll: {
      //     overflowX: "none",
      //     height: "auto",
      //     maxHeight: "auto",
      //   },
      // },
    })
  return (
    <>
      <MuiThemeProvider theme={getMuiTheme()} >
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
