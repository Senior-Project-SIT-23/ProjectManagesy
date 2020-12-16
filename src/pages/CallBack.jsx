import React, { useState, useCallback, useEffect, useContext } from "react"
import { storesContext } from "../context"
import * as queryString from "query-string"
import fetchUserDataByAuthCode from "../service/auth"
import Cookie from "js-cookie"
import setCurrentUser from '../context/AuthenticationStore'
import * as AuthenticationStore from "../context/AuthenticationStore"
import { navigate } from "@reach/router"

export default function CallBack(props) {
  //   const headers = {
  //   Authorization: `Bearer ${Cookie.get("jwt")}`,
  //   "Content-Type": "application/json",
  //   accept: "application/json",
  // }
  const { authenticationStore } = useContext(storesContext)
  const [user, setUser] = useState(authenticationStore)

  const fecthUserData = useCallback(async () => {
    const queryParams = queryString.parse(props.location.search)
    try {
      if (queryParams.state === "Managesy") {
        const response = await fetchUserDataByAuthCode(queryParams.code)
        if (response.status === 200) {
          if (response.data.user_type === "st_group") {
            alert('นักศึกษาไม่สามารถ login เข้าใช้งานระบบนี้ได้')
            navigate("/")
          } else if (
            response.data.user_type === "staff_group" ||
            response.data.user_type === "inst_group"
          ) {
            authenticationStore.setCurrentUser(response.data)
            Cookie.set(process.env.REACT_APP_ACCESS_TOKEN_NAME, response.data.token)

            navigate("/TrackingStudents")
          }
        }
      } else {
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }, [props.location.search])

  useEffect(() => {
    fecthUserData()
  }, [fecthUserData])

  return (
    <div className={`flex content-center flex-wrap  min-h-screen `}>
      
    </div>
  )
}
