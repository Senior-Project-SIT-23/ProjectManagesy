import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogActions from "@material-ui/core/DialogActions"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import AddBoxIcon from "@material-ui/icons/AddBox"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"
import { createMuiTheme, MuiThemeProvider,ThemeProvider } from "@material-ui/core/styles"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    minWidth: "400px",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 250,
    marginTop: theme.spacing(2),
  },
  formControl2: {
    marginTop: theme.spacing(2),
    marginLeft: "20px",
    minWidth: 150,
  },
  col:{
    color: 'red',
    fontSize: '12px',
    marginTop:theme.spacing(1)
  },
  format:{
    color: 'blue',
    marginBottom: theme.spacing(2)
  },
  upload:{
    marginTop: theme.spacing(1)
  }
}))



export default function CustomizedDialogs(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    year: "",
    major: "",
  })

  const handleChange = (event) => {
    const name = event.target.name
    console.log(name)
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#18202c',
        
      },
    },
    shape: {
    borderRadius: 30,
  }, 
  });
  return (
    <div>
      <Tooltip title="เพิ่มกิจกรรม">
      {/* <IconButton aria-label="Add Activity" onClick={props.handleClickOpen}>
        <AddBoxIcon />
      </IconButton> */}
      <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.handleClickOpen}
        size="large"
        className={classes.button}
        startIcon={<AddBoxIcon />}
        
      >
        <div className="font-athiti">สร้างกิจกรรม</div>
      </Button>
      </ThemeProvider>
      </Tooltip>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        minWidth="800"
      >
        <form
          onSubmit={async (event) => {
            await props.handleSubmit(event)
            setState({
              year: "",
              major: "",
            })
          }}
        >
          
          <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          <div className="font-athiti">{props.topic}</div>
          </DialogTitle>
          <DialogContent dividers>
            <input
              hidden
              id="id"
              defaultValue=""
              value={props.openEdit?.activity_id}
            />
            <input
              hidden
              id="delete_file_id"
              defaultValue={[]}
              value={[props.openEdit?.activity_file_id]}
            />
            <div>
              <TextField
                required
                id="activityName"
                label="ชื่อกิจกรรม"
                defaultValue={props.openEdit?.activity_name}
                variant="outlined"
              />
            </div>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>สาขาที่จัดกิจกรรม</InputLabel>
              <Select
                label="สาขาที่จัดกิจกรรม"
                native
                onChange={handleChange}
                id="ํmajorofActivity"
                name="major"
                required
                value={state.major || props.openEdit?.activity_major}
              >
                <option aria-label="None" />
                <option value={"IT"}>เทคโนโลยีสารสนเทศ(IT)</option>
                <option value={"CS"}>วิทยาการคอมพิวเตอร์(CS)</option>
                <option value={"DSI"}>นวัตกรรมบริการดิจิตอล(DSI)</option>
                <option value={"SIT"}>คณะเทคโนโลยีสารสนเทศ(SIT)</option>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl2}>
              <InputLabel>ปีที่จัดกิจกรรม</InputLabel>
              <Select
                native
                required
                label="ปีที่จัดกิจกรรม"
                onChange={handleChange}
                value={state.year || props.openEdit?.activity_year}
                name="year"
                id="yearofActivity"
              >
                <option aria-label="None" value="" />
                <option value={"2017"}>2016</option>
                <option value={"2017"}>2017</option>
                <option value={"2018"}>2018</option>
                <option value={"2019"}>2019</option>
                <option value={"2020"}>2020</option>
                <option value={"2021"}>2021</option>
              </Select>
            </FormControl>

            <div className="my-3">
              <p> format ไฟล์: <a href='/format.csv' download className={classes.format}>format.csv </a></p>
              
              <input
                className={classes.upload}
                required={!props.openEdit}
                type="file"
                id="upload_file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
              <p className={classes.col}>**กรุณาอัปโหลดเป็นไฟล์ .CSV UTF-8 เท่านั้น</p>
              <p className="my-3">Current :{props.openEdit?.activity_file_name}</p>
            </div>
          </DialogContent>

          <DialogActions>
            <Button autoFocus color="primary" type="submit" >
              บันทึก
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
