import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { lighten, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { fade } from "@material-ui/core/styles"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DialogCreateAdmission from "./DialogCreateAdmission"

import DialogDeleteAdmission from "./DialogDeleteAdmission"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import {apiDeteteAdmission,} from "../../service/admission"
import { Link, navigate } from "@reach/router"


export default function EnhancedTable(props) {
  // 
  function showDataInFile(id,name) {
    navigate(`/ShowDataFileAdmission/${id}/${name}`)
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

  const columns = () => {
    return [
      {
        name: "admission_name",
        label: "ชื่อโครงการสมัครสอบ",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a
              onClick={() => showDataInFile(tableMeta.rowData[11],tableMeta.rowData[0])}
              style={{ cursor: "pointer" }}
            >
              {value}
            </a>
          ),
          filter: false,
        },
      },
      { name: "round_name", label: "รอบ" },
      { name: "admission_major", label: "สาขา" },
      { name: "admission_year", label: "ปีการศึกษา" },
      {
        name: "admission_file_name",
        label: "ไฟล์",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a
              href={`${process.env.REACT_APP_BE_STORAGE}/${tableMeta.rowData[6]}`}
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              {value}
            </a>
          ),
          filter: false,
        },
      },
      {
        name: "",
        label: "แก้ไข",
        options: {
          customBodyRender: (value, tableMeta) => (
            <IconButton>
              <EditOutlinedIcon
                onClick={() => {
                  console.log(tableMeta.rowData)
                  props.handleClickEditAdmission(changeValue(tableMeta.rowData))
                }}
              />
            </IconButton>
          ),
          filter: false,
        },
      },
      { name: "admission_file", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "updated_at", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "keep_file_name", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "created_at", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "admission_file_id", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "admission_id", options: { display: false, filter: false ,viewColumns: false,download:false} },
     
    ]
  }

  const data = props.rowsAdmissions
 
  const changeValue = (data) => {
    console.log(data)
    const dataRes = {
      
      admission_name: data[0],
      round_name:data[1],
      admission_major: data[2],
      admission_year: data[3],
      admission_file_name: data[4],
      
      admission_file: data[6],
      updated_at: data[7],
      keep_file_name: data[8],
      created_at: data[9],
      admission_file_id: data[10],
      admission_id: data[11]
    }
    console.log(dataRes)
    return dataRes
  }

  const options = {
    filterType: "checkbox",
    onRowsDelete: async (deleted) => {
      console.log(data)
      console.log(deleted.data)
      let Id = []
      for (let i = 0; i < deleted.data.length; i++) {
        let n = deleted.data[i].index

        Id.push(data[n].admission_id)
      }

      const datRes = { admission_id: Id }
      await apiDeteteAdmission(datRes)
    },
    download: {
      activity_id: false
    },
    print: false
  }
  // const classes = useStyles();

  const clickedit = () => {
    props.handleClickEditAdmission()
  }

  
  return (
    <div>
      {/* <Tooltip title="Delete">
            <DialogConfirmDelete  handleDelete={props.handleDelete}/>
        </Tooltip> */}
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={"mb-2"}>
         
          <DialogCreateAdmission {...props} edit={true}/>
        </div>
      </Grid>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"โครงการสมัครสอบ"}
          data={data}
          columns={columns(clickedit)}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
