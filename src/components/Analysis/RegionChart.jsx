import React from "react"
import { Polar } from "react-chartjs-2"
import { Grid, Paper, Typography } from "@material-ui/core"

export default function RegionChart() {
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 12, 18],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED","#E459ED"],
        hoverBackgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"],
        hoverBorderColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"],
        hoverBorderWidth: 8,
        label: "My dataset", // for legend
      },
    ],
    labels: ["xxxxxxx", "xxxxxx", "xxxxx", "xxxxxxx","xxxxxx"],
  }
  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
  }
  return (
    <div>
      <Paper style={{ padding: 10, height: 342 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"กราฟแสดงปริมาณนักศึกษาจากโรงเรียนในแต่ละจังหวัด"}</b>
              </div>
            </Typography>
            <Polar data={data} options={options} height={250} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
