import React, { useContext, useEffect, useCallback, useState } from "react"
import TableData from "../components/TrackingStudents/TableActivity"
import TableActivity from "../components/TrackingStudents/TableDataOfStudents"
import Header from "../components/TrackingCollegeStudents/Header"
export default function TrackingCollageStudent() {
    const [indexTab, setIndexTab] = useState(0)

    function handleChangeTab(index) {
      setIndexTab(index)
    }
    return (
      <>
        <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
        <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg h-screen">
          {/* {indexTab === 0 && <TableActivity />}
          {indexTab === 1 && <TableData />} */}
        </div>
      </>
    )
}