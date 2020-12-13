import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { HorizontalBar } from "react-chartjs-2"

export default function BarChartTop10SchoolAct(props) {
  const data = {
    labels: [
      props.data[0].data_school_name,
      props.data[1].data_school_name,
      props.data[2].data_school_name,
      // props.data[3].data_school_name,
      // props.data[4].data_school_name,
      // props.data[5].data_school_name,
      // props.data[6].data_school_name,
      // props.data[7].data_school_name,
      // props.data[8].data_school_name,
      // props.data[9].data_school_name,
    ],
    datasets: [
      {
        label: "IT",
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [props.data[0].IT,props.data[1].IT,props.data[2].IT,30,40,16,18,23,20,22],
      },
      {
        label: "CS",
        backgroundColor: "#FFCE56",
        borderColor:"#FFCE56",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [props.data[0].CS,props.data[1].CS,props.data[2].CS,30,40,16,18,23,20,22],
      },
      {
        label: "DSI",
        backgroundColor: "#4BC0C0",
        borderColor:"#4BC0C0",
        borderWidth: 1,
        stack: 1,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: [props.data[0].DSI,props.data[1].DSI,props.data[2].DSI,30,40,16,18,23,20,22],
      },
    ],

  }

  return (
    <div>
      <Paper style={{ padding: 10, height: 350 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"กราฟแสดง 10 อันดับโรงเรียนที่นักเรียนเข้ามาเป็นนักศึกษา"}</b>
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
