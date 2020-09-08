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

  return (
    <div>
      <IconButton aria-label="Add Activity" onClick={props.handleClickOpen}>
        <AddBoxIcon />
      </IconButton>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        minWidth="800"
      >
        <form onSubmit={props.handleSubmit}>
          <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
            Create Activity
          </DialogTitle>
          <DialogContent dividers>
            <div>
              <TextField
                id="activityName"
                label="Activity Name"
                defaultValue={props.openEdit?.activityName}
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
                value={state.major}
              >
                <option aria-label="None"  />
                <option value={"IT"}>เทคโนโลยรสารสนเทศ(IT)</option>
                <option value={"CS"}>วิทยาการคอมพิวเตอร์(CS)</option>
                <option value={"DSI"}>นวัตกรรมบริการดิจิตอล(DSI)</option>
                <option value={"SIT"}>คณะเทคโนโลยีสารสนเทศ(SIT)</option>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl2}>
              <InputLabel>ปีที่จัดกิจกรรม</InputLabel>
              <Select
                native
                label="ปีที่จัดกิจกรรม"
                onChange={handleChange}
                value={state.year}
                name="year"
                id="yearofActivity"
              >
                <option aria-label="None" value="" />
                <option value={"2017"}>2017</option>
                <option value={"2018"}>2018</option>
                <option value={"2019"}>2019</option>
                <option value={"2020"}>2020</option>
              </Select>
            </FormControl>

            <div className="my-3">
              <input type="file" id="upload_file" />
            </div>
          </DialogContent>

          <DialogActions>
            <Button autoFocus color="primary" type="submit">
              Save changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
