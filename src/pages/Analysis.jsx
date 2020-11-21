import React, { useContext, useEffect, useCallback, useState } from 'react'
import CommonCard from '../components/Common/Card'
import Header from "../components/Analysis/Header"
import FullPageAnalysis from '../components/Analysis/FullPageAnalysis'
import { apiFetchAnalyze } from '../service/analyze'


export default function Test(props) {
    const [indexTab, setIndexTab] = useState(0)

    function handleChangeTab(index) {
      setIndexTab(index)
    }

    // const fetchDataAnalyse = useCallback(async () =>{
    //   const response = await apiFetchAnalyze()
    // })
  return (
      <>
    <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
    <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg min-h-screen">
      {indexTab === 0 && <FullPageAnalysis />}
    </div>
    </>
  )
}