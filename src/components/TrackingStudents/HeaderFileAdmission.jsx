import React, { useState } from "react";
import HeaderTab from "../Common/Tab";
import { Tab } from "@material-ui/core";

export default function Index(props) {
  return (
    <div>
      <HeaderTab index={props.indexTab}>
        <Tab
          textColor="inherit"
          label="ข้อมูลโครงการข้อมูลสมัครสอบ"
          onClick={() => props.handleChangeTab(0)}
        />
        <Tab
          textColor="inherit"
          label="แก้ไขสถานะ"
          onClick={() => props.handleChangeTab(1)}
        />
      </HeaderTab>
    </div>
  );
}
