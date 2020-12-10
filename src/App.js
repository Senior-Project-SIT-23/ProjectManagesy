import React, { useEffect } from "react";
import { Router, navigate, Route } from "@reach/router";
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
import TrackingCollegeStudent from "./pages/TrackingCollegeStudent";
import ShowDataInFileActivity from "./components/TrackingStudents/ShowDataInFileActivity";
import Analysis from "./pages/Analysis";
import ShowDataFileAdmission from "./components/TrackingStudents/ShowDataFileAdmission";
import Login from "./pages/Login";
import CallBack from "./pages/CallBack";
import ShowdataImport from "./components/TrackingCollegeStudents/ShowdataImport";
import CreateEntrance from "./pages/CreateEntrance";
/**
 |--------------------------------------------------
 | BASEUI SETUP
 |--------------------------------------------------
 */

function App() {
  useEffect(() => {}, []);
  return (
    <Router>
      {/* <Login path="/"/>
      <CallBack path="/CallBack"/> */}
      <MainLayout
        title="นักเรียน"
        path="/TrackingStudents"
        component={TrackingStudent}
      />
      <MainLayout
        title="นักศึกษา"
        path="/TrackingCollegeStudents"
        component={TrackingCollegeStudent}
      />
      {/* <MainLayout title="กิจกรรม"path="/Activitys" component={Activity} /> */}
      <MainLayout
        title="วิเคราะห์ข้อมูล"
        path="/Analysis"
        component={Analysis}
      />
      <MainLayout
        title="นักเรียน"
        path="/ShowDataInFileActivity/:id/:name"
        component={ShowDataInFileActivity}
      />
      <MainLayout
        title="นักเรียน"
        path="/ShowDataFileAdmission/:id/:name"
        component={ShowDataFileAdmission}
      />
      <MainLayout
        title="นักศึกษา"
        path="/ShowdataImport/:id/:name"
        component={ShowdataImport}
      />
      <MainLayout title="นักเรียน" path="/createentrance" component={CreateEntrance} />
    </Router>
  );
}

export default App;
