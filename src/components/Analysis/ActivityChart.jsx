import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import BarChart from "./BarChart"

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
  title: {
    fontFamily: "font-athiti",
  },
}))

export default function ActivityChart() {
  const classed = useStyles()
  return (
    <div>
      <Paper>
        <Grid container>
          <div className="font-athiti mx-auto text-xl my-2">
            เปรียบเทียบจำนวนนักเรียนที่มีสิทธิ์เข้าศึกษาต่อ x
            นักเรียนที่เข้าร่วมกิจกรรม
          </div>
        </Grid>
        <Grid xs={9} className=" mx-1 my-1">
            <BarChart/>
        </Grid>
      </Paper>
    </div>
  )
}
