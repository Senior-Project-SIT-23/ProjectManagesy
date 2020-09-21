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
import FilterListIcon from "@material-ui/icons/FilterList"
import Checkbox from "@material-ui/core/Checkbox"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"

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
    maxWidth: "370px",
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton aria-label="filter list" onClick={handleClickOpen}>
        <FilterListIcon />
      </IconButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
         <div className="font-athiti">ค้นหา</div> 
        </DialogTitle>
        <DialogContent dividers>
          <FormControl component="fieldset">
            <FormLabel component="legend" className="filter">
              ค้นหาด้วยสาขา
            </FormLabel>
            <FormGroup aria-label="filter" row>
              <FormControlLabel
                value="IT"
                control={<Checkbox color="primary" />}
                label="IT&nbsp; &nbsp; &nbsp; "
                labelPlacement="IT"
              />
              <FormControlLabel
                value="CS"
                control={<Checkbox color="primary" />}
                label="CS&nbsp; &nbsp; "
                labelPlacement="CS"
              />
              <FormControlLabel
                value="DSI"
                control={<Checkbox color="primary" />}
                label="DSI&nbsp; &nbsp; "
                labelPlacement="DSI"
              />
              <FormControlLabel
                value="SIT"
                control={<Checkbox color="primary" />}
                label="SIT"
                labelPlacement="SIT"
              />
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend" className="filter">
              ค้นหาด้วยปีที่จัดกิจกรรม
            </FormLabel>
            <FormGroup aria-label="filter" row>
              <FormControlLabel
                value="2017"
                control={<Checkbox color="primary" />}
                label="2017"
                labelPlacement="2017"
              />
              <FormControlLabel
                value="2018"
                control={<Checkbox color="primary" />}
                label="2018"
                labelPlacement="2018"
              />
              <FormControlLabel
                value="2019"
                control={<Checkbox color="primary" />}
                label="2019"
                labelPlacement="2019"
              />
              <FormControlLabel
                value="2020"
                control={<Checkbox color="primary" />}
                label="2020"
                labelPlacement="2020"
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" className="font-athiti"  onClick={handleClose}>
            ค้นหา
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
