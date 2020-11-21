import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DialogCreateDataCollegeSrudents from "./DialogCreateDataCollegeSrudents"
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { apiDeleteImportData } from '../../service/collegeStudent';


export default function EnhancedTable(props) {
  
  const columns = [
    {
     name: "college_student_name",
     label:"ข้อมูลนักศึกษา",
     options: {
      customBodyRender: (value, tableMeta) => (
        <a
          href={`/ShowdataImport/${tableMeta.rowIndex}/${tableMeta.rowData[0]}`}
          target="_blank"
        >
          <p>{value}</p>
        </a>
      ),
      filter: false,
    },
    },
    {
     name: "entrance_year",
     label: "ปีการศึกษา",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "college_student_file_name",
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
              onClick={() =>
                props.handleClickEdit(changeValue(tableMeta.rowData))
              }
            />
          </IconButton>
        ),
        filter: true,
        sort: false,
            }
     },
     {
      name: "college_student_id",
      label: "college_student_id",
      options: {
       filter: false,
       sort: false,
       display: false
      }
     },
   ];
   
   const data =  props.rows
   console.log(data)
  

  const changeValue = (data) => {
    const dataRes ={
      college_student_name:data[0],
      entrance_year: data[1],
      college_student_file_name: data[2],
      // edit: data[3]
      college_student_id:data[4]
    }
    return dataRes
  }

   const options = {
     filterType: 'checkbox',
     print: false,
     onRowsDelete: async (deleted) => {
      console.log(deleted)
      console.log(deleted.data)

      let Id = []
      for (let i = 0; i < deleted.data.length; i++) {
        let n = deleted.data[i].index
        console.log(n)

        Id.push(data[n].college_student_id)
      }
      console.log(Id)
      const datRes = { college_student_id: Id }
      await apiDeleteImportData(datRes)
      // await window.location.reload()
    },
   };

  //  const clickedit = () => {
  //   props.handleClickEdit()
  // }


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
        {...props}
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
