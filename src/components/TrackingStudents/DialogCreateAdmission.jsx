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
import AddBoxIcon from "@material-ui/icons/AddBox"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { round } from "lodash"

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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpenCreateAdmission = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },

    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
        
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    formControl2: {
        marginLeft : "20px",
        marginTop: theme.spacing(2),
    }
  }))

  const classes = useStyles();
  const [state, setState] = React.useState({
    round: "",
    major: "",
    year: "",
  })

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  };

  return (
    <div>
      <IconButton
        aria-label="Add Admission"
        onClick={handleClickOpenCreateAdmission}
      >
        <AddBoxIcon />
      </IconButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        minWidth="800"
      >
        <form>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <div className="font-athiti">สร้างโครงการสมัครสอบ</div>
          </DialogTitle>
          <DialogContent dividers>
            <TextField
              id="admissionName"
              label="ชื่อโครงการ"
              variant="outlined"
            />
            <br></br>
            
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel >รอบที่รับสมัคร</InputLabel>
              <Select
                native
                value={state.round}
                onChange={handleChange}
                label="รอบที่รับสมัคร"
                inputProps={{
                  name: "round",
                  id: "round",
                }}
              >
                <option aria-label="None" value=""/>
                <option value={"รอบ 1"}>รอบ 1 แฟ้มสะสมผลงาน</option>
                <option value={"รอบ 2"}>รอบ 2 โควตา</option>
                <option value={"รอบ 3"}>รอบ 3 รับตรงร่วมกัน</option>
                <option value={"รอบ 4"}>รอบ 4 Admission</option>
                <option value={"รอบ 5"}>รอบ 5 รับตรงอิสระ</option>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl2}>
              <InputLabel>ปีการศึกษา</InputLabel>
              <Select
                native
                required
                label="ปีการศึกษา"
                onChange={handleChange}
                value={state.year}
                name="year"
                id="semester"
              >
                <option aria-label="None" value="" />
                <option value={"2017"}>2017</option>
                <option value={"2018"}>2018</option>
                <option value={"2019"}>2019</option>
                <option value={"2020"}>2020</option>
              </Select>
            </FormControl>
            <br></br>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel >สาขา</InputLabel>
              <Select
                native
                value={state.major}
                onChange={handleChange}
                label="major"
                inputProps={{
                  name: "major",
                  id: "majorAdmission",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"IT"}>เทคโนโลยรสารสนเทศ(IT)</option>
                <option value={"CS"}>วิทยาการคอมพิวเตอร์(CS)</option>
                <option value={"DSI"}>นวัตกรรมบริการดิจิตอล(DSI)</option>
                <option value={"SIT"}>คณะเทคโนโลยีสารสนเทศ(SIT)</option>
              </Select>
            </FormControl>

            <div className="my-4">
              
              <input
                // required
                type="file"
                id="upload_file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
              <br></br>
              <p className="my-3">Current :</p>
            </div>
            
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              <div>บันทึก</div>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
