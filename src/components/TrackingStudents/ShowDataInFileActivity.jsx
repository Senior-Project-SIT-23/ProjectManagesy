import React,{useCallback, useEffect, useState} from "react"
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
import HeaderFile from '../TrackingStudents/HeaderFile'
import Headers from '../../components/Header'
import Grid from "@material-ui/core/Grid"
import TableDataFromFileAct from "./TableDataFromFileAct"
import TableTest from "./TableTest"
import { apiReadFileActivities } from "../../service/activity"

const useStylesTable = makeStyles({
  table: {
    minWidth: 800,
  },
})

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: theme.spacing(5),
    // marginLeft: theme.spacing(10),
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
  const [indexTab, setIndexTab] = useState(0)
  const [data , setData] = useState()

  const fetchActivities = useCallback(async () => {
    const {data} = await apiReadFileActivities(id)
    const tmp = []
    for(let i = 0; i < data.length;i++ ){
      tmp.push({index: i+1, ...data[i]})
    }
    setData(tmp)
  }, [id])

  useEffect(() => {
    fetchActivities()
  }, [fetchActivities])


  //Button
  const handleBack = (index) => {
    console.log(index)
    setIndexTab(index)
    navigate(`/TrackingStudents`)
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
    <HeaderFile handleChangeTab={handleChangeTab} indexTab={indexTab} />
    <div className="flex flex-col flex-1 p-10 mx-auto max-w-screen-lg min-h-screen">
    
    
        {/* <Grid container spacing={3}> */}
          {/* <Grid item>
            <div className={useStyles.root}>
              <IconButton aria-label="Back" onClick={()=> handleBack(indexTab)}>
                <ArrowBackSharpIcon />
              </IconButton>
            </div>
          </Grid> */}
          
          {/* <Grid item xs={10}> */}
            <TableDataFromFileAct title={name} data={data} />
          {/* </Grid>
        </Grid> */}
        
      </div>
    </>
  )
}
