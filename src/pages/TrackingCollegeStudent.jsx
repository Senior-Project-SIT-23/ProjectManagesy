import React, { useContext, useEffect, useCallback, useState } from "react"
// import TableData from "../components/TrackingStudents/TableActivity"
import Header from "../components/TrackingCollegeStudents/Header"
import TableData from "../components/TrackingCollegeStudents/TableData"
import TableImportData from "../components/TrackingCollegeStudents/TableImportData"

export default function TrackingCollageStudent() {
    const [indexTab, setIndexTab] = useState(0)

    function handleChangeTab(index) {
      setIndexTab(index)
    }
    return (
      <>
        <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
        <div className="flex flex-col flex-1 px-1 py-8 mx-auto max-w-screen-lg min-h-screen">
          {indexTab === 0 && <TableData />}
          {indexTab === 1 && <TableImportData/>}
         
        </div>
      </>
    )
}
