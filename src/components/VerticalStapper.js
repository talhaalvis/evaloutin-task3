import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import { Avatar, Paper,  } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FormControlLabel,Radio, InputLabel, Select,  MenuItem,Stack,Typography} from "@mui/material";

const steps = [{label:'level 1',
description:'this is what'
},{label:'level 2',
description:'this is what'
},{label:'level 3',
description:'this is what'
},];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' ,mt:'23px' }}>
        <Paper sx={{width:'100%',height:{lg:'603px',xl:'661px'}}} >
        <Box sx={{
        // maxWidth:'20rem'
        
    }}>
      <Stack sx={{
       
      }}>
        <Box
          sx={{
            display: "flex",
            marginLeft:'30px',
            mt:'45px'
          }}
        >
          <CheckCircleIcon sx={{color:"green",height:'1.5rem',width:'1.5rem'}} />{" "}
          <Box sx={{display:'flex',flexDirection:'column',marginLeft:'1rem'}}>
            <Typography variant="p" sx={{fontSize:'24px',fontWeight:'bold',color:'#092326'}}>Level 1</Typography>
            <Typography sx={{marginTop:'.5rem'}} variant="p">24H WithDrawal Limit</Typography>
          </Box>{" "}
        </Box>

        <Box sx={{backgroundColor:'#11434a',height:'10rem',width:'3px',marginLeft:'41px'}}></Box>
        <Box
          sx={{
            display: "flex",
            marginTop:'27px',marginLeft:'32px'
          }}
        >
          <Avatar sx={{height:'1.5rem',width:'1.5rem',backgroundColor:'#28a0b0'}}>2</Avatar>
          <Box sx={{display:'flex',flexDirection:'column',marginLeft:'1rem'}}>
            <Typography variant="p" sx={{fontSize:'24px',fontWeight:'bold',color:'#092326'}}>Level 2</Typography>
            <Typography sx={{marginTop:'.5rem'}} variant="p">24H WithDrawal Limit</Typography>
          </Box>{" "}
          
        </Box>
        <Box sx={{backgroundColor:'#28a0b0',height:'10rem',width:'3px',marginLeft:'41px'}}></Box>
        <Box
          sx={{
            display: "flex",
            marginTop:'27px',
            marginLeft:'35px'
          }}
        >
          <Avatar sx={{height:'1.5rem',width:'1.5rem',backgroundColor:'#28a0b0'}}>3</Avatar>
          <Box sx={{display:'flex',flexDirection:'column',marginLeft:'1rem'}}>
            <Typography variant="p" sx={{fontSize:'24px',fontWeight:'bold',color:'#092326'}}>Level 3</Typography>
            <Typography sx={{marginTop:'.5rem'}} variant="p">24H WithDrawal Limit</Typography>
          </Box>{" "}
          
        </Box>
      </Stack>
    </Box>
      </Paper>
    </Box>
  );
}



