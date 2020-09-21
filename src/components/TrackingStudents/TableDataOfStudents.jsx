import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(idCard,name,school,sumActivity,sumAdmission,) {
 
  return {
    idCard,
    name,
    school,
    sumActivity,
    sumAdmission,
    
    activity: [
      { date: '2020-01-05', customerId: '11091700' },
      { date: '2020-01-02', customerId: 'Anonymous'},
    ],

    admission:[
      { date: '2020-01-05', customerId: '11091700' ,year:'2017'},
      { date: '2020-01-05', customerId: '11091700' ,year:'2017'},
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.idCard}
        </TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell align="center">{row.school}</TableCell>
        <TableCell align="center">{row.sumActivity}</TableCell>
        <TableCell align="center">{row.sumAdmission}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div" className="font-athiti">
                รายชื่อกิจกรรมที่เข้าร่วม
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ชื่อกิจกรรม</TableCell>
                    <TableCell>ปีที่จัดกิจกรรม</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.activity.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div" className="font-athiti">
                รายชื่อโครงการที่สมัครสอบ
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ชื่อโครงการที่สมัครสอบ</TableCell>
                    <TableCell>รอบที่สมัครสอบ</TableCell>
                    <TableCell>ปีที่สมัครสอบ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.admission.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
        
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    activity: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  
  createData('1122334455667','อินทิรา  ตั้งนิรามัย','อัสสัมชัญศึกษา',4,1),
  createData('1122334455667','อินทิรา  ตั้งนิรามัย','อัสสัมชัญศึกษา',4,1),
  createData('1122334455667','อินทิรา  ตั้งนิรามัย','อัสสัมชัญศึกษา',4,1),
  createData('1122334455667','อินทิรา  ตั้งนิรามัย','อัสสัมชัญศึกษา',4,1),
  createData('1122334455667','อินทิรา  ตั้งนิรามัย','อัสสัมชัญศึกษา',4,1),

];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">รหัสประชาชน</TableCell>
            <TableCell align="center">ชื่อ-นามสกุล</TableCell>
            <TableCell align="center">โรงเรียน</TableCell>
            <TableCell align="center">จำนวนกิจกรรมที่เข้าร่วม</TableCell>
            <TableCell align="center">จำนวนโครงการที่สมัครสอบ</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
