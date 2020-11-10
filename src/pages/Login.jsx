import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Public } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#EBEFF1",
    minHeight: "100vh",
    backgroundImage: 'url(/Background.jpg)'
  },
  title: {
    fontFamily: "Athiti",
    fontSize: 50,
    // color: "#3E3E3E",
    color: "white",
  },
  login: {
    color: "white",
  },
  button: {
    borderRadius: 30,
    // backgroundColor: "#3E3E3E",
    backgroundColor: "white",
    color: '#3E3E3E',
    
    
  }
}))

export default function Login() {
  const classes = useStyles()

  return (
    <div
      className={`flex content-center flex-wrap  min-h-screen ${classes.root}`}
    >
      <div className={`w-full `}>
        <div className={`text-center`}>
          <h1 className={`${classes.title} `}>M A N A G E S Y</h1>
          <a href="http://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=PYXjbgDs&redirect_uri=http://localhost:3000/CallBack&state=Managesy" style={{textDecoration: 'none'}}>
            {/* <button className={`text-center ${classes.login}`}>Login</button> */}
            <Button variant="contained"  className={`${classes.button}`}>
            Login via SSO         
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
