import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DialogCreateDataCollegeSrudents from "./DialogCreateDataCollegeSrudents"
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"


export default function EnhancedTable() {
  
  const columns = [
    {
     name: "Name",
     label:"ข้อมูลนักศึกษา",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "major",
     label:"สาขา",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "year",
     label: "ปีการศึกษา",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "file",
     label: "ไฟล์",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "edit",
      label: "แก้ไข",
      options: {
        customBodyRender: (value, tableMeta) => (
          <IconButton>
            <EditOutlinedIcon
              // onClick={() =>
              //   (changeValue(tableMeta.rowData))
              // }
            />
          </IconButton>
        ),
        filter: true,
        sort: false,
            }
     },
     
   ];
   
   const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY",],
    ["John Walsh", "Test Corp", "Hartford", "CT",],
    ["Bob Herm", "Test Corp", "Tampa", "FL",],
    ["James Houston", "Test Corp", "Dallas", "TX",],
   ];
   
   const options = {
     filterType: 'checkbox',
     print: false,
   };
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
   return(
     <>
    <Grid container direction="row" justify="flex-end" alignItems="center">
    <div className={"mb-2"}>
      <DialogCreateDataCollegeSrudents
        edit={true}
      />
    </div>
  </Grid>
  <MuiThemeProvider theme={getMuiTheme()}>
   <MUIDataTable
     title={"Import ข้อมูลนักศึกษา"}
     data={data}
     columns={columns}
     options={options}
   />
   </MuiThemeProvider>
   </>
   )
}
