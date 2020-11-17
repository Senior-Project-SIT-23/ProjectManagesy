import React from "react"
import MUIDataTable, { ExpandButton } from "mui-datatables"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Table } from "@material-ui/core"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"

export default function TableMatched(props) {
  const columns = [
    {
      name: "data_first_name",
      label: "ชื่อ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_surname",
      label: "นามสกุล",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_degree",
      label: "ระดับชั้น",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_email",
      label: "email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_tel",
      label: "เบอร์ติดต่อ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "data_school_name",
      label: "โรงเรียน",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "num_of_activity",
      label: "กิจกรรมที่เข้าร่วม",
      options: {
        filter: true,
        sort: true,
      },
      
    },
    {
      name: "num_of_admission",
      label: "โครงการที่สมัครสอบ",
      options: {
        filter: true,
        sort: true,
        
      },
    },
  ]

  // const data = [
  //   ["Gabby George", "ม.5", "Minneapolis", 30, "$100,000",3,1,],
  //   ["Aiden Lloyd", "ม.5", "Dallas", 55, "$200,000",3,1,],
  //   ["Jaden Collins","ม.5", "Santa Ana", 27, "$500,000",3,1,],
  //   ["Franky Rees","ม.6", "St. Petersburg", 22, "$50,000",3,1,],
  //   ["Aaren Rose", "ม.5", "Toledo", 28, "$75,000",3,1,],
  //   ["Blake Duncan", "ม.5", "San Diego", 65, "$94,000",3,1,],
  //   ["Frankie Parry", "ม.5", "Jacksonville", 71, "$210,000",3,1,],
  //   ["Lane Wilson", "ม.5", "Omaha", 19, "$65,000",3,1,],
  //   ["Robin Duncan", "ม.6", "Los Angeles", 20, "$77,000",3,1,],
  //   ["Mel Brooks", "ม.5", "Oklahoma City", 37, "$135,000",3,1,],
  //   ["Harper White", "ม.4", "Pittsburgh", 52, "$420,000",3,1,],
  //   ["Kris Humphrey", "ม.5", "Laredo", 30, "$150,000",3,1,],
  //   ["Frankie Long", "ม.5", "Austin", 31, "$170,000",3,1,],
  //   ["Brynn Robbins", "ม.3", "Norfolk", 22, "$90,000",3,1,],
  //   ["Justice Mann", "ม.5", "Chicago", 24, "$133,000",3,1,],
  //   [
  //     "Addison Navarro",
  //     "Business Management Analyst",
  //     "New York",
  //     50,
  //     "$295,000",
  //     3,1,
  //   ],
  //   ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000",3,1],
  //   ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000",3,1],
  //   ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000",4,1],
  //   ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000",5,1],
  //   ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000",2,1,],
  //   ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000",3,1,],
  //   ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000",1,1,],
  //   ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000",5,1,],
  //   ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000",3,3,],
  //   ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000",3,1,],
  //   ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000",3,1,],
  //   ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000",3,1,],
  //   ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000",3,1,],
  //   [
  //     "Gabby Strickland",
  //     "Business Process Consultant",
  //     "Scottsdale",
  //     26,
  //     "$45,000",
  //     3,1,
  //   ],
  //   ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000",3,1,],
  // ]

  const options = {
    filter: true,
    filterType: "checkbox",
    responsive: "standard",
    selectableRowsHeader: false,
    selectableRows: false,
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    // isRowExpandable: (dataIndex, expandedRows) => {
    //   if (dataIndex === 3 || dataIndex === 4) return false;

    //   // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
    //   if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
    //   return true;
    // },
    // rowsExpanded: [0, 1],
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1
      console.log("ddd",rowData)
      return (
        <>
          <TableRow>
            <TableCell colSpan={colSpan}>
              <Typography gutterBottom component="div" className="font-athiti">
                รายชื่อกิจกรรมที่เข้าร่วม
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b className="font-athiti">ชื่อกิจกรรม</b>
                    </TableCell>
                    <TableCell>
                      <b className="font-athiti">ปีที่จัดกิจกรรม</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      XXXXXXXXXXX
                    </TableCell>
                    <TableCell>XXXXXXXX</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Typography gutterBottom component="div" className="font-athiti mt-2">
                รายชื่อโครงการที่สมัครสอบ
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b className="font-athiti">ชื่อโครงการที่สมัครสอบ</b>
                    </TableCell>
                    <TableCell>
                      <b className="font-athiti">รอบที่สมัครสอบ</b>
                    </TableCell>
                    <TableCell>
                        <b className="font-athiti">ปีที่สมัครสอบ</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      XXXXXXXXXXX
                    </TableCell>
                    <TableCell>XXXXXXXX</TableCell>
                    <TableCell>XXXXXXXX</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
     
        </>
      )
    },
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) =>
      console.log(curExpanded, allExpanded, rowsExpanded),
  }

  const theme = createMuiTheme({
    overrides: {
      MUIDataTableSelectCell: {
        expandDisabled: {
          // Soft hide the button.
          visibility: "hidden",
        },
      },
      MUIDataTableToolbar: {
        titleText: {
          fontFamily: "Athiti",
        },
      },
    },
  })

  const components = {
    ExpandButton: function (props) {
      //   if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{width:'24px'}} />;
      return <ExpandButton {...props} />
    },
  }
  return (
    <MuiThemeProvider theme={theme}>
      {console.log(props.dataMatch)}
      <MUIDataTable
        title={"ข้อมูลนักเรียน"}
        data={props.dataMatch}
        columns={columns}
        options={options}
        components={components}
      />
    </MuiThemeProvider>
  )
}
