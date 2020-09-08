import React, { useContext, useEffect, useCallback, useState } from "react"
import TableActivity from "../components/TrackingStudents/TableActivity"
import TableDataOfStudents from "../components/TrackingStudents/TableDataOfStudents"
import Header from "../components/TrackingStudents/Header"

export default function Test(props) {
  const [indexTab, setIndexTab] = useState(0)
  function handleChangeTab(index) {
    setIndexTab(index)
  }
  //Table
  const [selected, setSelected] = React.useState([])

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.activityName)
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

  const handleDelete = () => {}
  //Dialog
  const [open, setOpen] = React.useState(false)
  const [openEdit, setOpenEdit] = React.useState({ activityName: "", file: {} })

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickEdit = (row) => {
    setOpenEdit(row)
    handleClickOpen()
  }
  const handleClose = () => {
    setOpen(false)
    setOpenEdit({ activityName: "", file: {} })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newRow = [
      ...rows,
      {
        activityName: event.target.activityName.value,
        file: event.target.upload_file.files[0],
        yearofActivity: event.target.yearofActivity.value,
        major: event.target.major.value,
      },
    ]

    setrows(newRow)
    handleClose()
  }

  //Dialog

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
          />
        )}
      </div>
    </>
  )
}
