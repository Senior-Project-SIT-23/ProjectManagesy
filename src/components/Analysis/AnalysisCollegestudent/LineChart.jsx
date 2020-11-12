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
        data: [25, 18, 22, 32, 2, 5, 18, 16],
        //   backgroundColor: "#98E7A9",
        hoverBackgroundColor: "rgba(152,231,169,0.4)",
        hoverBorderColor: "#98E7A9",
        fill: false
      },
    ],
  }

  return (
    
    <Paper style={{ padding: 10 }}>
      <Grid container >
            <Grid item container direction="column" spacing={2}>
                <Typography  variant="subtitle1" style={{textAlign:"center"}}>
                     <div className="font-athiti "><b>{props.title}</b></div>
                </Typography>
                <Line data={data} />
            </Grid>
    </Grid>
      </Paper>
  )
}
