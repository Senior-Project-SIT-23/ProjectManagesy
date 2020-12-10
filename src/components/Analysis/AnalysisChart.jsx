import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ButtonYear from "./ButtonYear"
import PieChart from "./PieChart"
import { Paper } from "@material-ui/core"
import CardAnalysis from "./CardAnalysis"
import WcIcon from "@material-ui/icons/Wc"
import ChartActXNoAct from "./ChartActXNoAct"
import BarChartTop10SchoolAct from "./BarChartTop10SchoolAct"
import BarChartTop10SchoolEntrance from "./BarChartTop10SchoolEntrance"
import RegionChart from "./RegionChart"
import BarChartEntrance from "./BarChartEntrance"
import TableTop5Act from "./TableTop5Act"

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
export default function TableAnalysis(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={2}>
          <div className={"mb-3"}>
            <ButtonYear handleChangeYear={props.handleChangeYear} />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PieChart />
        </Grid>
        <Grid item xs={3}>
          <CardAnalysis
            title={"IT"}
            backgroundColor={``}
            // fontColor={`white`}
            icon={<WcIcon style={{ fontSize: 60, color: "#FF6384" }} />}
            percentBoy={"80%"}
            countBoy={"80 คน"}
            percentGirl={"20%"}
            countGirl={"20 คน"}
          />
          <Grid className="mt-3">
            <CardAnalysis
              title={"DSI"}
              backgroundColor={``}
              // fontColor={`white`}
              icon={<WcIcon style={{ fontSize: 60, color: "#4BC0C0" }} />}
              percentBoy={"80%"}
              countBoy={"80 คน"}
              percentGirl={"20%"}
              countGirl={"20 คน"}
            />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CardAnalysis
            title={"CS"}
            backgroundColor={``}
            // fontColor={`white`}
            icon={<WcIcon style={{ fontSize: 60, color: "#FED880" }} />}
            percentBoy={"80%"}
            countBoy={"80 คน"}
            percentGirl={"20%"}
            countGirl={"20 คน"}
          />
          <Grid className="mt-3">
            <CardAnalysis
              title={"ALL"}
              backgroundColor={``}
              icon={<WcIcon style={{ fontSize: 60, color: "#e85d04" }} />}
              percentBoy={"80%"}
              countBoy={"80 คน"}
              percentGirl={"20%"}
              countGirl={"20 คน"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={4}>
          <RegionChart />
        </Grid>
        <Grid item xs={4}>
          <ChartActXNoAct />
        </Grid>
        
        <Grid item xs={4}>
          <TableTop5Act />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <BarChartTop10SchoolAct />
        </Grid>
        <Grid item xs={6}>
          <BarChartTop10SchoolEntrance />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <BarChartEntrance />
        </Grid>
      </Grid>
    </div>
  )
}
