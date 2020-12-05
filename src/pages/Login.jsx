import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Public } from "@material-ui/icons"


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EBEFF1",
    minHeight: "100vh",
    backgroundImage: 'url(/managesy.png)',
    backgroundSize: "cover"
    
  },
  title: {
    fontFamily: "Prompt",
    fontSize: 60,
    // color: "#3E3E3E",
    color: "white",
  },
  login: {
    color: "white",
  },
  button: {
    borderRadius: 30,
    // backgroundColor: "#3E3E3E",
    backgroundColor: "#19202B",
    // color: '#3E3E3E',
    fontFamily:'Roboto',
    minWidth: '480px',
    '&:hover': {
      background: "#e3e3e3",
      color: "#19202B",
      fontFamily:'Roboto',
   },
  }
 
}))

export default function Login() {
  const classes = useStyles()

  return (
    // <div
    //   className={`flex content-center flex-wrap min-h-screen ${classes.root}`}
    // >
    //   <div className={`w-full `}>
    //     <div className={`text-left`}>
    //       <h1 className={`${classes.title} `}>M A N A G E S Y</h1>
    //       <a href="http://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=PYXjbgDs&redirect_uri=http://localhost:3000/CallBack&state=Managesy" style={{textDecoration: 'none'}}>
          
    //         <Button variant="contained"  className={`${classes.button}`}>
    //         Login via SSO         
    //         </Button>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className={classes.root}>
    <div className='flex w-full h-screen'>
      <div className='my-auto ml-20 '>
      <h1 className={`${classes.title} `}>M A N A G E S Y</h1>
           {/* <a href="http://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=PYXjbgDs&redirect_uri=http://localhost:3000/CallBack&state=Managesy" style={{textDecoration: 'none'}}>
             <Button variant="contained" color="primary" className={`${classes.button}`}>
             Login via SSO         
             </Button>
           </a> */}
           <a href="http://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=PYXjbgDs&redirect_uri=https://managesy.netlify.app/CallBack&state=Managesy" style={{textDecoration: 'none'}}>
             <Button variant="contained" color="primary" className={`${classes.button}`}>
             Login via SSO         
             </Button>
           </a>
      </div>
    </div>
    </div>
  )
}
