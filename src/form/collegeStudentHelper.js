import _ from "lodash"

export default function getCollegeStudent(data){
    const datatTemp ={
        college_student_id: _.get(data, "id",null),
        entrance_year: _.get(data, "year",null),
        college_student_file_name: _.get(data,"fileName",null),
        college_student_file: _.get(data, "file",null)
    }
    return JSON.stringify(datatTemp)
}

export function getCollegeStudentIds(data){
    const formdata = {
        college_student_id: data,
    }
    return JSON.stringify(formdata)
}
