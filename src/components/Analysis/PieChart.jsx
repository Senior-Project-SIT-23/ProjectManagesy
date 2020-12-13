import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { Doughnut, Pie } from "react-chartjs-2"

export default function PieChart(props) {
  const data = {
    labels: ["IT", "CS", "DSI"],
    datasets: [
      {
        data: [props.data.num_of_it_student, props.data.num_of_cs_student, props.data.num_of_dsi_student],

        backgroundColor: ["#FF6384", "#FFCE56", "#4BC0C0"],
        // hoverBackgroundColor: ["#A5C1D8", "#FFE8B5", "#9DDDE1"],
        hoverBorderColor: ["#FF6384", "#FFCE56", "#4BC0C0"],
        hoverBorderWidth: 10,
      },
    ],
  }
  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
  }

  return (
    <div>
      <Paper style={{ padding: 10, height: 315 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"Pie Chart แสดงสัดส่วนนักศึกษา"}</b>
              </div>
            </Typography>
            <Doughnut data={data} options={options} height={180} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
