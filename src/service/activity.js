import axios from "../utils/libs/connectApi"
import Cookie from "js-cookie"
export async function apiCreateActivity(data) {
  
  return await axios.post("/activity", data)
}
export async function apiEditActivity(data) {
 
  return await axios.post("/activity/edit", data)
}

export async function apiFetchActivities() {
 
  return await axios.get("/activity")
}

export async function apiDeleteActivities(data) {
 
  return await axios.post("/activity/delete", data)
}
