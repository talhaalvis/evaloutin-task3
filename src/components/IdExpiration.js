import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControlLabel, InputLabel, Select,  MenuItem,Stack, FormControl} from "@mui/material";



export default function ControlledOpenSelect({ handlerChange }) {


  return (
    <div>
      <FormControl sx={{ minWidth: { xs: "100%", sm:'100%', md: '100%', lg: '100%'} }}>
        <Select select name='IdExpiration' onChange={handlerChange} sx={{width:"100%"}} IconComponent={ExpandMoreIcon}>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>

       
      </FormControl>
    </div>
  );
}