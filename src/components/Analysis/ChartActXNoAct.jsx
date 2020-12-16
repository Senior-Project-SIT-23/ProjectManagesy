import React from 'react'
import { Doughnut, Pie } from "react-chartjs-2"
import { Grid, Paper, Typography } from "@material-ui/core"

export default function ChartActXNoAct(props) {

    
    const data = {
        labels: ["นักศึกษาที่เคยเข้าร่วมกิจกรรม","นักศึกษาที่ไม่เคยเข้าร่วมกิจกรรม"],
        datasets: [
          {
            data: [props.data[0].activity, props.data[0].non_activity],
    
            backgroundColor: ["#4BC0C0", "#E7E9ED"],
            // hoverBackgroundColor: ["#A5C1D8", "#FFE8B5", "#9DDDE1"],
            hoverBorderColor: ["#4BC0C0", "#E7E9ED"],
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
          <Paper style={{ padding: 10, height: 342 }} >
            <Grid container>
              <Grid item container direction="column" spacing={2} >
                
                <Typography variant="subtitle1" style={{ textAlign: "center"}}>
                  <div className="font-athiti ">
                    <b>{"กราฟแสดงสัดส่วนนักศึกษาที่เคยเข้าร่วมกิจกรรมของคณะต่อนักศึกษาที่ไม่เคยเข้าร่วมกิจกรรมของคณะ"}</b>
                  </div>
                </Typography>
                <Pie data={data} options={options} height={220} />
              </Grid>
            </Grid>
          </Paper>
        </div>
      )
}
