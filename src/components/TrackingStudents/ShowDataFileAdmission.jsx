import React, { useCallback, useEffect, useState } from "react";
import { navigate, useParams } from "@reach/router";
// import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp"
// import Fab from "@material-ui/core/Fab"
import { makeStyles } from "@material-ui/core/styles";

import HeaderFileAdmission from "../TrackingStudents/HeaderFileAdmission";

import TableDataFormFileAdmission from "./TableDataFormFileAdmission";
import {
  apiFetchAdmission,
  apiReadFileAdmission,
} from "../../service/admission";
import ChangeStatusFileAdmission from "./ChangeStatusFileAdmission";

const useStylesTable = makeStyles({
  table: {
    minWidth: 800,
  },
});

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5),
    marginLeft: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ShowDataInFileActivity(props) {
  const { id, name } = useParams();
  const classesGrid = useStylesGrid();
  const [indexTab, setIndexTab] = useState(0);
  const [data, setData] = useState();
  // const [data, setdata] = useState()
  //Button
  // const handleBack = (index) => {
  //   console.log(index)
  //   setIndexTab(index)
  //   navigate(`/`)
  // }
  const fetchAdmission = useCallback(async () => {
    const { data } = await apiReadFileAdmission(id);
    const tmp = [];
    for (let i = 0; i < data.length; i++) {
      tmp.push({ index: i + 1, ...data[i] });
    }
    setData(tmp);
    //  const response = await apiFetchAdmission()
    //  setData(response.data[props.id].admission_file)
  }, []);

  useEffect(() => {
    fetchAdmission();
  }, [fetchAdmission]);

  function handleChangeTab(index) {
    setIndexTab(index);
  }

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     "& > *": {
  //       margin: theme.spacing(1),
  //     },
  //   },
  // }))
  //Table
  // const classes = useStylesTable()
  return (
    <>
      <HeaderFileAdmission
        handleChangeTab={handleChangeTab}
        indexTab={indexTab}
      />
      <div className="flex flex-col flex-1 px-1 py-8 mx-auto max-w-screen-lg min-h-screen">
        {/* <div className={classesGrid.root}>
        <Grid container spacing={3}>
         
          <Grid item>
            <div className={useStyles.root}>
            
              <IconButton aria-label="Back" onClick={()=> handleBack(indexTab)}>
                <ArrowBackSharpIcon />
              </IconButton>
            </div>
          </Grid>
         
          <Grid item> */}
        {indexTab === 0 && (
          <TableDataFormFileAdmission title={props.name} data={data} />
        )}
        {indexTab === 1 && <ChangeStatusFileAdmission id={id} />}
        {/* </Grid>
        </Grid>
       
      </div> */}
      </div>
    </>
  );
}
