import React from "react"
import Card from "./Card"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import GroupIcon from "@material-ui/icons/Group"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
import BarChart from "../Analysis/BarChart"
import DonutChart from "../Analysis/DonutChart"
import ButtonYear from "./ButtonYear"
import SchoolTable from "./SchoolTable"
import TableAdmissionXSchool from "./AnalysisIT/TableAdmissionXSchool"
import { Paper } from "@material-ui/core"
import ActivityChart from "./ActivityChart"
import TableAllAdmission from "./TableAllAdmission"
import TableSchoolXAct from "./TableSchoolXAct"
import CardAll from "./CardAll"

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

export default function FullPageAnalysis() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={2}>
          <div className={"mb-2"}>
            <ButtonYear />
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
            count={"300"}
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
            count={"300"}
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
            count={"300"}
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
            count={"300"}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* <Grid item xs>
          <Card
            className={classes.paper}
            title={"นักศึกษาทั้งหมด"}
            icon={
              <CheckCircleIcon
                style={{ fontSize: 60, marginRight: 10, color: "40DC9A" }}
              />
            }
            count={"300"}
          />
        </Grid> */}
        <Grid item xs>
          <CardAll
            className={classes.paper}
            title={"นักเรียนที่สมัครสอบทั้งหมด"}
            icon={
              <GroupIcon
                style={{ fontSize: 60, marginRight: 10, color: "#e85d04" }}
              />
            }
            count={"1,250"}
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
            count={"1,780"}
          />
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid item xs={12} >
        <BarChart/>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SchoolTable/>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableSchoolXAct/>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TableAllAdmission/>
        </Grid>
      </Grid>
      {/* <Grid container spacing={6}>
        <Grid item xs={12}>
          
        </Grid>
      </Grid> */}
    </div>
  )
}
