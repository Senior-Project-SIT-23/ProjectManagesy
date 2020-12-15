import React, { useState,useCallback,useEffect } from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { HorizontalBar } from "react-chartjs-2"
import _ from 'lodash'

export default function BarChartTop10SchoolEntrance(props) {

  const [data, setData] = useState()

  const fetchData = useCallback(async () => {
    const tempLabel = [];
    const tempDataset = [];
    const tempCount = []
    _.map(props.data, (d, i) => {
      tempLabel.push(d.data_school_name);
      tempCount.push(d.SUM)
    });
    tempDataset.push({
      label: "จำนวนนักเรียนที่มาเข้าร่วมกิจกรรม",
        backgroundColor: ["#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED"],
        borderColor: ["#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED","#FFCE56","#E7E9ED"],
        borderWidth: 1,
        data: tempCount,
    });
    setData({
      labels: tempLabel,
      datasets: tempDataset,
    });

    
  },[props.data]);


  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return (
    <div>
      {console.log("props.data",props.data)}
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
