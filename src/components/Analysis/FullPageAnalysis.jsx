import React from "react"
import Card from "./Card"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { useState } from "react"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import GroupIcon from "@material-ui/icons/Group"
import Chart from "../Analysis/Chart"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
import BarChart from "../Analysis/BarChart"
import DonutChart from "../Analysis/DonutChart"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <Grid container spacing={3}>
        <Grid item xs>
          <Card
            className={classes.paper}
            title={"จำนวนนักเรียนที่ได้เข้าศึกษาต่อ"}
            icon={
              <CheckCircleIcon
                style={{ fontSize: 60, marginRight: 10, color: "40DC9A" }}
              />
            }
            count={"300"}
          />
        </Grid>
        <Grid item xs>
          <Card
            className={classes.paper}
            title={"จำนวนนักเรียนที่สมัครสอบทั้งหมด"}
            icon={
              <GroupIcon
                style={{ fontSize: 60, marginRight: 10, color: "32BDDF" }}
              />
            }
            count={"1,250"}
          />
        </Grid>
        <Grid item >
          <Card
            className={classes.paper}
            title={"จำนวนนักเรียนที่เข้าร่วมกิจกรรมทั้งหมด"}
            icon={
              <FolderSharedIcon
                style={{ fontSize: 60, marginRight: 10, color: "FC6D7F" }}
              />
            }
            count={"1,780"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BarChart className={classes.paper} />
        </Grid>
        {/* <Grid item xs>
          <Card className={classes.paper} />
        </Grid> */}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Chart className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DonutChart className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  )
}
