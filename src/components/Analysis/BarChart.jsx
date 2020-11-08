import React from "react"
import { Bar } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const BarChart = (props) => {
  const data = {
    labels: ["ปี 2018", "ปี 2019", "ปี 2020", "ปี 2021"],
    datasets: [
      {
        label: "จำนวนคนที่ไม่เคยเข้าร่วมกิจกรรม",
        backgroundColor: "#FFB54B",
        borderColor: "#FFB54B",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,181,75,0.4)",
        hoverBorderColor: "rgba(255,181,75,1)",
        data: ["135", "125", "178", "156"],
        barThickness: "30"
      },
      {
        label: "จำนวนคนที่เคยเข้าร่วมกิจกรรม",
        backgroundColor: "#62C7E4",
        borderColor: "#62C7E4",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(98,199,228,0.4)",
        hoverBorderColor: "rgba(98,199,228,1)",
        data: ["51", "42", "52", "38"],
        barThickness: "30"
      },
    ],
  }

  return (
    <Paper style={{ padding: 10 }}>
      <Grid container >
          <Grid item container direction="column" spacing={2}>
          <Typography  variant="subtitle1" style={{textAlign:"center"}}>
                <div className="font-athiti "><b>{"กราฟเปรียบเทียบจำนวนนักเรียนที่..."}</b></div>
              </Typography>
        <Bar
          data={data}
          height={180}
          options={{
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
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
