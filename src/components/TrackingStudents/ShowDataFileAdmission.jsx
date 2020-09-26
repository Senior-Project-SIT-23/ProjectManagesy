import React,{useState} from "react"
import { navigate, useParams } from "@reach/router"
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp"
import Fab from "@material-ui/core/Fab"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import IconButton from '@material-ui/core/IconButton';
import Header from '../TrackingStudents/Header'
import Headers from '../../components/Header'
import Grid from "@material-ui/core/Grid"
import TableDataFormFileAdmission from "./TableDataFormFileAdmission"

const useStylesTable = makeStyles({
  table: {
    minWidth: 800,
  },
})


const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5),
    marginLeft: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function ShowDataInFileActivity(props) {
  const { id,name } = useParams()
  const classesGrid = useStylesGrid()
  const [indexTab, setIndexTab] = useState(2)
  //Button
  const handleBack = (index) => {
    console.log(index)
    setIndexTab(index)
    navigate(`/`)
  }
  function handleChangeTab(index) {
    setIndexTab(index)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }))
  //Table
  const classes = useStylesTable()
  return (
    <>
    <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
      <div className={classesGrid.root}>
        <Grid container spacing={3}>
          {/* <div className="backbutton"> */}
          <Grid item>
            <div className={useStyles.root}>
              {/* hello
            {id} */}
              {/* <Fab aria-label="ย้อนกลับ" onClick={handleBack}>
                
              </Fab> */}
              <IconButton aria-label="Back" onClick={()=> handleBack(indexTab)}>
                <ArrowBackSharpIcon />
              </IconButton>
            </div>
          </Grid>
          {/* <div className="tableShowdata"> */}
          <Grid item>
           
            <TableDataFormFileAdmission title={name}/>
          </Grid>
        </Grid>
       
      </div>
    </>
  )
}
