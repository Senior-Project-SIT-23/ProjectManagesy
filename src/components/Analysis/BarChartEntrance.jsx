import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { Bar } from "react-chartjs-2"


export default function BarChartEntrance() {
  const data = {
    labels: [
      "โครงการ 1 xxxxxxxxxxxx",
      "โครงการ 2 xxxxxxxxxxxx",
      "โครงการ 3 xxxxxxxxxxxx",
      "โครงการ 4 xxxxxxxxxxxx",
      "โครงการ 5 xxxxxxxxxxxx",
    ],
    datasets: [
      {
        label: "จำนวนนักเรียนที่สมัครสอบ",
        backgroundColor: "#D2D5D6",
        borderColor: "#D2D5D6",
        borderWidth: 1,
        hoverBackgroundColor: "#D2D5D6",
        hoverBorderColor: "#D2D5D6",
        data: [100, 80, 70, 55, 45],
        barPercentage: 0.4,
      },
      {
        label: "IT",
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [80, 52, 68, 72, 40],
        barPercentage: 0.4,
      },
      {
        label: "CS",
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [80, 52, 68, 72, 40],
        barPercentage: 0.4,
      },
      {
        label: "DSI",
        backgroundColor: "#4BC0C0",
        borderColor:"#4BC0C0",
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
