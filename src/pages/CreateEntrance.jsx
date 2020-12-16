import { Field, Formik, Form, FieldArray } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import TextInput from "../components/Common/Input";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import _ from "lodash";
import { Button, IconButton, InputLabel, Tooltip } from "@material-ui/core";
import { apiCreteEntrance } from "../service/admission";
import { navigate } from "@reach/router";
import Select from "react-select";
import moment from "moment";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default function CreateEntrance() {
  const [entranceYear, setEntranceYear] = useState()
  const [entrance, setEntrance] = useState({
    entrance_name: "",
    entrance_year: 0,
    round: [
      {
        round_name: "",
        program: [
          {
            program_name: "",
          },
        ],
      },
    ],
  });
  const [year, setYear] = useState([]);

  const fetchData = useCallback(async () => {
    const tmp = [];
    const year = parseInt(moment().format("YYYY")) + 543;
    for (let i = 0; i < 5; i++) {
      tmp.push(year + i);
    }
    for (let i = 0; i < 5; i++) {
      tmp.push(year - i);
    }
    const unique = new Set(tmp);
    const array = [...unique].sort();
    const data = [];
    _.map(array, (arr, index) => {
      data.push({
        value: arr,
        label: arr,
      });
    });
    setYear(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (data) => {
    try {
      const temp = {
        ...data, entrance_year: entranceYear
      }
      await apiCreteEntrance(JSON.stringify(temp));
      navigate("/TrackingStudents");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="p-6">
        <div className="shadow border rounded p-6">
         
          <Formik initialValues={entrance} onSubmit={handleSubmit}>
            {(formikProps) => (
              <Form className="overflow-y-auto">
                <div className="p-3 w-full overflow-hidden py-4 rounded mx-auto min-h-full">
                  <div className="text-right">
                    <Button
                      autoFocus
                      color="primary"
                      type="submit"
                      onClick={() => formikProps.submitForm}
                    >
                      <div>สร้าง</div>
                    </Button>
                  </div>
                  <Field name="entrance_year">
                    {({ field, meta }) => (
                      <>
                        <InputLabel>ปีการศึกษาที่รับสมัคร</InputLabel>
                        <Select
                          // value={
                          //   year
                          //     ? year.find(
                          //         (option) => option.value === option.value
                          //       )
                          //     : ""
                          // }
                          options={year}
                          defaultValue={year && year[0]}
                          onChange={(option) =>
                            setEntranceYear(
                              option.value,
                            )
                          }
                        />
                      </>
                    )}
                  </Field>

                  <Field name="entrance_name">
                    {({ field, meta }) => (
                      <TextInput
                        label="รูปแบบการรับสมัคร"
                        inputProps={{ ...field }}
                      />
                    )}
                  </Field>
                  <FieldArray name="round">
                    {(round_array) => (
                      <>
                        <Field name="round">
                          {({ field, meta }) => (
                            <>
                              {_.map(field.value, (data, index) => (
                                <div
                                  style={{ backgroundColor: "#336699" }}
                                  className="my-2 rounded p-6 flex"
                                >
                                  <div className="w-1/2 px-1">
                                    <Field name={`round.${index}.round_name`}>
                                      {({ field, meta }) => (
                                        <TextInput
                                          placeholder="รอบที่รับสมัคร"
                                          inputProps={{ ...field }}
                                          className="my-1"
                                        />
                                      )}
                                    </Field>
                                  </div>
                                  <div className="w-1/2 px-1">
                                    <FieldArray name={`round.${index}.program`}>
                                      {(program_array) => (
                                        <>
                                          <Field
                                            name={`round.${index}.program`}
                                          >
                                            {({ field, meta }) => (
                                              <>
                                                {_.map(
                                                  field.value,
                                                  (program_data, p_index) => (
                                                    <Field
                                                      name={`round.${index}.program.${p_index}.program_name`}
                                                    >
                                                      {({ field, meta }) => (
                                                        <TextInput
                                                          placeholder="ชื่อโครงการที่รับสมัคร"
                                                          inputProps={{
                                                            ...field,
                                                          }}
                                                          className="my-1"
                                                        />
                                                      )}
                                                    </Field>
                                                  )
                                                )}
                                              </>
                                            )}
                                          </Field>
                                          <div className="text-center">
                                          <Tooltip title="ลบโครงการที่รับสมัคร">
                                              <IconButton
                                                onClick={() => {
                                                  program_array.pop()
                                                }}
                                              >
                                                <RemoveCircleIcon className="text-white" />
                                              </IconButton>
                                            </Tooltip>
                                            <Tooltip title="เพิ่มโครงการที่รับสมัคร">
                                              <IconButton
                                                onClick={() => {
                                                  program_array.push({
                                                    program_name: "",
                                                  });
                                                }}
                                              >
                                                <AddCircleRoundedIcon className="text-white" />
                                              </IconButton>
                                            </Tooltip>

                                          </div>
                                        </>
                                      )}
                                    </FieldArray>
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                        </Field>

                        <div className="text-center">
                          
                        <Tooltip title="ลบรอบที่รับสมัคร">
                            <IconButton
                              onClick={() => {
                                round_array.pop()
                                  
                                
                              }}
                            >
                              <RemoveCircleIcon  />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="เพิ่มรอบที่รับสมัคร">
                            <IconButton
                              onClick={() => {
                                round_array.push({
                                  round_name: "",
                                  program: [{ program_name: "" }],
                                });
                              }}
                            >
                              <AddCircleRoundedIcon />
                            </IconButton>
                          </Tooltip>

                        </div>
                      </>
                    )}
                  </FieldArray>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    // <form className={classes.root} noValidate autoComplete="off">

    //   <FormControl variant="outlined" className={classes.formControl}>
    //     <InputLabel htmlFor="outlined-age-native-simple">รูปแบบการรับสมัคร</InputLabel>
    //     <Select
    //       native
    //       value={state.age}
    //       onChange={handleChange}
    //       label="รูปแบบการรับสมัคร"
    //       inputProps={{
    //         name: 'age',
    //         id: 'outlined-age-native-simple',
    //       }}
    //     >
    //       <option aria-label="None" value="" />
    //       <option value={80}>TCAS</option>
    //       <option value={70}>อื่นๆ</option>
    //     </Select>
    //   </FormControl>
    //   <TextField id="outlined-basic" label="รอบที่รับสมัคร" variant="outlined" /><br></br>
    //   <FormControl variant="outlined" className={classes.formControl}>
    //     <InputLabel htmlFor="outlined-age-native-simple">รอบที่รับสมัคร</InputLabel>
    //     <Select
    //       native
    //       value={state.age}
    //       onChange={handleChange}
    //       label="รอบที่รับสมัคร"
    //       inputProps={{
    //         name: 'age',
    //         id: 'outlined-age-native-simple',
    //       }}
    //     >
    //       <option aria-label="None" value="" />
    //       <option value={10}>TCAS 1</option>
    //       <option value={10}>TCAS 2</option>
    //       <option value={10}>TCAS 3</option>
    //       <option value={10}>TCAS 4</option>
    //       <option value={10}>TCAS 5</option>
    //       <option value={60}>อื่นๆ</option>
    //     </Select>
    //   </FormControl>
    //   <TextField id="outlined-basic" label="รอบที่รับสมัคร" variant="outlined" /><br></br>
    //   <TextField id="outlined-basic" label="ชื่อโครงการที่รับสมัคร" variant="outlined" /><br></br>
    //   <TextField id="outlined-basic" label="ชื่อโครงการที่รับสมัคร" variant="outlined" />
    // </form>
  );
}
