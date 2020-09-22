import React, { useContext, useEffect, useCallback, useState } from 'react'
import CommonCard from '../components/Common/Card'
import TableActivity from '../components/TrackingStudents/TableDataOfStudents'
import Header from "../components/Analysis/Header"
import Card from "../components/Analysis/Card"
import FullPageAnalysis from '../components/Analysis/FullPageAnalysis'

export default function Test(props) {
    const [indexTab, setIndexTab] = useState(0)

    function handleChangeTab(index) {
      setIndexTab(index)
    }
  return (
      <>
    <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
    <div className="flex flex-col flex-1 mx-auto min-w-screen-lg h-screen">
      {indexTab === 0 && <FullPageAnalysis />}
      {indexTab === 1 && <TableActivity/>}
    </div>
    </>
  )
}