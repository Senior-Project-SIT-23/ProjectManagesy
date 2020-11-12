import React from "react"
import { Line } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

export default function LineChart(props) {
  const data = {
    labels: [
      "0.00-0.50",
      "0.51-1.00",
      "1.01-1.50",
      "1.51-2.00",
      "2.01-2.50",
      "2.51-3.00",
      "3.01-3.50",
      "3.51-4.00",
    ],
    datasets: [
      {
        label: "จำนวนนักศึกษา",
        data: props.data,
        backgroundColor: `${props.bgcolor}`,
        hoverBackgroundColor: `${props.hoverBackgroundColor}`,
        hoverBorderColor: `${props.hoverBorderColor}`,
        borderColor: `${props.borderColor}`,
        borderCapStyle: "square",
        pointBorderWidth: 2,
        pointHitRadius: 5,
        fill: false,
        borderJoinStyle: "bevel",
        lineTension: 0,
      },
    ],
  }

  return (
    <Paper style={{ padding: 10 }}>
      <Grid container>
        <Grid item container direction="column" spacing={2}>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            <div className="font-athiti ">
              <b>{props.title}</b>
            </div>
          </Typography>
          <Line
            data={data}
            height={120}
            options={{
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนนักศึกษา",
                    },
                  },
                ],
                xAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: "เกรดเฉลี่ยสะสม",
                      },
                    },
                  ],
              },
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
