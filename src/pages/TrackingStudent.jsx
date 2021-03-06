import React, { useContext, useEffect, useCallback, useState } from "react"
import TableActivity from "../components/TrackingStudents/TableActivity"
import Header from "../components/TrackingStudents/Header"
import _ from "lodash"
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

  const [topic, setTopic] = useState()

  const [rows, setrows] = useState([])


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
    
    const data = {
      id: event.target.id.value,
      activityName: event.target.activityName.value,
      year: event.target.yearofActivity.value,
      major: event.target.major.value,
      file: dataFile,
      fileName: dataFileName,
    }
    console.log("-->", data)
    // if(!data.fileName & !data.file){
    //   return setErrorMessage("กรุณา upload ไฟล์")
    // }
    const formData = getActivityFormData(data)

    if (openEdit) {
      try {
        await apiEditActivity(formData)
        fetchActivities()
        handleClose()
        fetchData()
        // window.location.reload()
      } catch (error) {
        console.log("test", error)
        
        alert("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
      }
    } else {
      try {
        await apiCreateActivity(formData)
        fetchActivities()
        handleClose()
        fetchData()
        // window.location.reload()
      } catch (error) {
        console.log("test", error)
        
        alert("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
        if (!data.file) {
          
          return alert("กรุณา upload ไฟล์")
        }
      }
    }
  }

  const fetchActivities = useCallback(async () => {
    const response = await apiFetchActivities()

    console.log("response.data", response.data)
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

    const data = {
      id: event.target.id.value,
     
      admissionName: event.target.admissionName.value,
      round: event.target.round.value,
      year: event.target.year.value,
      major: event.target.major.value,
      file: dataFileAdmission,
      fileName: dataFileNameAdmission,
    }
    console.log("dataAds", data)

    const formDataAdmission = getAdmissionFormData(data)
    // try {
    if (openEditAdmission) {
      try {
        await apiEditAdmission(formDataAdmission)
        fetchAdmission()
        handleCloseAdmission()
        fetchData()
      } catch (error) {
        console.log("test", error)
        alert("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
      }
    } else {
      try {
        await apiCreateAdmission(formDataAdmission)
        fetchAdmission()
        handleCloseAdmission()
        fetchData()
      } catch (error) {
        console.log("test", error)
        alert("format ของไฟล์ที่อัพโหลด ไม่ถูกต้อง")
        if (!data.file) {
          return alert("กรุณา upload ไฟล์")
        }
      }
    }
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
  const fetchData = useCallback(async () => {
    const response = await apiFetchDataMatch()
    const temp = []

    _.map(response.data, (item, index) => {
      let all_activity = ""
      let all_admission = ""
      _.map(item.activity, (act, i) => {
        all_activity = all_activity + act.activity_student_name + ", "
      })
      _.map(item.admission, (adm, j) => {
        all_admission = all_admission + adm.admission_name + ", "
      })
      temp.push({
        ...item,
        all_activity,
        all_admission,
      })
    })
    setDataMatch(temp)
    console.log("response0", temp)
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <>
      <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
      <div className="flex flex-col flex-1 px-1 py-8 mx-auto max-w-screen-lg min-h-screen">
        {indexTab === 0 && (
          <TableActivity
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
            // handleDeleteAdmission={handleDeleteAdmission}
            setTopicAdmission={setTopicAdmission}
            topicAdmission={topicAdmission}
            setDataFileAdmission={setDataFileAdmission}
            setDataFileNameAdmission={setDataFileNameAdmission}
            errorMessage={errorMessage}
            fetchAdmission={fetchAdmission}
          />
        )}
        {indexTab === 2 && <TableMatched dataMatch={dataMatch} />}
      </div>
    </>
  )
}
