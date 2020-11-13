import React, { useContext, useEffect, useCallback, useState } from "react"
// import TableData from "../components/TrackingStudents/TableActivity"
import Header from "../components/TrackingCollegeStudents/Header"
import TableActivityCollegeStudents from "../components/TrackingCollegeStudents/TableActivityCollegeStudents"
import TableData from "../components/TrackingCollegeStudents/TableData"

export default function TrackingCollageStudent() {
    const [indexTab, setIndexTab] = useState(0)

    function handleChangeTab(index) {
      setIndexTab(index)
    }
    return (
      <>
        <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
        <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg min-h-screen">
          {indexTab === 0 && <TableData />}
          {indexTab === 1 && <TableActivityCollegeStudents/>}
        </div>
      </>
    )
}
