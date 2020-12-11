import axios from "../utils/libs/connectApi";
import Cookie from "js-cookie";
export async function apiCreateAdmission(data) {
  return await axios.post("/admission", data);
}

export async function apiEditAdmission(data) {
  return await axios.post("/admission/edit", data);
}

export async function apiFetchAdmission() {
  return await axios.get("/admission");
}

export async function apiDeteteAdmission(data) {
  return await axios.post("/admission/delete", data);
}

export async function apiReadFileAdmission(admission_id) {
  return await axios.get(`/admission/readfilename/${admission_id}`);
}
export async function apiCreteEntrance(data) {
  return await axios.post("/entrance", data);
}

export async function apiFetchEntrance(year) {
  return await axios.get(`/entrance/${year}`);
}
