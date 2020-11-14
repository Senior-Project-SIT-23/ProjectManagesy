import _ from "lodash"

export function getActivityFormData(data) {
  const dataTemp = {
    activity_student_id: _.get(data, "id", ""),
    activity_student_name: _.get(data, "activityName", ""),
    activity_student_year: _.get(data, "year", ""),
    activity_student_major: _.get(data, "major", ""),
    activity_student_file: _.get(data, "file", []),
    activity_student_file_name: _.get(data, "fileName", ""),
  }

  return JSON.stringify(dataTemp)
}

export function getActivityIdsFormData(data) {
  const formData = {
    activity_student_id: data,
  }
  return JSON.stringify(formData)
}
