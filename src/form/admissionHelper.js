import _ from "lodash"

export function getAdmissionFormData(data) {
  const formDataAds = new FormData()
  formDataAds.append("admission_id", _.get(data, "id", " "))
  formDataAds.append("admission_name", _.get(data, "admissionName", " "))
  formDataAds.append("round_name", _.get(data, "round", " "))
  formDataAds.append("admission_major", _.get(data, "major", " "))
  formDataAds.append("admission_year", data.year)
  formDataAds.append("admission_file", _.get(data, "file", ""))
  formDataAds.append("new_admission_file", _.get(data, "file", ""))
  formDataAds.append(
    "delete_admission_file_id",
    _.get(data, "delete_admission_file_id", " ")
  )

  return formDataAds
}

export function getAdmissionIdsFormData(data) {
    const formDataAds = new FormData()
    formDataAds.append("admission_id[]", data)
    return formDataAds
  }