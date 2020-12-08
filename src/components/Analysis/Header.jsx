import React from 'react'
import HeaderTab from "../Common/Tab"
import { Tab } from "@material-ui/core"

export default function Header(props) {
    return (
        <div>
          <HeaderTab  index={props.indexTab}>
            <Tab textColor="inherit" label="แสดงข้อมูลแบบกราฟ" onClick={()=>props.handleChangeTab(0)}/>
            <Tab textColor="inherit" label="แสดงข้อมูลแบบตาราง" onClick={()=>props.handleChangeTab(1)}/>
          </HeaderTab>
        </div>
      )
}
