import * as React from 'react';
import { FormControlLabel, InputLabel, Select, TextField, MenuItem,Stack} from "@mui/material";
export default function NativePickers({handlerChange,name}) {
  return (
    <Stack component="form" noValidate spacing={3} sx={{width:'100%'}} >
      <TextField
        id="date"
       name={name}
        type="date"
        defaultValue=""
        sx={{ width:{xs:'100%',sm:'100%', md:'100%' ,lg:'100%'} }}
        InputLabelProps={{
          shrink: true,
        }}
    onChange={handlerChange}   />
     
    </Stack>
  );
}