import React, { useContext, useEffect, useCallback, useState } from "react"
// import TableData from "../components/TrackingStudents/TableActivity"
import Header from "../components/TrackingCollegeStudents/Header"
import TableData from "../components/TrackingCollegeStudents/TableData"
import TableImportData from "../components/TrackingCollegeStudents/TableImportData"
import getCollegeStudent from "../form/collegeStudentHelper"
import { apiEditDataCollegeStudent, apiFetchDataCollegeStudent, apiImportData } from "../service/collegeStudent"

export default function TrackingCollageStudent() {
  const [indexTab, setIndexTab] = useState(0)

  function handleChangeTab(index) {
    setIndexTab(index)
  }

  const [topic, setTopic] = useState()
  const [rows, setRows] = useState([])

  //dialog
  const [open, setOpen] = React.useState(false)
  const [openEdit, setOpenEdit] = React.useState()
  const [dataFile, setDataFile] = React.useState()
  const [dataFileName, setDataFileName] = React.useState()
  const [errorMessage, setErrorMessage] = React.useState()

  const handleClickOpen = () => {
    setOpen(true)
    setTopic("Import ข้อมูลนักศึกษา")
  }

  const handleClickEdit = (row) => {
    console.log(row)
    setOpenEdit(row)
    handleClickOpen()
    setTopic("แก้ไขข้อมูล")
  }
  const handleClose = () => {
    setOpen(false)
    setOpenEdit(null)
    setErrorMessage(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      id: event.target.id.value,
      year: event.target.yearofDataCollegeStudent.value,
      file: dataFile,
      fileName: dataFileName,
    }
    console.log("data",data)
  

  const formData = getCollegeStudent(data)

  if(openEdit){
    try{
      await apiEditDataCollegeStudent(formData)
      fetchDataCollegeStudent()
      handleClose()
    }catch(error){
      console.log("error",error)
      setErrorMessage("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
    }
  }else {
    try{
      await apiImportData(formData)
      fetchDataCollegeStudent()
      handleClose()
    }catch (error){
      console.log("error",error)
      setErrorMessage("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
      if(!data.file) {
        return setErrorMessage("กรุณา upload ไฟล์")
      }
    }
  }
}
  const fetchDataCollegeStudent = useCallback(async () => {
    const response = await apiFetchDataCollegeStudent()
    console.log("response",response.data)
    setRows(response.data)
  },[])

  useEffect(() => {
    fetchDataCollegeStudent()
  },[fetchDataCollegeStudent])


  return (
    <>
      <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
      <div className="flex flex-col flex-1 px-1 py-8 mx-auto max-w-screen-lg min-h-screen">
        
        {indexTab === 0 && 
          <TableImportData 
            rows={rows}
            handleClickEdit={handleClickEdit}
            openEdit={openEdit}
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            topic={topic}
            setTopic={setTopic}
            setDataFile={setDataFile}
            setDataFileName={setDataFileName}
            errorMessage={errorMessage}
            fetchDataCollegeStudent={fetchDataCollegeStudent}
          />}
        {indexTab === 1 && <TableData />}
        
      </div>
    </>
  )
}
