import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));
export default function CreateEntrance() {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">รูปแบบการรับสมัคร</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="รูปแบบการรับสมัคร"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={80}>TCAS</option>
          <option value={70}>อื่นๆ</option>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="รอบที่รับสมัคร" variant="outlined" /><br></br>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">รอบที่รับสมัคร</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="รอบที่รับสมัคร"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>TCAS 1</option>
          <option value={10}>TCAS 2</option>
          <option value={10}>TCAS 3</option>
          <option value={10}>TCAS 4</option>
          <option value={10}>TCAS 5</option>
          <option value={60}>อื่นๆ</option>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="รอบที่รับสมัคร" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="ชื่อโครงการที่รับสมัคร" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="ชื่อโครงการที่รับสมัคร" variant="outlined" />
    </form>
    
  );
}
