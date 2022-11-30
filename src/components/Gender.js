import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControlLabel, InputLabel, Select, TextField, MenuItem,Stack} from "@mui/material";


export default function ControlledOpenSelect({ handlerChange }) {


  return (
    <div>
      <FormControlLabel sx={{width:"100%"}}>
        < Select name='gender' onChange={handlerChange}sx={{width:'100%'}} label="Grouping" IconComponent={ExpandMoreIcon}>
          
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>

       
      </FormControlLabel>
    </div>
  );
}
