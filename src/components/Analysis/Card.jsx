import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 131,
    maxWidth: 280,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon:{
    margin:'auto'

  }
})

export default function SimpleCard(props) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item>{props.icon}</Grid>
          <Grid item xs={12} sm container>
            <Grid item container direction="column" spacing={2}>
              <Grid item xs>
              <Typography  variant="subtitle1">
                <div className="font-athiti"><b>{props.title}</b></div>
              </Typography>
              <Typography variant="subtitle1" style={{fontSize:20}}>
                <div className="font-athiti">{props.count}</div>
              </Typography>
              
              </Grid>
            </Grid>
          </Grid>
          {/* <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
