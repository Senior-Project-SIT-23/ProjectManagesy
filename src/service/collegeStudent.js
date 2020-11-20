import axios from "../utils/libs/connectApi"

export async function apiImportData(data){
    return await axios.post("/college-student",data)
}

export async function apiEditDataCollegeStudent(data){
    return await axios.post("/college-student/edit",data)
}

export async function apiFetchDataCollegeStudent() {
    return await axios.get("/college-student")
}

export async function apiDeleteImportData(data) {
    return await axios.post("/college-student/delete",data)
}