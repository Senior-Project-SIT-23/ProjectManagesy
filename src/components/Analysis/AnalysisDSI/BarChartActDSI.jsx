import React from "react"
import { Bar } from "react-chartjs-2"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Button } from "@material-ui/core"

export default function BarChartActDSI() {
    
    const data = {
        labels: [
          "โรงเรียน ssssss",
          "โรงเรียน aaaaaaa",
          "โรงเรียน yyyyy",
          "โรงเรียน wwwwww",
          "โรงเรียน uuuuuuu",
        ],
        datasets: [
          {
            label: "จำนวนคนที่เข้าร่วมกิจกรรม",
            backgroundColor: "#336699",
            borderColor: "#336699",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,181,75,0.4)",
            hoverBorderColor: "rgba(255,181,75,1)",
            data: ["10", "15", "6", "21", "13", "4"],
            barThickness: "30",
          },
        ],
      }

    return (
        <Paper style={{ padding: 10 }}>
      <Grid container>
        <Grid item container direction="column" spacing={2} xs={9}>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            <div className="font-athiti ">
              <b>{"นักเรียนที่เข้าร่วมกิจกรรม"}</b>
            </div>
          </Typography>
          <Bar
            className="mx-auto"
            data={data}
            height={150}
            options={{
              scales: {
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "ชื่อโรงเรียน",
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนนักเรียน",
                    },
                  },
                ],
              },
            }}
          />
        </Grid>
        <Grid item container direction="column" xs={3} className="ml-3">
          <div
            className="font-athiti font-bold text-2xl"
            style={{ textAlign: "center" }}
          >
            เลือกกิจกรรม
          </div>
          <div>
            <div className="text-center">
             
              <Button variant="outlined" color="primary" style={{ minWidth: "100%",marginRight: 0,borderRadius:3,marginTop:2}}>
                Primary
              </Button>
              <Button variant="outlined" color="primary" style={{ minWidth: "100%",marginRight: 0,borderRadius:3,marginTop:2}}>
                Primary
              </Button>
              <Button variant="outlined" color="primary" style={{ minWidth: "100%",marginRight: 0,borderRadius:3,marginTop:2}}>
                Primary
              </Button>
              <Button variant="outlined" color="primary" style={{ minWidth: "100%",marginRight: 0,borderRadius:3,marginTop:2}}>
                Primary
              </Button>
              <Button variant="outlined" color="primary" style={{ minWidth: "100%",marginRight: 0,borderRadius:3,marginTop:2}}>
                Primary
              </Button>
              <Button variant="outlined" color="primary" style={{ minWidth: "100%",marginRight: 0,borderRadius:3,marginTop:2}}>
                Primary
              </Button>
              <Button variant="outlined" color="primary" style={{ minWidth: "100%",marginRight: 0,borderRadius:3,marginTop:2}}>
                Primary
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
    )
}
