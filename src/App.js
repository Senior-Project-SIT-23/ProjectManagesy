import React, { useEffect } from "react";
import { Router, navigate } from "@reach/router";
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
import Test from "./pages/TrackingStudent";
import Test2 from "./pages/Test2";
/**
 |--------------------------------------------------
 | BASEUI SETUP
 |--------------------------------------------------
 */

function App() {
  useEffect(() => {}, []);
  return (
    <Router>
      <MainLayout title="ติดตามนักเรียน" path="/" component={Test} />
      <MainLayout title="ติดตามนักศึกษา"path="/3" component={Test2} />
      <MainLayout title="กิจกรรม"path="/2" component={Test2} />
      <MainLayout title="วิเคราะห์ข้อมูล"path="/4" component={Test2} />
    </Router>
  );
}

export default App;
