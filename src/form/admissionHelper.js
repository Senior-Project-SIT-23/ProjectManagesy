import _ from "lodash"

export function getAdmissionFormData(data) {
  // const formDataAds = new FormData()
  // formDataAds.append("admission_id", _.get(data, "id", " "))
  // formDataAds.append("admission_name", _.get(data, "admissionName", " "))
  // formDataAds.append("round_name", _.get(data, "round", " "))
  // formDataAds.append("admission_major", _.get(data, "major", " "))
  // formDataAds.append("admission_year", data.year)
  // formDataAds.append("admission_file", _.get(data, "file", ""))
  // formDataAds.append("new_admission_file", _.get(data, "file", ""))
  // formDataAds.append(
  //   "delete_admission_file_id",
  //   _.get(data, "delete_admission_file_id", )
  // )

  const dataTemp = {
    admission_id:_.get(data, "id", " "),
    admission_name:_.get(data, "admissionName", " "),
    round_name: _.get(data, "round", " "),
    admission_major: _.get(data, "major", " "),
    admission_year: _.get(data,"year"," "),
    admission_file: _.get(data, "file", "")
  }
  return JSON.stringify(dataTemp)

}

export function getAdmissionIdsFormData(data) {
    const formDataAds = new FormData()
    formDataAds.append("admission_id[]", data)
    return formDataAds
  }