import React, { useState } from "react"
import HeaderTab from "../Common/Tab"
import { Tab } from "@material-ui/core"

export default function Index(props) {
    

  return (
    <div>
      <HeaderTab  index={props.indexTab}>
       
        <Tab textColor="inherit" label="ข้อมูลนักศึกษา" onClick={()=>props.handleChangeTab(1)}/>
        
      </HeaderTab>
    </div>
  )
}
