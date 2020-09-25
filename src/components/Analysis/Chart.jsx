import React from "react"
import { Bar } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const BarChart = (props) => {
  const data = {
    labels: ["กิจกรรมที่ 1", "กิจกรรมที่ 2", "กิจกรรมที่ 3", "กิจกรรมที่ 4", "กิจกรรมที่ 5", "กิจกรรมที่ 6"],
    datasets: [
      {
        label: "จำนวนคนที่เข้าร่วมแต่ล่ะกิจกรรม",
        backgroundColor: "#B899F7",
        borderColor: "#B899F7",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [ "27", "40", "30", "50", "60", "50"],
      },
    ],
  }

  return (
    <Paper style={{ padding: 10 }}>
      <Grid container >
          <Grid item container direction="column" spacing={2}>
          <Typography  variant="subtitle1" style={{textAlign:"center"}}>
                <div className="font-athiti "><b>{"กราฟแสดงจำนวนคนที่เข้าร่วมกิจกรรม"}</b></div>
              </Typography>
        <Bar
          data={data}
          height={180}
          options={{
            scales: {
              xAxes: [
                {
                  ticks: {
                    // beginAtZero: true,
                    min: 0,
                    //   max: props.data.borrowTime ? props.data.borrowTime[0] + 1 : null
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

export default  BarChart
