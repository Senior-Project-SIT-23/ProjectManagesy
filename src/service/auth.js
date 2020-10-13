import api  from "../utils/libs/connectApi"

export default function fetchUserDataByAuthCode(code) {
    return api.post('/oauth/token',{auth_code: code})
}

export function fecthMe(){
    return api.get(`/me`)
}