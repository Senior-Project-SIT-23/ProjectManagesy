import axios from "../utils/libs/connectApi"
import Cookie from "js-cookie"
export async function apiCreateAdmission(data) {
    const headers = {
        Authorization: `Bearer ${Cookie.get("jwt")}`,
        "Content-Type": "application/json",
        accept: "application/json",
      }
    return await axios.post("/admission", data,{headers})
  }
 
export async function apiEditAdmission(data) {
    const headers = {
        Authorization: `Bearer ${Cookie.get("jwt")}`,
        "Content-Type": "application/json",
        accept: "application/json",
      }
    return await axios.post("/admission/edit",data,{headers})
}

export async function apiFetchAdmission() {
    const headers = {
        Authorization: `Bearer ${Cookie.get("jwt")}`,
        "Content-Type": "application/json",
        accept: "application/json",
      }
    return await axios.get("/admission",{headers})
}

export async function apiDeteteAdmission(data) {
    const headers = {
        Authorization: `Bearer ${Cookie.get("jwt")}`,
        "Content-Type": "application/json",
        accept: "application/json",
      }
    return await axios.post("/admission/delete",data,{headers})
}