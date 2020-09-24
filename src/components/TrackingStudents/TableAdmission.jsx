import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { lighten, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { fade } from "@material-ui/core/styles"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DialogCreateAdmission from "./DialogCreateAdmission"
import DialogFilterAdmission from "./DialogFilterAdmission"
import DialogDeleteAdmission from "./DialogDeleteAdmission"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import {apiDeteteAdmission,} from "../../service/admission"
import { Link, navigate } from "@reach/router"


// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1
//   }
//   return 0
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy)
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index])
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0])
//     if (order !== 0) return order
//     return a[1] - b[1]
//   })
//   return stabilizedThis.map((el) => el[0])
// }

// const headCells = [
//   {
//     id: "admissionName",
//     numeric: false,
//     disablePadding: true,
//     label: "ชื่อโครงการสมัครสอบ",
//   },
//   { id: "round", numeric: true, disablePadding: false, label: "รอบ" },
//   { id: "major", numeric: true, disablePadding: false, label: "สาขา" },
//   { id: "year", numeric: true, disablePadding: false, label: "ปีการศึกษา" },
//   { id: "file", numeric: true, disablePadding: false, label: "ไฟล์" },
//   { id: "edit", numeric: true, disablePadding: false, label: "แก้ไข" },
// ]

// function EnhancedTableHead(props) {
//   const {
//     classes,
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property)
//   }

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ "aria-label": "select all desserts" }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "left" : "left"}
//             padding={headCell.disablePadding ? "none" : "default"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   )
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// }

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === "light"
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: "1 1 100%",
//   },
// }))

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles()
//   const { numSelected } = props
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       display: "none",
//       [theme.breakpoints.up("sm")]: {
//         display: "block",
//       },
//     },
//     search: {
//       position: "relative",
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       "&:hover": {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
//       marginLeft: 0,
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(1),
//         width: "auto",
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: "100%",
//       position: "absolute",
//       pointerEvents: "none",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     inputRoot: {
//       color: "inherit",
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }))
//   const classes1 = useStyles()
//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           className={classes.title}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           className={classes.title}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           <div className="font-athiti">โครงการสมัครสอบ</div>
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete">
//             <button>
//               <DialogDeleteAdmission
//                 handleDeleteAdmission={props.handleDeleteAdmission}
//               />
//             </button>
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <>
//          <Tooltip title="ค้นหา...">
//           <div className={classes1.root}>
//             <div className={classes1.search}>
//               <div className={classes1.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder="ค้นหา..."
//                 classes={{
//                   root: classes1.inputRoot,
//                   input: classes1.inputInput,
//                 }}
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </div>
//           </div>
//           </Tooltip>

//           <DialogFilterAdmission />
//           <DialogCreateAdmission {...props} />
//         </>
//       )}
//     </Toolbar>
//   )
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   paper: {
//     width: "100%",
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1,
//   },
// }))

export default function EnhancedTable(props) {
  // 
  function showDataInFile(id) {
    navigate(`/ShowDataFileAdmission/${id}`)
  }

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          titleText: {
            fontFamily: "Athiti",
          },
        },
      },
    })

  const columns = () => {
    return [
      {
        name: "admission_name",
        label: "ชื่อโครงการสมัครสอบ",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a
              onClick={() => showDataInFile(tableMeta.rowData[11])}
              style={{ cursor: "pointer" }}
            >
              {value}
            </a>
          ),
          filter: false,
        },
      },
      { name: "round_name", label: "รอบ" },
      { name: "admission_major", label: "สาขา" },
      { name: "admission_year", label: "ปีการศึกษา" },
      {
        name: "admission_file_name",
        label: "ไฟล์",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a
              href={`${process.env.REACT_APP_BE_STORAGE}/${tableMeta.rowData[6]}`}
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              {value}
            </a>
          ),
          filter: false,
        },
      },
      {
        name: "",
        label: "แก้ไข",
        options: {
          customBodyRender: (value, tableMeta) => (
            <IconButton>
              <EditOutlinedIcon
                onClick={() => {
                  console.log(tableMeta.rowData)
                  props.handleClickEditAdmission(changeValue(tableMeta.rowData))
                }}
              />
            </IconButton>
          ),
          filter: false,
        },
      },
      { name: "admission_file", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "updated_at", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "keep_file_name", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "created_at", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "admission_file_id", options: { display: false, filter: false ,viewColumns: false,download:false} },
      { name: "admission_id", options: { display: false, filter: false ,viewColumns: false,download:false} },
     
    ]
  }

  const data = props.rowsAdmissions
 
  const changeValue = (data) => {
    console.log(data)
    const dataRes = {
      
      admission_name: data[0],
      round_name:data[1],
      admission_major: data[2],
      admission_year: data[3],
      admission_file_name: data[4],
      
      admission_file: data[6],
      updated_at: data[7],
      keep_file_name: data[8],
      created_at: data[9],
      admission_file_id: data[10],
      admission_id: data[11]
    }
    console.log(dataRes)
    return dataRes
  }

  const options = {
    filterType: "checkbox",
    onRowsDelete: async (deleted) => {
      console.log(data)
      console.log(deleted.data)
      let Id = []
      for (let i = 0; i < deleted.data.length; i++) {
        let n = deleted.data[i].index

        Id.push(data[n].admission_id)
      }

      const datRes = { admission_id: Id }
      await apiDeteteAdmission(datRes)
    },
    download: {
      activity_id: false
    }
  }
  // const classes = useStyles();

  const clickedit = () => {
    props.handleClickEditAdmission()
  }

  
  return (
    <div>
      {/* <Tooltip title="Delete">
            <DialogConfirmDelete  handleDelete={props.handleDelete}/>
        </Tooltip> */}
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={"mb-2"}>
         
          <DialogCreateAdmission {...props} edit={true}/>
        </div>
      </Grid>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"โครงการสมัครสอบ"}
          data={data}
          columns={columns(clickedit)}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}
