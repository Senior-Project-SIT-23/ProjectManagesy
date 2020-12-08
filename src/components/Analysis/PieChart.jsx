import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { Doughnut, Pie } from "react-chartjs-2"

export default function PieChart() {
  const data = {
    labels: ["IT", "CS", "DSI"],
    datasets: [
      {
        data: [10, 20, 30],

        backgroundColor: ["#004680", "#FED880", "#15A3D3"],
        // hoverBackgroundColor: ["#A5C1D8", "#FFE8B5", "#9DDDE1"],
        hoverBorderColor: ["#004680", "#FED880", "#15A3D3"],
        hoverBorderWidth: 10
      },
    ],
    options: {
        legend: {
            display: true,
            labels: {
                position: 'right',
                
            }
        }
    }
  }

  return (
    <div>
      <Paper style={{ padding: 10 , height:315}}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"Pie Chart แสดงสัดส่วนนักศึกษา"}</b>
              </div>
            </Typography>
            <Doughnut data={data}  height={180}/>
          </Grid>
        </Grid>
      </Paper>
      
    </div>
  )
}
