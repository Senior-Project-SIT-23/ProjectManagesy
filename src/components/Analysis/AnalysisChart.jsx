import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ButtonYear from "./ButtonYear"
import PieChart from "./PieChart"
import { Paper } from "@material-ui/core"
import CardAnalysis from "./CardAnalysis"
import WcIcon from "@material-ui/icons/Wc"

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
            backgroundColor={`#004680`}
            fontColor={`white`}
            icon={
              <WcIcon
                style={{ fontSize: 60 ,color: "#ffff" }}
              />
            }
          />
          <Grid className="mt-3">
            <CardAnalysis
              title={"CS"}
              backgroundColor={`#FED880`}
              fontColor={`white`}
              icon={
                <WcIcon
                  style={{ fontSize: 60, color: "#ffff" }}
                />
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CardAnalysis
            title={"DSI"}
            backgroundColor={`#15A3D3`}
            fontColor={`white`}
            icon={
              <WcIcon
                style={{ fontSize: 60, color: "#ffff" }}
              />
            }
          />
          <Grid className="mt-3">
            <CardAnalysis
              title={"ALL"}
              backgroundColor={``}
              icon={
                <WcIcon
                  style={{ fontSize: 60,color: "#e85d04" }}
                />
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
