import { Grid } from "@material-ui/core"
import React from "react"
import ButtonYear from "./ButtonYear"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { makeStyles } from "@material-ui/core/styles"
import Card from "./AnalysisIT/Card"
import GroupIcon from "@material-ui/icons/Group"
import SchoolIT from "./AnalysisIT/SchoolIT"
import BarChart from "./BarChart"
import DonutChartIT from "./AnalysisIT/DonutChartIT"
import DonutChart from "./DonutChart"
import LineChart from "./AnalysisCollegestudent/LineChart"
import BarChartAct from "./AnalysisIT/BarChartAct"
import TableAdmissionXSchool from "./AnalysisIT/TableAdmissionXSchool"
export default function IT() {
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
  const classes = useStyles()
  return (
    <div>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={2}>
          <div className={"mb-2"}>
            <ButtonYear />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card
            className={classes.paper}
            title={"นักเรียนที่สมัครเข้าศึกษาสาขาเทคโนโลยีสารสนเทศ"}
            icon={
              <GroupIcon
                style={{ fontSize: 60, marginRight: 10, color: "40DC9A" }}
              />
            }
            count={"300"}
          />
        </Grid>
        <Grid item xs>
          <Card
            className={classes.paper}
            title={"นักเรียนที่ได้เข้าศึกษาต่อสาขาเทคโนโลยีสารสนเทศ"}
            icon={
              <CheckCircleIcon
                style={{ fontSize: 60, marginRight: 10, color: "32BDDF" }}
              />
            }
            count={"300"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <SchoolIT />
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} data={[300, 268, 455,625,365]}>
        
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BarChartAct/>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TableAdmissionXSchool/>
        </Grid>
      </Grid>
    </div>
  )
}
