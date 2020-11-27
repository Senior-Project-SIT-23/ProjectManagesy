import React from "react"
import Card from "./Card"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import GroupIcon from "@material-ui/icons/Group"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
import ButtonYear from "./ButtonYear"
import SchoolTable from "./SchoolTable"
import { Paper } from "@material-ui/core"
import TableAllAdmission from "./TableAllAdmission"
import TableSchoolXAct from "./TableSchoolXAct"
import CardAll from "./CardAll"
import TableSchoolCollegeStudent from "./TableSchoolCollegeStudent"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    // margin: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function FullPageAnalysis(props) {
  const classes = useStyles()
  
  
  console.log("props.data",props.data)
  if(props){
    console.log("numstudent",props.data.num_of_activity_student)
    console.log("props.data.school_activity",props.data.school_activity)
  }
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={2}>
          <div className={"mb-2"}>
            <ButtonYear handleChangeYear={props.handleChangeYear}/>
          </div>
        </Grid>
      </Grid>
      
      {/* <Grid container spacing={3}>
        <Grid item xs={12} >
          <DonutChart 
          className={classes.paper} 
          data={[300, 268, 455,625,365]}/>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <Card
            className={classes.paper}
            title={"นักศึกษาสาขาเทคโนโลยีสารสนเทศ"}
            icon={
              // <CheckCircleIcon
              //   style={{ fontSize: 60, marginRight: 10, color: "40DC9A" }}
              // />
              <img src="IT.png" style={{ marginRight: 10,width: 60, height:60 }}/>
            }
            count={props.data.num_of_it_student}
          />
        </Grid>
        <Grid item xs={3}>
        <Card
            className={classes.paper}
            title={"นักศึกษาสาขาวิทยาการคอมพิวเตอร์"}
            icon={
              // <CheckCircleIcon
              //   style={{ fontSize: 60, marginRight: 10, color: "40DC9A" }}
              // />
              <img src="CS.png" style={{ marginRight: 10,width: 60, height:60 }}/>
            }
            count={props.data.num_of_cs_student}
          />
        </Grid>
        <Grid item xs={3}>
        <Card
            className={classes.paper}
            title={"นักศึกษาสาขานวัตกรรมบริการดิจิตัล"}
            icon={
              // <CheckCircleIcon
              //   style={{ fontSize: 60, marginRight: 10, color: "40DC9A" }}
              // />
              <img src="DSI.png" style={{ marginRight: 10,width: 60, height:60 }}/>
            }
            count={props.data.num_of_dsi_student}
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            className={classes.paper}
            title={"นักศึกษาคณะเทคโนโลยีสารเทศทั้งหมด"}
            icon={
              // <CheckCircleIcon
              //   style={{ fontSize: 60, marginRight: 10, color: "40DC9A" }}
              // />
              <img src="All.png" style={{ marginRight: 10,width: 60, height:60 }}/>
            }
            count={props.data.num_of_sit_student}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
          <CardAll
            className={classes.paper}
            title={"นักเรียนที่สมัครสอบทั้งหมด"}
            icon={
              <GroupIcon
                style={{ fontSize: 60, marginRight: 10, color: "#e85d04" }}
              />
            }
            count={props.data.num_of_admission_student}
          />
        </Grid>
        <Grid item xs>
          <CardAll
            className={classes.paper}
            title={"นักเรียนที่เข้าร่วมกิจกรรมทั้งหมด"}
            icon={
              <FolderSharedIcon
                style={{ fontSize: 60, marginRight: 10, color: "#f48c06" }}
              />
            }
            count={props.data.num_of_activity_student}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SchoolTable data={props.data}/>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableSchoolCollegeStudent data={props.data}/>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TableAllAdmission data={props.data}/>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableSchoolXAct data={props.data}/>
        </Grid>
      </Grid>

      {/* <Grid container spacing={6}>
        <Grid item xs={12}>
          
        </Grid>
      </Grid> */}
    </div>
  )
}
