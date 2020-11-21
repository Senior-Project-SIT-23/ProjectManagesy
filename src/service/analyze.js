import axios from "../utils/libs/connectApi"

// export async function apiMatching(data_first_name , data_surname ) {
//     return await axios.get(`/student/${data_first_name}/${data_surname}`)
// }

export async function apiFetchDataMatch() {
    return await axios.get("/student")
  }

export async function apiFetchAnalyze(year){
  return await axios.get(`/analyze/${year}`)
}
