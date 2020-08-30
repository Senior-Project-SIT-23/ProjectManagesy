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

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
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

export default function CustomizedDialogs(props) {
  return (
    <div>
      <IconButton aria-label="Add Activity" onClick={props.handleClickOpen}>
        <AddBoxIcon />
      </IconButton>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
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
            <div className="my-2">
              
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
