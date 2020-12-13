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

  console.log("props.data",props.data)

  
  
  
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={2}>
          <div className={"mb-3"}>
            <ButtonYear handleChangeYear={props.handleChangeYear} year={props.year}/>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PieChart data={props.data}/>
        </Grid>
        <Grid item xs={3}>
          <CardAnalysis
            title={"IT"}
            backgroundColor={``}
            // fontColor={`white`}
            icon={<WcIcon style={{ fontSize: 60, color: "#FF6384" }} />}
            percentBoy={((props.data.gender[0].Male*100)/props.data.gender[0].Total).toFixed(2) + "%"}
            countBoy={props.data.gender[0].Male + " คน"}
            percentGirl={((props.data.gender[0].Female*100)/props.data.gender[0].Total).toFixed(2) + "%"}
            countGirl={props.data.gender[0].Female + " คน"}
          />
          <Grid className="mt-3">
            <CardAnalysis
              title={"DSI"}
              backgroundColor={``}
              // fontColor={`white`}
              icon={<WcIcon style={{ fontSize: 60, color: "#4BC0C0" }} />}
              percentBoy={((props.data.gender[2].Male*100)/props.data.gender[2].Total).toFixed(2) + "%"}
              countBoy={props.data.gender[2].Male + " คน"}
              percentGirl={((props.data.gender[2].Female*100)/props.data.gender[2].Total).toFixed(2) + "%"}
              countGirl={props.data.gender[2].Female + " คน"}
            />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CardAnalysis
            title={"CS"}
            backgroundColor={``}
            // fontColor={`white`}
            icon={<WcIcon style={{ fontSize: 60, color: "#FED880" }} />}
            percentBoy={((props.data.gender[1].Male*100)/props.data.gender[1].Total).toFixed(2) + "%"}
            countBoy={props.data.gender[1].Male + " คน"}
            percentGirl={((props.data.gender[1].Female*100)/props.data.gender[1].Total).toFixed(2) + "%"}
            countGirl={props.data.gender[1].Female + " คน"}
          />
          <Grid className="mt-3">
            <CardAnalysis
              title={"ALL"}
              backgroundColor={``}
              icon={<WcIcon style={{ fontSize: 60, color: "#e85d04" }} />}
              percentBoy={((props.data.gender[3].Male*100)/props.data.gender[3].Total).toFixed(2) + "%"}
              countBoy={props.data.gender[3].Male + " คน"}
              percentGirl={((props.data.gender[3].Female*100)/props.data.gender[3].Total).toFixed(2) + "%"}
              countGirl={props.data.gender[3].Female + " คน"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={4}>
          <RegionChart />
        </Grid>
        <Grid item xs={4}>
          <ChartActXNoAct data={props.data.compare_activity}/>
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
          <BarChartTop10SchoolEntrance data={props.data.school_admission}/>
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
