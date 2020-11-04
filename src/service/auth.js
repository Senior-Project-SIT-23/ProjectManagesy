import api from "../utils/libs/connectApi"
import Cookie from "js-cookie"

export default function fetchUserDataByAuthCode(code) {
  
  return api.post("/check-authenication", { auth_code: code })
}

export function fecthMe() {
  return api.get(`/check-me`)
}
