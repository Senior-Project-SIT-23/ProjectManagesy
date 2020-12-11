import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

export default function SimpleCard(props) {
  const useStyles = makeStyles({
    root: {
      // minWidth: 275,
      minHeight: 150,
      backgroundColor: `${props.backgroundColor}`,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 18,
      color: `${props.fontColor}`,
    },
    pos: {
      marginBottom: 12,
    },

  })
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography className="text-center ">
          <div className="flex justify-center">
            <div >
              <p className="mt-2 mr-2">{props.percentBoy}</p>
              <p className="mr-2">{props.countBoy}</p>
            </div>
            <div>{props.icon}</div>
            <div>
            <p className="mt-2 ml-2">{props.percentGirl}</p>
            <p className="ml-2">{props.countGirl}</p>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  )
}