import * as React from 'react';




import Button from '@mui/material/Button';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, TextField } from '@mui/material';
import { FormControlLabel,Radio, InputLabel, Select,  MenuItem,Stack,Typography} from "@mui/material";

export default function ControlledOpenSelect({handlerChange}) {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{  width: {xs:'100%',sm:'100%',md:'100%',lg:'100%'}}}>
        <InputLabel id="demo-controlled-open-select-label"> Select State/Province</InputLabel>
        
        
        <Select  name='ZIP' onChange={handlerChange} sx={{width:"100%"}} placeholder='hddh' IconComponent={ExpandMoreIcon}>
        <MenuItem value='Punjab'>Punjab</MenuItem>
          <MenuItem value='sindh'>Sindh</MenuItem>
          <MenuItem value='Balochistan'>Balochistan</MenuItem>
          <MenuItem value='Kpk'>Kpk</MenuItem>
        </Select>
         
          
        
      
      </FormControl>
    </div>
  );
}
