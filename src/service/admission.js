import axios from "../utils/libs/connectApi"

export async function apiCreateAdmission(data) {
    return await axios.post("/admission", data)
  }
 
export async function apiEditAdmission(data) {
    return await axios.post("/admission/edit",data)
}

export async function apiFetchAdmission() {
    return await axios.get("/admission")
}

export async function apiDeteteAdmission(data) {
    return await axios.post("/admission/delete",data)
}