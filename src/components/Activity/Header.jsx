import React from 'react'
import HeaderTab from "../Common/Tab"
import { Tab } from "@material-ui/core"

export default function Header(props) {
    return (
        <div>
          <HeaderTab  index={props.indexTab}>
            <Tab textColor="inherit" label="กิจกรรมนักเรียน" onClick={()=>props.handleChangeTab(0)}/>
            <Tab textColor="inherit" label="กิจกรรมนักศึกษา" onClick={()=>props.handleChangeTab(1)}/>
          </HeaderTab>
        </div>
      )
}
