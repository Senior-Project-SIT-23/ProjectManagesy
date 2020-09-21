import React, { useContext, useEffect, useCallback, useState } from "react"
import Header from "../components/Activity/Header"
import TableData from "../components/TrackingStudents/TableDataOfStudents"
import CardActivityStudent from "../components/Activity/CardActivityStudent"
import TotalCardActAtudent from "../components/Activity/TotalCardActStudent"


export default function Activity() {
    const [indexTab, setIndexTab] = useState(0)

    function handleChangeTab(index) {
      setIndexTab(index)
    }
    return (
      <>
        <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
        <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg h-screen">
          {indexTab === 0 && <TotalCardActAtudent/>}
          {indexTab === 1 && <TableData />}
        </div>
      </>
    )
}
