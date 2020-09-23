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
    margin: theme.spacing(5),
    marginLeft: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function ShowDataInFileActivity() {
  const { id } = useParams()
  const classesGrid = useStylesGrid()
  const [indexTab, setIndexTab] = useState(1)
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
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  )
}
