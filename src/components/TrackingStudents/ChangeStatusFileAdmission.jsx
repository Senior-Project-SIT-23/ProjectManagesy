import React, { useState } from "react";
import _ from "lodash";
import { Button } from "@material-ui/core";
import { CSVReader } from "react-papaparse";
import { apiChangeStatus } from "../../service/admission";

const buttonRef = React.createRef();

export default function ChangeStatusFileAdmission(props) {
  const [stageButton, setStageButton] = useState([
    { stage_id: 2, label: "มีสิทธิ์สอบสัมภาษณ์" },
    { stage_id: 3, label: "มีสิทธิ์เข้าศึกษา" },
    { stage_id: 4, label: "ที่ยืนยันเข้าศึกษา" },
    { stage_id: 5, label: "ที่ทำการชำระเงิน" },
  ]);

  const [dataInFile, setDataInFile] = useState();

  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    console.log("upload", data);
    const temp = [];
    for (let i = 1; i < data.length; i++) {
      if (data[i].errors.length !== 0) {
        break;
      }
      temp.push(data[i].data[4]);
    }
    setDataInFile(temp);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  const handleClickButton = async (status) => {
    try {
      const data = {
        admission_id: parseInt(props.id),
        status: status,
        data_id: dataInFile,
      };
      await apiChangeStatus(JSON.stringify(data));
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="shadow rounded border bg-white p-6">
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <button
              type="button"
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: "40%",
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              Browe file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: "60%",
              }}
            >
              {file && file.name}
            </div>
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
      {_.map(stageButton, (data, index) => (
        <div className="my-6 text-center w-full">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClickButton(data.stage_id)}
            className="w-1/2"
          >
            อัปโหลดรายชื่อผู้{data.label}
          </Button>
        </div>
      ))}
    </div>
  );
}
