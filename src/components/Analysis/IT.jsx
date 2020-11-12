import {Grid } from "@material-ui/core"
import React from "react"
import ButtonYear from "./ButtonYear"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { makeStyles } from "@material-ui/core/styles"
import Card from "./AnalysisIT/Card"
import GroupIcon from "@material-ui/icons/Group"
import SchoolIT from "./AnalysisIT/SchoolIT"
import BarChart from "./BarChart"
import DonutChart from './DonutChart'
import LineChart from "./AnalysisCollegestudent/LineChart"
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
        <Grid item xs={12} sm={6}>
        <BarChart className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DonutChart className={classes.paper} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <SchoolIT/>
          </Grid>
        </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <LineChart 
          data={[25, 18, 22, 32, 2, 5, 18, 16]}
          title={"กราฟแสดงอัตราเฉลี่ยผลการศึกษาของนักศึกษาปีที่ 1"}
          bgcolor={"#D87D0D"}
          borderColor={"#D87D0D"}
          hoverBackgroundColor={"rgba(216,125,13,0.4)"}
          hoverBorderColor={"#D87D0D"}/>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <LineChart 
          data={[25, 18, 22, 32, 2, 5, 18, 16]}
          title={"กราฟแสดงอัตราเฉลี่ยผลการศึกษาของนักศึกษาปีที่ 2"}
          bgcolor={"#CD7E59"}
          borderColor={"#CD7E59"}
          hoverBackgroundColor={"rgba(205, 126, 89,0.4)"}
          hoverBorderColor={"#CD7E59"}/>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <LineChart 
          data={[25, 18, 22, 32, 2, 5, 18, 16]}
          title={"กราฟแสดงอัตราเฉลี่ยผลการศึกษาของนักศึกษาปีที่ 3"}
          bgcolor={"#457373"}
          borderColor={"#457373"}
          hoverBackgroundColor={"rgba(115,115,69,0.4)"}
          hoverBorderColor={"#457373"}/>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <LineChart 
          data={[25, 18, 22, 32, 2, 5, 18, 16]}
          title={"กราฟแสดงอัตราเฉลี่ยผลการศึกษาของนักศึกษาปีที่ 3"}
          bgcolor={"#DDB247"}
          borderColor={"#DDB247"}
          hoverBackgroundColor={"rgba(71,178,221,0.4)"}
          hoverBorderColor={"#DDB247"}/>
        </Grid>
        </Grid>
        

    </div>
  )
}
