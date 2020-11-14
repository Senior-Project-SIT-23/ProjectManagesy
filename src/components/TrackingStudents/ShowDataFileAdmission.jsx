import React,{useCallback, useEffect, useState} from "react"
import { navigate, useParams } from "@reach/router"
// import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp"
// import Fab from "@material-ui/core/Fab"
import { makeStyles } from "@material-ui/core/styles"
// import Table from "@material-ui/core/Table"
// import TableBody from "@material-ui/core/TableBody"
// import TableCell from "@material-ui/core/TableCell"
// import TableContainer from "@material-ui/core/TableContainer"
// import TableHead from "@material-ui/core/TableHead"
// import TableRow from "@material-ui/core/TableRow"
// import Paper from "@material-ui/core/Paper"
// import IconButton from '@material-ui/core/IconButton';
import HeaderFileAdmission from '../TrackingStudents/HeaderFileAdmission'
// import Headers from '../../components/Header'
// import Grid from "@material-ui/core/Grid"
import TableDataFormFileAdmission from "./TableDataFormFileAdmission"
import { apiReadFileAdmission } from "../../service/admission"
// import { data } from "autoprefixer"

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
  const [indexTab, setIndexTab] = useState(0)
  const [data , setData] = useState()
  // const [data, setdata] = useState()
  //Button
  const handleBack = (index) => {
    console.log(index)
    setIndexTab(index)
    navigate(`/`)
  }
 const fetchAdmission = useCallback(async () => {
   const {data} = await apiReadFileAdmission(id)
   const tmp = []
    for(let i = 0; i < data.length;i++ ){
      tmp.push({index: i+1, ...data[i]})
    }
    setData(tmp)
   
 },[id])

 useEffect(() => {
   fetchAdmission()
 },[fetchAdmission])

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
    <HeaderFileAdmission handleChangeTab={handleChangeTab} indexTab={indexTab} />
    <div className="flex flex-col flex-1 p-10 mx-auto max-w-screen-lg min-h-screen">
      {/* <div className={classesGrid.root}>
        <Grid container spacing={3}>
         
          <Grid item>
            <div className={useStyles.root}>
            
              <IconButton aria-label="Back" onClick={()=> handleBack(indexTab)}>
                <ArrowBackSharpIcon />
              </IconButton>
            </div>
          </Grid>
         
          <Grid item> */}
            <TableDataFormFileAdmission title={name} data={data}/>
          {/* </Grid>
        </Grid>
       
      </div> */}
      </div>
    </>
  )
}
