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
import { makeStyles,ThemeProvider ,createMuiTheme} from "@material-ui/core/styles"
import { CSVReader } from "react-papaparse"


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

const buttonRef = React.createRef()

export default function CustomizedDialogs(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    year: "",
    major: "",
  })
  const [open, setOpen] = React.useState(false)

  const handleChange = (event) => {
    const name = event.target.name
    console.log(name)
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
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

   //uploadfile
   const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  const handleOnFileLoad = (data) => {
    const temp = []
    for (let i = 0; i < data.length - 1; i++) {
      temp.push(data[i].data)
    }
    console.log(temp)
    props.setDataFileAdmission(temp)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  return (
    <div>
      <IconButton aria-label="Add Activity" >
       
        <ThemeProvider theme={theme}>
      <Button 
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        size="large"
        className={classes.button}
        startIcon={<AddBoxIcon />}>
           <div className="font-athiti">สร้างกิจกรรม</div>
      </Button>
      </ThemeProvider>
      </IconButton>
      <Dialog
        // onClose={props.handleClose}
        // aria-labelledby="customized-dialog-title"
        open={open}
        minWidth="800"
      >
        <form
        //   onSubmit={async (event) => {
        //     await props.handleSubmit(event)
        //     setState({
        //       year: "",
        //       major: "",
        //     })
        //   }}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            สร้างกิจกรรม
          </DialogTitle>
          <DialogContent dividers>
            <input
              hidden
              id="id"
              defaultValue=""
            //   value={props.openEdit?.activity_id}
            />
            <input
              hidden
              id="delete_file_id"
              defaultValue={[]}
            //   value={[props.openEdit?.activity_file_id]}
            />
            <div>
              <TextField
                required
                id="activityName"
                label="ชื่อกิจกรรม"
                // defaultValue={props.openEdit?.activity_name}
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
                // value={state.major || props.openEdit?.activity_major}
              >
                <option aria-label="None" />
                <option value={"IT"}>เทคโนโลยีสารสนเทศ(IT)</option>
                <option value={"CS"}>วิทยาการคอมพิวเตอร์(CS)</option>
                <option value={"DSI"}>นวัตกรรมบริการดิจิตอล(DSI)</option>

              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl2}>
              <InputLabel>ปีการศึกษา</InputLabel>
              <Select
                native
                required
                label="ปีการศึกษา"
                onChange={handleChange}
                // value={state.year || props.openEdit?.activity_year}
                name="year"
                id="year"
              >
                <option value={"2563"}>2563</option>
                <option value={"2562"}>2562</option>
                <option value={"2561"}>2561</option>
                <option value={"2560"}>2560</option>
                <option value={"2559"}>2559</option>
              </Select>
            </FormControl>

            <div className="my-3">
            
              <p>
                {" "}
                format ไฟล์:{" "}
                <a
                  href="/formatAdmission.csv"
                  download
                  className={classes.format}
                >
                  formatFileAdmission.csv{" "}
                </a>
              </p>
            
              {/* {props.errorMessage && (
              <p className="my-3 text-red-600">Alert : {props.errorMessage}</p>
              )} */}

              <CSVReader
                ref={buttonRef}
                onFileLoad={handleOnFileLoad}
                onError={handleOnError}
                noClick
                noDrag
                config={{ header: true }}
                // required={!props.openEditAdmission}
                accept=".csv"
              >
                {({ file }) => (
                  <aside
                    id="upload_file"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: 10,
                    }}
                  >
                    <button
                      required={!props.openEditAdmission}
                      type="button"
                      onClick={handleOpenDialog}
                      style={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 5,
                        marginBottom: 5,
                        width: "40%",
                        paddingLeft: 0,
                        paddingRight: 0,
                        backgroundColor: "#336699",
                        color: "white",
                      }}
                    >
                      Browe file
                    </button>
                    <div
                      style={{
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#ccc",
                        height: 45,
                        lineHeight: 2.5,
                        marginTop: 5,
                        marginBottom: 5,
                        paddingLeft: 13,
                        paddingTop: 3,
                        width: "60%",
                      }}
                    >
                      {file && props.setDataFileNameAdmission(file.name)}
                      {file && file.name}
                    </div>
                  </aside>
                )}
              </CSVReader>
              <p className={classes.col}>
                **กรุณาอัปโหลดเป็นไฟล์ .CSV UTF-8 เท่านั้น
              </p>
              <p className="my-3">
                {/* Current :{props.openEditAdmission?.admission_file_name} */}
              </p>
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
