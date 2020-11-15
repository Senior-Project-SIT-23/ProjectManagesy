import React, { useEffect } from "react";
import { Router, navigate,Route } from "@reach/router";
import Cookies from "js-cookie";

/**
 |--------------------------------------------------
 | ROOT COMPONENT
 |--------------------------------------------------
 */

/**
 |--------------------------------------------------
 | STYLE
 |--------------------------------------------------
 */
import "./style/App.css";
import "./style/Font.css";
import MainLayout from "./components/MainLayout";
import TrackingStudent from "./pages/TrackingStudent";
import Test2 from "./pages/Test2";
import TrackingCollegeStudent from "./pages/TrackingCollegeStudent";
import ShowDataInFileActivity from "./components/TrackingStudents/ShowDataInFileActivity";
import Activity from "./pages/Activity"
import Analysis from "./pages/Analysis"
import ShowDataFileAdmission from "./components/TrackingStudents/ShowDataFileAdmission"
import Login from "./pages/Login";
import CallBack from "./pages/CallBack"
/**
 |--------------------------------------------------
 | BASEUI SETUP
 |--------------------------------------------------
 */

function App() {
  useEffect(() => {}, []);
  return (
    <Router>
      <Login path="/"/>
      <CallBack path="/CallBack"/>
      <MainLayout title="ติดตามนักเรียน" path="/TrackingStudents" component={TrackingStudent} />
      <MainLayout title="ติดตามนักศึกษา"path="/TrackingCollegeStudents" component={TrackingCollegeStudent} />
      <MainLayout title="กิจกรรม"path="/Activitys" component={Activity} />
      <MainLayout title="วิเคราะห์ข้อมูล"path="/Analysis" component={Analysis} />
      <MainLayout title="ติดตามนักเรียน" path="/ShowDataInFileActivity/:id" component={ShowDataInFileActivity}/>
      <MainLayout title="ติดตามนักเรียน" path="/ShowDataFileAdmission/:id/:name" component={ShowDataFileAdmission}/>
    </Router>
  );
}

export default App;
