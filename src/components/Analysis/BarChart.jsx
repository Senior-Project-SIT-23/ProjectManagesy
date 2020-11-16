import React from "react"
import { Bar } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"



const BarChart = (props) => {


  const data = {
    labels: ["WIPCAMP", "JPC", "openhouse", "sittalk",],
    datasets: [
      {
        label: "จำนวนคนที่เข้าร่วมกิจกรรม",
        backgroundColor: "#FFB54B",
        borderColor: "#FFB54B",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,181,75,0.4)",
        hoverBorderColor: "rgba(255,181,75,1)",
        data: ["135", "125", "178", "156"],
        barThickness: "30"
      },
      {
        label: "จำนวนคนที่เรียนต่อ",
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
          <Grid item container direction="column" spacing={2} >
          <Typography  variant="subtitle1" style={{textAlign:"center"}}>
                <div className="font-athiti "><b>{"เปรียบเทียบจำนวนนักเรียนที่มีสิทธิ์เข้าศึกษาต่อ x นักเรียนที่เข้าร่วมกิจกรรม"}</b></div>
              </Typography>
        <Bar
          data={data}
          height={120}
          options={{
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "ชื่อกิจกรรม",
                  },
                },
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "จำนวนนักศึกษา",
                  },
                },
              ],
            },
          }}
        />
        </Grid>
        {/* <Grid item container direction="column" spacing={2} xs={3}>
           <button>gfgggg</button>
        </Grid> */}
      </Grid>
    </Paper>
  )
}

export default  BarChart
