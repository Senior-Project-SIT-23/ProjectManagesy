import axios from "../utils/libs/connectApi"
import Cookie from "js-cookie"
export async function apiCreateActivity(data) {
  const headers = {
    Authorization: `Bearer ${Cookie.get("jwt")}`,
    "Content-Type": "application/json",
    accept: "application/json",
  }
  return await axios.post("/activity", data,{headers})
}
export async function apiEditActivity(data) {
  const headers = {
    Authorization: `Bearer ${Cookie.get("jwt")}`,
    "Content-Type": "application/json",
    accept: "application/json",
  }
  return await axios.post("/activity/edit", data,{headers})
}

export async function apiFetchActivities() {
  const headers = {
    Authorization: `Bearer ${Cookie.get("jwt")}`,
    "Content-Type": "application/json",
    accept: "application/json",
  }
  return await axios.get("/activity",{headers})
}

export async function apiDeleteActivities(data) {
  const headers = {
    Authorization: `Bearer ${Cookie.get("jwt")}`,
    "Content-Type": "application/json",
    accept: "application/json",
  }
  return await axios.post("/activity/delete", data,{headers})
}
