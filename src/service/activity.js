import axios from "../utils/libs/connectApi"

export async function apiCreateActivity(data) {
  return await axios.post("/activity/student", data)
}
export async function apiEditActivity(data) {
  return await axios.post("/activity/student/edit", data)
}

export async function apiFetchActivities() {
  return await axios.get("/activity/student")
}

export async function apiDeleteActivities(data) {
  return await axios.post("/activity/student/delete", data)
  // window.location.reload()
}

export async function apiReadFileActivities(activity_id) {
  return await axios.get(`/activity/student/readfilename/${activity_id}`)
}
