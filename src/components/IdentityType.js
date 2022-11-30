import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";

import { FormControlLabel,Radio, InputLabel, Select,  MenuItem,Stack,Typography, FormControl} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ControlledOpenSelect({ handlerChange }) {


  return (
    <div>
      <FormControl sx={{ minWidth: { xs: "100%", sm:'100%', md: '100%', lg: '100%' } }}>
        <Select select name='IdentityType' onChange={handlerChange} sx={{width:'100%'}} IconComponent={ExpandMoreIcon}>
          <MenuItem value="Id card">Id card</MenuItem>
          <MenuItem value="Passport">passport</MenuItem>
        </Select>

       
      </FormControl>
    </div>
  );
}