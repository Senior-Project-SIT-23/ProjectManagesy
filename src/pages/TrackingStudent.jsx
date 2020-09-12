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

  const [rows, setrows] = useState([])

  const handleDelete = async () => {
    const formData = getActivityIdsFormData(selected)
    //เรียก api
    await apiDeleteActivities(formData)
    setSelected([])
    await fetchActivities()
  }
  //Dialog
  const [open, setOpen] = React.useState(false)
  const [openEdit, setOpenEdit] = React.useState()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickEdit = (row) => {
    setOpenEdit(row)
    handleClickOpen()
  }
  const handleClose = () => {
    setOpen(false)
    setOpenEdit(null)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const delete_file_id =
      event.target.upload_file.files.length !== 0
        ? event.target.delete_file_id.value
        : []
    const data = {
      id: event.target.id.value,
      delete_file_id: delete_file_id,
      activityName: event.target.activityName.value,
      year: event.target.yearofActivity.value,
      major: event.target.major.value,
      file: event.target.upload_file.files[0],
    }
    const formData = getActivityFormData(data)

    if (openEdit) {
      await apiEditActivity(formData)
    } else {
      await apiCreateActivity(formData)
    }
    fetchActivities()
    handleClose()
  }

  const fetchActivities = useCallback(async () => {
    const response = await apiFetchActivities()
    setrows(response.data)
  }, [])

  useEffect(() => {
    fetchActivities()
  }, [fetchActivities])

  return (
    <>
      <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
      <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg min-h-screen">
        {indexTab === 0 && <TableDataOfStudents />}
        {indexTab === 1 && (
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
            handleDelete={handleDelete}
          />
        )}
        {indexTab === 2 && <TableAdmission />}
      </div>
    </>
  )
}
