import React from "react"
import { Doughnut } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

export default function DoughnutComponent(props) {
  const data = {
    labels: [
      "รอบ 1 แฟ้มสะสมผลงาน",
      "รอบ 2 โควตา",
      "รอบ 3 admission 1",
      "รอบ 4 admission 2",
      "รอบ 5 รับตรงร่วม",
    ],
    datasets: [
      {
        data: props.data,
        backgroundColor: [
          "#98E7A9",
          "#8BDAFA",
          "#B899F7",
          "#F19BCC",
          "#EDC267",
        ],
        hoverBackgroundColor: [
          "rgba(152,231,169,0.4)",
          "rgba(139,218,250,0.4)",
          "rgba(184,153,247,0.4)",
          "rgba(241,155,204,0.4)",
          "rgba(237,194,103,0.4)",
        ],
        hoverBorderColor: [
          "#98E7A9",
          "#8BDAFA",
          "#B899F7",
          "#F19BCC",
          "#EDC267",
        ],
      },
    ],
    options: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  }
  return (
    <Paper style={{ padding: 10 }}>
      <Grid container>
        <Grid item container direction="column" spacing={2}>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            <div className="font-athiti ">
              <b>{"กราฟแสดงจำนวนกิจกรรมที่มีคนเข้าร่วมมากที่สุด"}</b>
            </div>
          </Typography>
          <Doughnut data={data} height={180} />
        </Grid>
      </Grid>
    </Paper>
  )
}
