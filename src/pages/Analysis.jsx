import React, { useContext, useEffect, useCallback, useState } from "react"
import CommonCard from "../components/Common/Card"
import Header from "../components/Analysis/Header"
import FullPageAnalysis from "../components/Analysis/FullPageAnalysis"
import { apiFetchAnalyze } from "../service/analyze"
import CircularProgress from "@material-ui/core/CircularProgress"
import Loading from "../components/Analysis/Loading"
import AnalysisChart from "../components/Analysis/AnalysisChart"
import moment from 'moment'
import _ from 'lodash'

export default function Test(props) {
  const [indexTab, setIndexTab] = useState(0)
  const [data, setData] = useState()
  const [isFetch, setIsFetch] = useState(false)
  const [year,setYear] = useState([])
  const [dataForGraphSchoolAd,setDataForGraphSchoolAd] = useState()
  const [dataProvince, setDataProvince] = useState()

  function handleChangeTab(index) {
    setIndexTab(index)
  }

  const fetchDataAnalyse = useCallback(async () => {
    setIsFetch(true)
    const response = await apiFetchAnalyze(2563)

    console.log("response.data", response.data)
    console.log("num", response.data.num_of_activity_student)
    setData(response.data)

    const tmp = [];
    const year = parseInt(moment().format("YYYY")) + 543;
    for (let i = 0; i < 5; i++) {
      tmp.push(year + i);
    }
    for (let i = 0; i < 5; i++) {
      tmp.push(year - i);
    }
    const unique = new Set(tmp);
    const array = [...unique].sort();
    const data = [];
    _.map(array, (arr, index) => {
      data.push({
        value: arr,
        label: "ปีการศึกษา "+arr,
      });
    });

    //Graph
    // const sortSchoolAd = response.data.school_admission.sort((a, b) => b.SUM - a.SUM);
    // const sortProvince = response.data.most_of_province.sort((a,b) => b.num_of_province - a.num_of_province)
    const sortSchoolAd = response.data.school_admission
    const sortProvince = response.data.most_of_province
    
    console.log("ffffffff", sortSchoolAd.slice(0, 10))
    console.log("province", sortProvince.slice(0,5))
    
    setDataProvince(sortProvince.slice(0,5))
    setDataForGraphSchoolAd(sortSchoolAd.slice(0, 10))
    setYear(data);
    setIsFetch(false)
  }, [])
  useEffect(() => {
    fetchDataAnalyse()
  }, [fetchDataAnalyse])

  if (isFetch) {
    return <Loading />
  }

  const handleChangeYear = async (year) => {
    const { data } = await apiFetchAnalyze(year)
    setData(data)
    
  }
  
 

  return (
    <>
      <Header handleChangeTab={handleChangeTab} indexTab={indexTab} />
      <div className="flex flex-col flex-1 p-12 mx-auto max-w-screen-lg min-h-screen">
        {data && (
          <>
            {indexTab === 0 && <AnalysisChart 
                data={data}
                handleChangeYear={handleChangeYear}
                year={year}
                dataForGraphSchoolAd={dataForGraphSchoolAd}
                dataProvince={dataProvince}
                />}
            {indexTab === 1 && (
              <FullPageAnalysis
                data={data}
                handleChangeYear={handleChangeYear}
                year={year}
              />
            )}
          </>
        )}
      </div>
    </>
  )
}
