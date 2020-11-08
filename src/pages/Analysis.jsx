import React, { useContext, useEffect, useCallback, useState } from 'react'
import CommonCard from '../components/Common/Card'
import TableActivity from '../components/TrackingStudents/TableDataOfStudents'
import Header from "../components/Analysis/Header"
import Card from "../components/Analysis/Card"
import FullPageAnalysis from '../components/Analysis/FullPageAnalysis'
import IT from '../components/Analysis/IT'
import CS from '../components/Analysis/CS'
import DSI from '../components/Analysis/DSI'

export default function Test(props) {
    const [indexTab, setIndexTab] = useState(0)

    function handleChangeTab(index) {
      setIndexTab(index)
    }
  return (
      <>
    <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
    <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg min-h-screen">
      {indexTab === 0 && <FullPageAnalysis />}
      {indexTab === 1 && <IT/>}
      {indexTab === 2 && <CS/>}
      {indexTab === 3 && <DSI/>}
    </div>
    </>
  )
}