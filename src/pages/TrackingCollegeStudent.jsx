import React, { useEffect, useCallback, useState } from "react"
import Header from "../components/TrackingCollegeStudents/Header"
import TableData from "../components/TrackingCollegeStudents/TableData"
import TableImportData from "../components/TrackingCollegeStudents/TableImportData"
import getCollegeStudent from "../form/collegeStudentHelper"
import _ from 'lodash'
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
      fetchData()
    }catch(error){
      console.log("error",error)
      alert("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
    }
  }else {
    try{
      await apiImportData(formData)
      fetchDataCollegeStudent()
      handleClose()
      fetchData()
    }catch (error){
      console.log("error",error)
      alert("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง หรือ ข้อมูลรายชื่อในไฟล์ไม่มีในข้อมูลรายชื่อการสมัครสอบ")
      if(!data.file) {
        return alert("กรุณา upload ไฟล์")
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

  //data หน้ารวม
  const [allData, setAlldata] = useState()
  const fetchData = useCallback(async () => {
    const temp = []
    const response = await apiFetchDataCollegeStudent()
    _.map(response.data, (data,index) => {
      _.map(data.college_student_file, (item,i) => {
        
        let all_activity = ""
        _.map(item.activity,(act,i) => {
          all_activity = all_activity + act.activity_student_name + ", "
        })
        temp.push({
          ...item,
          all_activity
        })
      })
    })

    setAlldata(temp)
    console.log("res",response)
  },[])
  useEffect(() => {
      fetchData()
  },[fetchData])

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
        {indexTab === 1 && <TableData allData={allData}/>}
        
      </div>
    </>
  )
}
