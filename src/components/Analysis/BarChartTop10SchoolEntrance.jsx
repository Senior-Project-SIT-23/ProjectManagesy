import React, { useState,useCallback,useEffect } from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { HorizontalBar } from "react-chartjs-2"
import _ from 'lodash'

export default function BarChartTop10SchoolAct(props) {
  
  
  // console.log("props.data", props.data)

  const [data, setData] = useState();

  
  const fetchData = useCallback(async () => {
    const tempLabel = [];
    const tempDataset = [];
    const tempIT =[];
    const tempCS = [];
    const tempDSI = [];
    _.map(props.data, (d, i) => {
      tempLabel.push(d.data_school_name);
      if(d.IT > 0){
        tempIT.push(d.IT)
      }else if(d.CS > 0){
        tempCS.push(d.CS)
      }else if(d.DSI > 0){
        tempDSI.push(d.DSI)
      }
       
      
    });
    tempDataset.push({
      label: "IT",
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
      stack: 1,
      // hoverBackgroundColor: "rgba(255,99,132,0.4)",
      // hoverBorderColor: "rgba(255,99,132,1)",
      data: tempIT,
    });

    tempDataset.push({
      label: "CS",
      backgroundColor: "#FFCE56",
      borderColor: "#FFCE56",
      borderWidth: 1,
      stack: 1,
      // hoverBackgroundColor: "rgba(255,99,132,0.4)",
      // hoverBorderColor: "rgba(255,99,132,1)",
      data: tempCS,
    });
 
    tempDataset.push({
      label: "DSI",
      backgroundColor: "#4BC0C0",
      borderColor: "#4BC0C0",
      borderWidth: 1,
      stack: 1,
      // hoverBackgroundColor: "rgba(255,99,132,0.4)",
      // hoverBorderColor: "rgba(255,99,132,1)",
      data: tempDSI,
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
      {/* {console.log("data",data)} */}
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
