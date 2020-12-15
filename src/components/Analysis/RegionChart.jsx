import React from "react"
import { Polar } from "react-chartjs-2"
import { Grid, Paper, Typography } from "@material-ui/core"
import _ from 'lodash'
import { useEffect , useState,useCallback} from "react"
export default function RegionChart(props) {
  

  
  const [data, setData] = useState()

  const fetchData = useCallback(async () => {
    const tempLabel = [];
    const tempDataset = [];
    const tempNum =[];
    _.map(props.data,(d,i)=>{
      tempLabel.push(d.data_province);
      tempNum.push(d.num_of_province)
      
      
      // data.datasets.data.push(dataArray.num_of_province)
    })
    
    tempDataset.push({
        
      data: tempNum,
      backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED","#E459ED"],
      hoverBackgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"],
      hoverBorderColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"],
      hoverBorderWidth: 8,
      label: "My dataset", // for legend

  
    })
    setData({
      labels: tempLabel,
      datasets: tempDataset,
    });

  },[props.data])
  useEffect(() => {
    fetchData();
  }, [fetchData])
  
  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
  }
 


  
  // props.data.map((dataArray) => {
    
    // data.datasets.map((dataset) => {
    //   if(dataset.label === "IT"){
    //     dataset.data.push(dataArray.IT)
    //   }else if(dataset.label === "CS"){
    //     dataset.data.push(dataArray.CS)
    //   }else if(dataset.label === "DSI"){
    //     dataset.data.push(dataArray.DSI)
    //   }
    // })
  // })



  return (
    <div>  
        
      <Paper style={{ padding: 10, height: 342 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"กราฟแสดงปริมาณนักศึกษาจากโรงเรียนในแต่ละจังหวัด"}</b>
              </div>
            </Typography>
            <Polar data={data} options={options} height={250} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
