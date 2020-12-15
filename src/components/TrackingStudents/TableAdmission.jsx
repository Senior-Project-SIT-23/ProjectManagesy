import React from "react";

import IconButton from "@material-ui/core/IconButton";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DialogCreateAdmission from "./DialogCreateAdmission";

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { apiDeteteAdmission } from "../../service/admission";
import { Link, navigate } from "@reach/router";
import { CSVLink } from "react-csv";

export default function EnhancedTable(props) {
  // function showDataInFile(id,name) {
  //   navigate(`/ShowDataFileAdmission/${id}/${name}`)
  // }

  // const headers = [
  //   { label: "data_first_name", key: "data_first_name" },
  //   { label: "data_surname", key: "data_surname" },
  //   { label: "data_gpax", key: "data_gpax" },
  //   { label: "data_school_name", key: "data_school_name"},
  //   { label: "data_email", key: "data_email"},
  //   { label: "data_tel", key: "data_tel"}
  // ];

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          titleText: {
            fontFamily: "Athiti",
          },
        },
      },
    });

  const columns = () => {
    return [
      {
        name: "entrance",
        label: "ชื่อโครงการสมัครสอบ",
        options: {
          customBodyRender: (value, tableMeta) => (
            <a
              href={`/ShowDataFileAdmission/${value[0].admission_id}/${value[0].program_name}`}
              target="_blank"
            >
              {console.log(tableMeta)}
              {value[0].program_name}
            </a>
          ),
          filter: false,
        },
      },
      {
        name: "entrance",
        label: "รูปแบบโครงการ",
        options: {
          customBodyRender: (value, tableMeta) => <p>{value[0].entrance_name}</p>,
          filter: false,
        },
      },
      {
        name: "entrance",
        label: "รอบ",
        options: {
          customBodyRender: (value, tableMeta) => <p>{value[0].round_name}</p>,
          filter: false,
        },
      },
      
      { name: "admission_major", label: "สาขา" },
      { name: "admission_year", label: "ปีการศึกษา" },
      {
        name: "admission_file_name",
        label: "ไฟล์",
        options: {
          // customBodyRender: (value, tableMeta) => (
          //   // <a
          //   //   href={`${process.env.REACT_APP_BE_STORAGE}/${tableMeta.rowData[6]}`}
          //   //   // eslint-disable-next-line react/jsx-no-target-blank
          //   //   target="_blank"
          //   // >
          //   //   {value}
          //   // </a>
          //   <CSVLink
          //   data={tableMeta.tableData[tableMeta.rowIndex].admission_file}
          //   filename={value}
          //   >
          //     {value}
          //   </CSVLink>
          // ),
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
                  console.log(tableMeta.rowData);
                  props.handleClickEditAdmission(
                    changeValue(tableMeta.rowData)
                  );
                }}
              />
            </IconButton>
          ),
          filter: false,
        },
      },
      {
        name: "admission_file",
        options: {
          display: false,
          filter: false,
          viewColumns: false,
          download: false,
        },
      },
      {
        name: "updated_at",
        options: {
          display: false,
          filter: false,
          viewColumns: false,
          download: false,
        },
      },
      {
        name: "keep_file_name",
        options: {
          display: false,
          filter: false,
          viewColumns: false,
          download: false,
        },
      },
      {
        name: "created_at",
        options: {
          display: false,
          filter: false,
          viewColumns: false,
          download: false,
        },
      },
      {
        name: "admission_file_id",
        options: {
          display: false,
          filter: false,
          viewColumns: false,
          download: false,
        },
      },
      {
        name: "admission_id",
        options: {
          display: false,
          filter: false,
          viewColumns: false,
          download: false,
        },
      },
      
    ];
  };

  const data = props.rowsAdmissions;

  const changeValue = (data) => {
    console.log("testtt", data);
    console.log("props.rowAdm",props.rowsAdmissions)
    const dataRes = {
      admission_name: data[0],
      entrance: data[1],
      admission_major: data[2],
      admission_year: data[3],
      admission_file_name: data[4],

      admission_file: data[6],
      updated_at: data[7],
      keep_file_name: data[8],
      created_at: data[9],
      admission_file_id: data[10],
      admission_id: data[11],
    };
    console.log(dataRes);
    return dataRes;
  };

  const options = {
    filterType: "checkbox",
    onRowsDelete: async (deleted) => {
      console.log(data);
      console.log(deleted.data);
      let Id = [];
      for (let i = 0; i < deleted.data.length; i++) {
        let n = deleted.data[i].index;

        Id.push(data[n].admission_id);
      }

      const datRes = { admission_id: Id };
      await apiDeteteAdmission(datRes);
    },
    download: false,
    print: false,
  };
  // const classes = useStyles();

  const clickedit = () => {
    props.handleClickEditAdmission();
  };

  return (
    <div>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={"mb-2"}>
          <DialogCreateAdmission
            {...props}
            setDataFileAdmission={props.setDataFileAdmission}
            setDataFileNameAdmission={props.setDataFileNameAdmission}
            edit={true}
            entrance={props.entrance}
            handleEntrance={props.handleEntrance}
            year={props.year}
            defaultValue={props.defaultValue}
          />
        </div>
      </Grid>
      <MuiThemeProvider theme={getMuiTheme()}>
        {console.log("1234", data)}
        <MUIDataTable
          title={"โครงการสมัครสอบ"}
          data={data}
          columns={columns(clickedit)}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
}
