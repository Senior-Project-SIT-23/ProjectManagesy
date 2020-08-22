import React, { useContext, useEffect, useCallback, useState } from "react"
import TableData from "../components/Activity/TableData"
import TableActivity from "../components/Activity/TableActivity"
import Header from "../components/Activity/Header"

export default function Test(props) {
  const [indexTab, setIndexTab] = useState(0)

  function handleChangeTab(index) {
    setIndexTab(index)
  }
  return (
    <>
      <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
      <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg h-screen">
        {indexTab === 0 && <TableActivity />}
        {indexTab === 1 && <TableData />}
      </div>
    </>
  )
}
