import React, { component } from "react"
import IconButton from "@material-ui/core/IconButton"
import DialogCreateActivity from "./DialogCreateActivity"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import MUIDataTable from "mui-datatables"
import { apiDeleteActivities } from "../../service/activity"
import styled from 'styled-components';
import { Link, navigate } from "@reach/router"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"





export default function EnhancedTable(props) {
  // function showDataInFile(id,name) {
  //   navigate(`/ShowDataInFileActivity/${id}/${name}`)
    
  // }

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
    const HoverText = styled.p`
	color: #000000;
	:hover {
		color: #336699;
		cursor: pointer;
	}
`
    return [
      {
        name: "activity_student_name",
        label: "ชื่อกิจกรรม",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a href={`/ShowDataInFileActivity/${tableMeta.rowData[10]}/${tableMeta.rowData[0]}`} target="_blank">
              <p>{value}</p>
            </a>
            // <HoverText
            //   onClick={() => showDataInFile(tableMeta.rowData[10],tableMeta.rowData[0])}
            // >
            //   {value}
            // </HoverText>
          ),
          filter: false,
        },
      },
      { name: "activity_student_major", label: "สาขา" },
      { name: "activity_student_year", label: "ปีที่จัดกิจกรรม" },
      {
        name: "activity_student_file_name",
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
      { name: "activity_student_file", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "updated_at", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "keep_student_file_name", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "created_at", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "activity_student_file_id", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "activity_student_id", options: { display: false, filter: false ,viewColumns: false,download:false} },
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
      created_at: data[8],
      keep_file_name: data[7],
      updated_at: 1,
    }
    return dataRes
  }

  const options = {
    filterType: "checkbox",
    onRowsDelete: async (deleted) => {
      console.log(deleted)
      console.log(deleted.data)
      
      let Id = []
      for (let i = 0; i < deleted.data.length; i++) {
        let n = deleted.data[i].index

        Id.push(data[n].activity_student_id)
      }
      console.log(Id)
      const datRes = { activity_id: Id }
      await apiDeleteActivities(datRes)
    },
    download: {
      activity_id: false
    },
    print: false
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
          title={"กิจกรรมที่นักเรียนเข้าร่วม"}
          data={data}
          columns={columns(clickedit)}
          options={options}
          
        />
      </MuiThemeProvider>
    </div>
  )
}
