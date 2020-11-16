import React from "react"
import { Doughnut } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

export default function DoughnutChartIT(props) {
  const data = {
    labels: [
      "กิจกรรมที่ 1",
      "กิจกรรมที่ 2",
      "กิจกรรมที่ 3",
      "กิจกรรมที่ 4",
      "กิจกรรมที่ 5",
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
  }
  return (
    <Paper style={{ padding: 10 }} elevation={3}>
      <Grid container>
        <Grid item container direction="column" spacing={2}>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            <div className="font-athiti font-2xl">
              <b>
                {"กราฟแสดงจำนวนกิจกรรมที่มีคนเข้าร่วมมากที่สุด 5 อันดับแรก"}
              </b>
            </div>
          </Typography>
          <Doughnut
            data={data}
            height={295}
            align= {`start`}
            options={{
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  fontFamily: "font-athiti"
              }

              },
              
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
