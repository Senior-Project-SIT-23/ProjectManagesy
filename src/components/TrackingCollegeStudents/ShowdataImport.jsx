import React ,{useCallback, useEffect, useState}from 'react'
import { makeStyles } from "@material-ui/core/styles"
import HeaderFile from "./HearderFile"
import TableDataInFile from './TableDataInFile'
import { apiFetchDataCollegeStudent } from '../../service/collegeStudent'

// const useStylesTable = makeStyles({
    
//   })

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // margin: theme.spacing(5),
      // marginLeft: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    table: {
        minWidth: 800,
      },
  }))
export default function ShowdataImport(props) {
    
    const [indexTab, setIndexTab] = useState(0)
    const [data , setData] = useState()
    
    function handleChangeTab(index) {
        setIndexTab(index)
      }

      const fetchDataCollegeStudent = useCallback(async () => {
        const response = await apiFetchDataCollegeStudent()
        console.log("response",response.data)
        setData(response.data[props.id].college_student_file)
      },[props.id])
    
      useEffect(() => {
        fetchDataCollegeStudent()
      },[fetchDataCollegeStudent])
    return (
        <div>
            <HeaderFile handleChangeTab={handleChangeTab} indexTab={indexTab} />
                <div className="flex flex-col flex-1 p-10 mx-auto max-w-screen-lg min-h-screen">
                    <TableDataInFile title={props.name} data={data} />
                </div>
    </div>
        
    )
}
