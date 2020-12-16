import React, { useState,useCallback,useEffect } from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { Bar } from "react-chartjs-2"
import _ from 'lodash'

export default function BarChartEntrance(props) {
  const [data, setData] = useState()

  const fetchData = useCallback(async () => {
    const tempLabel = []
    const tempDataset = []
    const tempIT = []
    const tempCS = []
    const tempDSI = []
    _.map(props.data, (d, i) => {
      tempLabel.push(d.admission_name)

     

      tempIT.push(d.IT)
      tempCS.push(d.CS)
      tempDSI.push(d.DSI)
    })
    tempDataset.push({
      label: "IT",
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
      data: tempIT,
    })

    tempDataset.push({
      label: "CS",
      backgroundColor: "#FFCE56",
      borderColor: "#FFCE56",
      borderWidth: 1,
      data: tempCS,
    })

    tempDataset.push({
      label: "DSI",
      backgroundColor: "#4BC0C0",
      borderColor: "#4BC0C0",
      borderWidth: 1,
      data: tempDSI,
    })

    const x = {
      labels: tempLabel,
      datasets: tempDataset,
    };

   

    setData(x)
  },[props.data])

  useEffect(() => {
    fetchData()
  }, [fetchData])

 
  return (
    <div className=" mx-2">
      <Paper style={{ padding: 10, height: 400 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>
                  {"กราฟแสดง 5 อันดับโครงการสมัครสอบที่มาเป็นนักศึกษามากที่สุด"}
                </b>
              </div>
            </Typography>

            <Bar
              data={data}
              height={300}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
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
