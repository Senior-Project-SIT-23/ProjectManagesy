import React, { component } from "react"
import IconButton from "@material-ui/core/IconButton"
import DialogCreateActivity from "./DialogCreateActivity"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import MUIDataTable from "mui-datatables"
import { apiDeleteActivities } from "../../service/activity"
import Tooltip from "@material-ui/core/Tooltip"
import DialogConfirmDelete from "./DialogConfirmDelete"
import { Link, navigate } from "@reach/router"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

export default function EnhancedTable(props) {
  function showDataInFile(id) {
    navigate(`/ShowDataInFileActivity/${id}`)
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
        name: "activity_name",
        label: "ชื่อกิจกรรม",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a
              onClick={() => showDataInFile(tableMeta.rowData[10])}
              style={{ cursor: "pointer" }}
            >
              {value}
            </a>
          ),
          filter: false,
        },
      },
      { name: "activity_major", label: "สาขา" },
      { name: "activity_year", label: "ปีที่จัดกิจกรรม" },
      {
        name: "activity_file_name",
        label: "ไฟล์",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a
              href={`${process.env.REACT_APP_BE_STORAGE}/${tableMeta.rowData[5]}`}
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
        name: "activity_name",
        label: "แก้ไข",
        options: {
          customBodyRender: (value, tableMeta) => (
            <IconButton>
              <EditOutlinedIcon
                onClick={() =>
                  props.handleClickEdit(changeValue(tableMeta.rowData))
                }
              />
            </IconButton>
          ),
          filter: false,
        },
      },
      { name: "activity_file", options: { display: false, filter: false ,viewColumns: false } },
      { name: "updated_at", options: { display: false, filter: false ,viewColumns: false} },
      { name: "keep_file_name", options: { display: false, filter: false ,viewColumns: false} },
      { name: "created_at", options: { display: false, filter: false ,viewColumns: false} },
      { name: "activity_file_id", options: { display: false, filter: false ,viewColumns: false} },
      { name: "activity_id", options: { display: false, filter: false ,viewColumns: false} },
    ]
  }

  const data = props.rows

  const changeValue = (data) => {
    const dataRes = {
      activity_file: data[5],
      activity_file_id: data[9],
      activity_file_name: data[3],
      activity_id: data[10],
      activity_major: data[1],
      activity_name: data[0],
      activity_year: data[2],
      created_at: data[7],
      keep_file_name: data[7],
      updated_at: 1,
    }
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

        Id.push(data[n].activity_id)
      }

      const datRes = { activity_id: Id }
      await apiDeleteActivities(datRes)
    },
    download: {
      activity_id: false
    }
  }
  // const classes = useStyles();

  const clickedit = () => {
    props.handleClickEdit()
  }

  
  return (
    <div>
      {/* <Tooltip title="Delete">
            <DialogConfirmDelete  handleDelete={props.handleDelete}/>
        </Tooltip> */}
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={"mb-2"}>
          <DialogCreateActivity
            {...props}
            open={props.open}
            setOpen={props.setOpen}
            handleClickOpen={props.handleClickOpen}
            handleClose={props.handleClose}
            handleSubmit={props.handleSubmit}
            topic={props.topic}
            setTopic={props.setTopic}
            edit={true}
          />
        </div>
      </Grid>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={" กิจกรรมนักเรียน"}
          data={data}
          columns={columns(clickedit)}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
