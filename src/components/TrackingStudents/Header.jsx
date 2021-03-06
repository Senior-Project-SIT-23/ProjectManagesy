import React, { useState } from "react"
import HeaderTab from "../Common/Tab"
import { Tab } from "@material-ui/core"

export default function Index(props) {
    

  return (
    <div>
      <HeaderTab  index={props.indexTab}>
        
        <Tab textColor="inherit" label="ข้อมูลนักเรียนที่ร่วมกิจกรรม" onClick={()=>props.handleChangeTab(0)}/>
        <Tab textColor="inherit" label="ข้อมูลนักเรียนที่สมัครสอบ" onClick={()=>props.handleChangeTab(1)}/>
        <Tab textColor="inherit" label="ข้อมูลนักเรียน" onClick={()=>props.handleChangeTab(2)}/>
      </HeaderTab>
    </div>
  )
}
