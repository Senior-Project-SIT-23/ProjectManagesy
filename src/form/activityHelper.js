import _ from "lodash"

export function getActivityFormData(data) {
  const formData = new FormData()

  formData.append("activity_id", _.get(data, "id", ""))
  formData.append("activity_name", _.get(data, "activityName", ""))
  formData.append("activity_year", _.get(data, "year", ""))
  formData.append("activity_major", _.get(data, "major", ""))
  formData.append("activity_file[]", _.get(data, "file", []))
  formData.append("new_activity_file[]", _.get(data, "file", []))
  formData.append(
    "delete_activity_file_id[]",
    _.get(data, "delete_file_id", [])
  )
  return formData
}
