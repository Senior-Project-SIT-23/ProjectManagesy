import api  from "../utils/libs/connectApi"
import Cookie from 'js-cookie'

export default function fetchUserDataByAuthCode(code) {
    const headers = {
        Authorization: `Bearer ${Cookie.get("jwt")}`,
        "Content-Type": "application/json",
        accept: "application/json",
      }
    return api.post('/oauth/token',{auth_code: code},{headers})
}

export function fecthMe(){
    const headers = {
        Authorization: `Bearer ${Cookie.get("jwt")}`,
        "Content-Type": "application/json",
        accept: "application/json",
      }
    return api.get(`/me`,{headers})
}