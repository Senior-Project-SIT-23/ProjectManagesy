import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { HorizontalBar } from "react-chartjs-2"

export default function BarChartTop10SchoolAct() {
  const data = {
    labels: [
      "school 1 xxxxxxxxxxxx",
      "school 2",
      "school 3",
      "school 4 ",
      "school 5",
      "school 6",
      "school 7",
      "school 8",
      "school 9",
      "school 10",
    ],
    datasets: [
      {
        label: "IT",
        backgroundColor: "#004680",
        borderColor: "#004680",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [20,30,25,30,40,16,18,23,20,22],
      },
      {
        label: "CS",
        backgroundColor: "#FED880",
        borderColor:"#FED880",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [20,30,25,30,40,16,18,23,20,22],
      },
      {
        label: "DSI",
        backgroundColor: "#15A3D3",
        borderColor:"#15A3D3",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [20,30,25,30,40,16,18,23,20,22],
      },
    ],

  }

  return (
    <div>
      <Paper style={{ padding: 10, height: 350 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"กราฟแสดง 10 อันดับโรงเรียนที่นักเรียนเข้ามาเป็นนักศึกษา"}</b>
              </div>
            </Typography>
            <HorizontalBar
              data={data}
              width={100}
              height={250}
              options={{
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
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
