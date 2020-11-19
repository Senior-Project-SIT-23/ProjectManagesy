import React, { useContext, useEffect, useCallback, useState } from "react"
import TableActivity from "../components/TrackingStudents/TableActivity"
import TableDataOfStudents from "../components/TrackingStudents/TableDataOfStudents"
import Header from "../components/TrackingStudents/Header"
import TableAdmission from "../components/TrackingStudents/TableAdmission"
import {
  apiCreateActivity,
  apiFetchActivities,
  apiEditActivity,
  apiDeleteActivities,
} from "../service/activity"
import {
  getActivityFormData,
  getActivityIdsFormData,
} from "../form/activityHelper"
import {
  apiCreateAdmission,
  apiFetchAdmission,
  apiEditAdmission,
  apiDeteteAdmission,
} from "../service/admission"
import {
  getAdmissionFormData,
  getAdmissionIdsFormData,
} from "../form/admissionHelper"
import TableMatched from "../components/TrackingStudents/TableMatched"
import { readString } from "react-papaparse"
import { apiFetchDataMatch, apiMatching } from "../service/analyze"

export default function Test(props) {
  const [indexTab, setIndexTab] = useState(0)
  function handleChangeTab(index) {
    setIndexTab(index)
  }
  //Table
  const [selected, setSelected] = React.useState([])

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.activity_id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const [topic, setTopic] = useState()

  const [rows, setrows] = useState([])

  // const handleDelete = async () => {
  //   const formData = getActivityIdsFormData(selected)
  //   //เรียก api
  //   console.log("delete", formData)
  //   await apiDeleteActivities(formData)
  //   setSelected([])
  //   await fetchActivities()
  // }

  //Dialog
  const [open, setOpen] = React.useState(false)
  const [openEdit, setOpenEdit] = React.useState()
  const [dataFile, setDataFile] = React.useState()
  const [dataFileName, setDataFileName] = React.useState()
  const [errorMessage, setErrorMessage] = React.useState()

  const handleClickOpen = () => {
    setOpen(true)
    setTopic("สร้างกิจกรรม")
  }
  const handleClickEdit = (row) => {
    console.log(row)
    setOpenEdit(row)
    handleClickOpen()
    setTopic("แก้ไขกิจกรรม")
  }
  const handleClose = () => {
    setOpen(false)
    setOpenEdit(null)
    setErrorMessage(null)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    // const delete_file_id =
    //   event.target.upload_file.files.length !== 0
    //     ? event.target.delete_file_id.value
    //     : null
    const data = {
      id: event.target.id.value,
      // delete_file_id: delete_file_id,
      activityName: event.target.activityName.value,
      year: event.target.yearofActivity.value,
      major: event.target.major.value,
      file: dataFile ,
      fileName: dataFileName,
    }
    if(!data.file){
      return setErrorMessage("กรุณา upload ไฟล์")
    }
    console.log("-->", data)
    const formData = getActivityFormData(data)

    if (openEdit) {
      try {
        await apiEditActivity(formData)
        fetchActivities()
        handleClose()
      } catch (error) {
        console.log("test", error)
        setErrorMessage("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
      }
    } else {
      try {
        await apiCreateActivity(formData)
        fetchActivities()
        handleClose()
      } catch (error) {
        console.log("test", error)
        setErrorMessage("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
      }
    }
  }

  const fetchActivities = useCallback(async () => {
    const response = await apiFetchActivities()

    setrows(response.data)
  }, [])

  useEffect(() => {
    fetchActivities()
  }, [fetchActivities])

  //Admission
  //Table
  const [selectedAdmission, setSelectedAdmission] = React.useState([])

  const handleSelectAllClickInAdmission = (event) => {
    if (event.target.checked) {
      const newSelecteds = rowsAdmissions.map((n) => n.admission_id)
      setSelectedAdmission(newSelecteds)
      return
    }
    setSelectedAdmission([])
  }

  const [topicAdmission, setTopicAdmission] = useState()

  const [rowsAdmissions, setrowsAdmissions] = useState([])

  const handleClickInAdmission = (event, name) => {
    const selectedIndex = selectedAdmission.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedAdmission, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedAdmission.slice(1))
    } else if (selectedIndex === selectedAdmission.length - 1) {
      newSelected = newSelected.concat(selectedAdmission.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedAdmission.slice(0, selectedIndex),
        selectedAdmission.slice(selectedIndex + 1)
      )
    }

    setSelectedAdmission(newSelected)
  }
  const handleDeleteAdmission = async () => {
    const formData = getAdmissionIdsFormData(selectedAdmission)
    //เรียก api
    await apiDeteteAdmission(formData)
    setSelectedAdmission([])
    await fetchAdmission()
  }

  //Dialog
  const [openAdmission, setOpenAdmission] = React.useState(false)
  const [openEditAdmission, setOpenEditAdmission] = React.useState()
  const [dataFileAdmission, setDataFileAdmission] = React.useState()
  const [dataFileNameAdmission, setDataFileNameAdmission] = React.useState()

  const handleClickOpenCreateAdmission = () => {
    setOpenAdmission(true)
    setTopicAdmission("สร้างโครงการสมัครสอบ")
  }
  const handleCloseAdmission = () => {
    setOpenAdmission(false)
    setOpenEditAdmission(null)
  }
  const handleClickEditAdmission = (row) => {
    console.log(row)
    setOpenEditAdmission(row)
    handleClickOpenCreateAdmission()
    setTopicAdmission("แก้ไขโครงการสมัครสอบ")
  }
  const handleSubmitAdmission = async (event) => {
    event.preventDefault()
    // const delete_admission_file_id =
    //   event.target.upload_file_admission.files.length !== 0
    //     ? event.target.delete_admission_file_id?.value
    //     : null

    const data = {
      id: event.target.id.value,
      // delete_admission_file_id: delete_admission_file_id,
      admissionName: event.target.admissionName.value,
      round: event.target.round.value,
      year: event.target.year.value,
      major: event.target.major.value,
      // file: event.target.upload_file_admission.files[0] || null,
      file: dataFileAdmission,
      fileName: dataFileNameAdmission,
    }
    console.log("dataAds", data)

    const formDataAdmission = getAdmissionFormData(data)
    // try {
    if (openEditAdmission) {
      try{
        await apiEditAdmission(formDataAdmission)
        fetchAdmission()
    handleCloseAdmission()
      } catch(error){
        console.log("test",error)
        setErrorMessage("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
      }
      
    } else {
      try{
        await apiCreateAdmission(formDataAdmission)
        fetchAdmission()
        
    handleCloseAdmission()
      } catch(error){
        console.log("test",error)
        setErrorMessage("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
        
      }
      
    }
    // } catch (error) {
    //   console.log("test", error)
    //   alert("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
    // }
    
  }
  const fetchAdmission = useCallback(async () => {
    const response = await apiFetchAdmission()
    setrowsAdmissions(response.data)
  }, [])

  useEffect(() => {
    fetchAdmission()
  }, [fetchAdmission])

  //MatchData
  const [dataMatch, setDataMatch] = useState()
  const fetchData = useCallback( async() => {
      const response = await apiFetchDataMatch()
      setDataMatch(response.data)
      console.log('response0',response.data)
    },[]
  )
  useEffect(() => {
    fetchData()
  },[fetchData])
  return (
    <>
      <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
      <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg min-h-screen">
        {indexTab === 0 && (
          <TableActivity
            handleSelectAllClick={handleSelectAllClick}
            handleClick={handleClick}
            rows={rows}
            handleClickEdit={handleClickEdit}
            openEdit={openEdit}
            selected={selected}
            setSelected={setSelected}
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            // handleDelete={handleDelete}
            topic={topic}
            setTopic={setTopic}
            setDataFile={setDataFile}
            setDataFileName={setDataFileName}
            errorMessage={errorMessage}
            fetchActivities={fetchActivities}
          />
        )}
        {indexTab === 1 && (
          <TableAdmission
            handleSelectAllClickInAdmission={handleSelectAllClickInAdmission}
            handleClickInAdmission={handleClickInAdmission}
            rowsAdmissions={rowsAdmissions}
            selectedAdmission={selectedAdmission}
            setSelectedAdmission={setSelectedAdmission}
            handleClickEditAdmission={handleClickEditAdmission}
            openEditAdmission={openEditAdmission}
            openAdmission={openAdmission}
            setOpenAdmission={setOpenAdmission}
            handleClickOpenCreateAdmission={handleClickOpenCreateAdmission}
            handleCloseAdmission={handleCloseAdmission}
            handleSubmitAdmission={handleSubmitAdmission}
            handleDeleteAdmission={handleDeleteAdmission}
            setTopicAdmission={setTopicAdmission}
            topicAdmission={topicAdmission}
            setDataFileAdmission={setDataFileAdmission}
            setDataFileNameAdmission={setDataFileNameAdmission}
            errorMessage={errorMessage}
          />
        )}
        {indexTab === 2 && <TableMatched 
        dataMatch={dataMatch}/>}
      </div>
    </>
  )
}
