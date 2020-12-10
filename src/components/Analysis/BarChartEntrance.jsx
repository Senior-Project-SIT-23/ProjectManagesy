import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { Bar } from "react-chartjs-2"

export default function BarChartEntrance() {
  const data = {
    labels: [
      "school 1 xxxxxxxxxxxx",
      "school 2 xxxxxxxxxxxx",
      "school 3 xxxxxxxxxxxx",
      "school 4 xxxxxxxxxxxx",
      "school 5 xxxxxxxxxxxx",
    ],
    datasets: [
      {
        label: "จำนวนนักศึกษา",
        backgroundColor: "#004680",
        borderColor: "#004680",
        borderWidth: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [100, 80, 70, 55, 45],
        barPercentage: 0.4,
      },
      {
        label: "IT",
        backgroundColor: "#004680",
        borderColor: "#004680",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [80, 52, 68, 72, 40],
        barPercentage: 0.4,
      },
      {
        label: "CS",
        backgroundColor: "#FED880",
        borderColor: "#FED880",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [80, 52, 68, 72, 40],
        barPercentage: 0.4,
      },
      {
        label: "DSI",
        backgroundColor: "#15A3D3",
        borderColor:"#15A3D3",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [80, 52, 68, 72, 40],
        barPercentage: 0.4,
      },
    ],
  }
  return (
    <div className=" mx-2">
      <Paper style={{ padding: 10, height: 400 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>
                  {"กราฟแสดง 5 อันดับโครงการสมัครสอบที่มาเป็นนักศึกษามากที่สุด"}
                </b>
              </div>
            </Typography>

            <Bar
              data={data}
              height={300}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,

                        // max: props.data.borrowTime
                        //   ? props.data.borrowTime[0] + 1
                        //   : null,
                      },
                    },
                  ],
                },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
