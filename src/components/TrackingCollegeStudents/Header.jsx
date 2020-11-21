import React from 'react'
import HeaderTab from "../Common/Tab"
import { Tab } from "@material-ui/core"

export default function Header(props) {
    return (
        <div>
          <HeaderTab  index={props.indexTab}>
          <Tab textColor="inherit" label="Import ข้อมูล" onClick={()=> props.handleChangeTab(0)}/>
            <Tab textColor="inherit" label="ข้อมูลนักศึกษา" onClick={()=>props.handleChangeTab(1)}/>
            {/* <Tab textColor="inherit" label="ข้อมูลนักศึกษาที่ร่วมกิจกรรม" onClick={()=>props.handleChangeTab(1)}/> */}
            
          </HeaderTab>
        </div>
      )
}
