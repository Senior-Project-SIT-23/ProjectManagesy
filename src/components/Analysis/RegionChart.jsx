import React from 'react'
import {Polar} from 'react-chartjs-2';
import { Grid, Paper, Typography } from "@material-ui/core"

export default function RegionChart() {
    const data = {
        datasets: [{
          data: [
            11,
            16,
            7,
            12,
            
          ],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
           
          ],
          label: 'My dataset' // for legend
        }],
        labels: [
          'ภาคเหนือ',
          'ภาคกลาง',
          'ภาคใต้',
          'ภาคอีสาน',
          
        ]
      };
      const options = {
        legend: {
          display: true,
          position: "bottom",
        },
      }
    return (
        <div>
            <Paper style={{ padding: 10, height: 300 }}>
        <Grid container>
          <Grid item container direction="column" spacing={2}>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              <div className="font-athiti ">
                <b>{"กราฟแสดงจำนวนนักศึกษาจากโรงเรียนในแต่ละภูมิภาค"}</b>
              </div>
            </Typography>
            <Polar data={data} options={options} height={250} />
          </Grid>
        </Grid>
      </Paper>
        </div>
    )
}
