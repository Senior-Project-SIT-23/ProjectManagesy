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
/**
 |--------------------------------------------------
 | BASEUI SETUP
 |--------------------------------------------------
 */

function App() {
  useEffect(() => {}, []);
  return (
    <Router>
      <MainLayout title="ติดตามนักเรียน" path="/" component={TrackingStudent} />
      <MainLayout title="ติดตามนักศึกษา"path="/3" component={TrackingCollegeStudent} />
      <MainLayout title="กิจกรรม"path="/2" component={Activity} />
      <MainLayout title="วิเคราะห์ข้อมูล"path="/4" component={Test2} />
    </Router>
  );
}

export default App;
