import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#18202c",
    minHeight: "100vh",
  },
  title: {
    fontFamily: "Athiti",
    fontSize: 50,
    color: "white",
  },
  login: {
    color: "white",
  },
}))

export default function Login() {
  const classes = useStyles()

  return (
    <div
      className={`flex content-center flex-wrap  min-h-screen ${classes.root}`}
    >
      <div className={`w-full `}>
        <div className={`text-center`}>
          <h1 className={`${classes.title} `}>Managesy</h1>
          <button className={`text-center ${classes.login}`}><a>Login</a></button>
          
        </div>
      </div>
    </div>
  )
}
