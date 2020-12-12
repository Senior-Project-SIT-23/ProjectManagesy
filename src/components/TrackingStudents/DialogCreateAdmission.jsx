import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import AddBoxIcon from "@material-ui/icons/AddBox";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Tooltip from "@material-ui/core/Tooltip";
import { CSVReader } from "react-papaparse";
import { navigate } from "@reach/router";
import _ from "lodash";

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
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
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
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const buttonRef = React.createRef();

export default function CustomizedDialogs(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    col: {
      color: "red",
      fontSize: "12px",
      marginTop: theme.spacing(1),
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 380,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    upload: {
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const [state, setState] = React.useState({
    round_id: 1,
    major: "",
    year: "",
    entrance_id: 1,
    program_id: 1,
  });

  const handleChangeAdmission = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    if (name === "year") {
      props.handleEntrance(event.target.value);
    }
  };

  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: "#18202c",
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
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].errors.length !== 0) {
        break;
      }
      temp.push(data[i].data);
    }
    console.log("temp", temp);
    console.log("data", data);
    props.setDataFileAdmission(temp);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  return (
    <div>
      {console.log("prosp ->>>>", props.entrance)}
      <Tooltip title="เพิ่มโครงการสมัครสอบ">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.handleClickOpenCreateAdmission}
            size="large"
            className={classes.button}
            startIcon={<AddBoxIcon />}
          >
            <div className="font-athiti">สร้างโครงการสมัครสอบ</div>
          </Button>
        </ThemeProvider>
      </Tooltip>

      <Dialog
        onClose={props.handleCloseAdmission}
        aria-labelledby="customized-dialog-title"
        open={props.openAdmission}
        minWidth="800"
      >
        <form
          onSubmit={async (event) => {
            await props.handleSubmitAdmission(event);
            setState({
              round_id: 1,
              major: "",
              year: "",
              entrance_id: 1,
              program_id: 1,
            });
            props.setDataFileAdmission(null);
          }}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={props.handleCloseAdmission}
          >
            <div className="font-athiti">{props.topicAdmission}</div>
          </DialogTitle>
          <DialogContent dividers>
            <input
              hidden
              id="id"
              defaultValue=""
              value={props.openEditAdmission?.admission_id}
            />
            <input
              hidden
              id="delete_admission_file_id"
              defaultValue={[]}
              value={props.openEditAdmission?.admission_file_id}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>ปีการศึกษา</InputLabel>
              <Select
                native
                required
                label="ปีการศึกษา"
                onChange={handleChangeAdmission}
                value={state.year || props.openEditAdmission?.admission_year}
                defaultValue={props && props.defaultValue}
                name="year"
                id="year"
              >
                {props.year &&
                  _.map(props.year, (data, index) => (
                    <option value={data.value}>{data.label}</option>
                  ))}
              </Select>
            </FormControl>
            <br />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>รูปแบบการรับสมัคร</InputLabel>
              <Select
                native
                required
                onChange={handleChangeAdmission}
                label="รูปแบบการรับสมัคร"
                name="entrance_id"
                id="entrance_id"
                value={state.round || props.openEditAdmission?.round_name}
              >
                {props.entrance &&
                  _.map(props.entrance, (data, index) => (
                    <option value={data.entrance_id}>
                      {data.entrance_name}
                    </option>
                  ))}
                {/* <option value={1}>รอบ 1 </option>
                <option value={2}>รอบ 2 </option> */}
              </Select>
            </FormControl>
            <br />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>รอบที่รับสมัคร</InputLabel>
              <Select
                native
                required
                onChange={handleChangeAdmission}
                label="รอบที่รับสมัคร"
                name="round_id"
                id="round_id"
                value={state.round || props.openEditAdmission?.round_name}
              >
                {props.entrance &&
                  _.map(
                    props.entrance[state.entrance_id - 1].round,
                    (data, index) => (
                      <option value={data.round_id}>{data.round_name}</option>
                    )
                  )}
              </Select>
            </FormControl>
            <br />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>ชื่อโครงการที่รับสมัคร</InputLabel>
              <Select
                native
                required
                onChange={handleChangeAdmission}
                label="ชื่อโครงการที่รับสมัคร"
                name="program_id"
                id="program_id"
                value={state.round || props.openEditAdmission?.round_name}
              >
                {props.entrance &&
                  _.map(
                    props.entrance[state.entrance_id - 1].round[
                      state.round_id - 1
                    ].program,
                    (data, index) => (
                      <option value={data.program_id}>
                        {data.program_name}
                      </option>
                    )
                  )}
              </Select>
            </FormControl>

            <br></br>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>สาขา</InputLabel>
              <Select
                native
                required
                value={state.major || props.openEditAdmission?.admission_major}
                onChange={handleChangeAdmission}
                label="major"
                name="major"
                id="major"
              >
                <option value={"IT"}>เทคโนโลยีสารสนเทศ(IT)</option>
                <option value={"CS"}>วิทยาการคอมพิวเตอร์(CS)</option>
                <option value={"DSI"}>นวัตกรรมบริการดิจิตอล(DSI)</option>
                {/* <option value={"SIT"}>คณะเทคโนโลยีสารสนเทศ(SIT)</option> */}
              </Select>
            </FormControl>

            <div className="my-4">
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
              {/* <input
              className={classes.upload}
                required={!props.openEditAdmission}
                type="file"
                id="upload_file_admission"
                name="upload_file_admission"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              /> */}
              {props.errorMessage && (
                <p className="my-3 text-red-600">
                  Alert : {props.errorMessage}
                </p>
              )}

              <CSVReader
                ref={buttonRef}
                onFileLoad={handleOnFileLoad}
                onError={handleOnError}
                noClick
                noDrag
                config={{ header: true }}
                required={!props.openEditAdmission}
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
                        backgroundColor: "#104976",
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
                Current :{props.openEditAdmission?.admission_file_name}
              </p>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              color="primary"
              onClick={() => navigate("/createentrance")}
            >
              <div>สร้างรูปแบบการรับสมัคร</div>
            </Button>
            <Button autoFocus color="primary" type="submit">
              <div>บันทึก</div>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
