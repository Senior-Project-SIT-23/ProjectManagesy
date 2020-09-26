import React from "react"
import PropTypes from "prop-types"
import { lighten, makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { fade } from "@material-ui/core/styles"
import TablePagination from "@material-ui/core/TablePagination"

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
})

function createData(idCard, name, school, sumActivity, sumAdmission) {
  return {
    idCard,
    name,
    school,
    sumActivity,
    sumAdmission,

    activity: [
      { date: "wipcamp#10", customerId: "2018" },
      { date: "wipcamp#11", customerId: "2019" },
    ],

    admission: [
      { date: "โครงการ Active Recruitment", customerId: "รอบ 1", year: "2017" },
      { date: "โครงการทุนเพชรพระจอม", customerId: "รอบ 2", year: "2017" },
    ],
  }
}

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.idCard}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell align="center">{row.school}</TableCell>
        <TableCell align="center">{row.sumActivity}</TableCell>
        <TableCell align="center">{row.sumAdmission}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="font-athiti"
              >
                รายชื่อกิจกรรมที่เข้าร่วม
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><b>ชื่อกิจกรรม</b></TableCell>
                    <TableCell><b>ปีที่จัดกิจกรรม</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.activity.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="font-athiti"
              >
                รายชื่อโครงการที่สมัครสอบ
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><b>ชื่อโครงการที่สมัครสอบ</b></TableCell>
                    <TableCell><b>รอบที่สมัครสอบ</b></TableCell>
                    <TableCell><b>ปีที่สมัครสอบ</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.admission.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    activity: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}

const rows = [
  createData("60130500xxx", "อินทิรา  ตั้งนิรามัย", "อัสสัมชัญศึกษา", 4, 1),
  createData("60130500xxx", "อินทิรา  ตั้งนิรามัย", "อัสสัมชัญศึกษา", 4, 1),
  createData("60130500xxx", "อินทิรา  ตั้งนิรามัย", "อัสสัมชัญศึกษา", 4, 1),
  createData("60130500xxx", "อินทิรา  ตั้งนิรามัย", "อัสสัมชัญศึกษา", 4, 1),
  createData("60130500xxx", "อินทิรา  ตั้งนิรามัย", "อัสสัมชัญศึกษา", 4, 1),
  createData("60130500xxx", "อินทิรา  ตั้งนิรามัย", "อัสสัมชัญศึกษา", 4, 1),
]

const useStylesSearch = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },

  title: {
    flex: "1 1 100%",
  },
}))

export default function CollapsibleTable() {
  const classes = useStylesSearch()
  const classesTitle = useToolbarStyles()
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(0)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows?.length - page * rowsPerPage)

  return (
    <Paper className={classes.paper}>
      <TableContainer component={Paper}>
        <Toolbar>
          <Typography
            className={classesTitle.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <div className="font-athiti">ข้อมูลนักเรียน</div>
          </Typography>
          <Tooltip title="ค้นหา...">
            <div className={classes.root}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="ค้นหา..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
          </Tooltip>
        </Toolbar>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">รหัสนักศึกษา</TableCell>
              <TableCell align="center">ชื่อ-นามสกุล</TableCell>
              <TableCell align="center">สาขา</TableCell>
              <TableCell align="center">GPAX</TableCell>
              <TableCell align="center">จำนวนกิจกรรมที่เข้าร่วม</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <Row key={row.name} row={row} />
            ))}
            {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
