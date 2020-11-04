import React from 'react'
import HeaderTab from "../Common/Tab"
import { Tab } from "@material-ui/core"

export default function Header(props) {
    return (
        <div>
          <HeaderTab  index={props.indexTab}>
            <Tab textColor="inherit" label="คณะเทคโนโลยีสารสนเทศ" onClick={()=>props.handleChangeTab(0)}/>
            <Tab textColor="inherit" label="สาขาเทคโนโลยีสารสนเทศ" onClick={()=>props.handleChangeTab(1)}/>
            <Tab textColor="inherit" label="สาขาวิทยาศาสตร์คอมพิวเตอร์" onClick={()=>props.handleChangeTab(2)}/>
            <Tab textColor="inherit" label="สาขานวัตกรรมบริการดิจิตัล" onClick={()=>props.handleChangeTab(3)}/>
          </HeaderTab>
        </div>
      )
}
