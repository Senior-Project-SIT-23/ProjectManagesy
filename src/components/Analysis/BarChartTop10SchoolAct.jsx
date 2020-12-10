import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { HorizontalBar } from "react-chartjs-2"

export default function BarChartTop10SchoolEntrance() {
  const data = {
    labels: [
      "school 1",
      "school 2",
      "school 3",
      "school 4 ",
      "school 5",
      "school 6",
      "school 7",
      "school 8",
      "school 9",
      "school 10",
    ],
    datasets: [
      {
        label: "จำนวนนักเรียนที่มาเข้าร่วมกิจกรรม",
        backgroundColor: ["#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED"],
        borderColor: ["#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED"],
        borderWidth: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [100, 80, 70, 55, 45, 30, 25, 20, 20, 10],
        
      },
    ],
    xAxisID: "จำนวนนักศึกษา"

  }

  return (
    <div>
      <Paper style={{ padding: 10, height: 350 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"กราฟแสดง 10 อันดับโรงเรียนที่นักเรียนมาเข้าร่วมกิจกรรม"}</b>
              </div>
            </Typography>
            <HorizontalBar
              data={data}
              width={100}
              height={250}
              options={{
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                          min: 0,
                          
                          // max: props.data.borrowTime
                          //   ? props.data.borrowTime[0] + 1
                          //   : null,
                        },
                        
                      },
                    ],
                  },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
