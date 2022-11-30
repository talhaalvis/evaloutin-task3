import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import IdentityNavbar from "../components/IdentityNavbar";
import VerticalStapper from "../components/VerticalStapper";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stapper from "../pages/Stapper";
import Image from "mui-image";
import img from '../assests/Dashboard-Icon.png'
import imgI from '../assests/Identity-Icon.png'
import imgP from '../assests/Profile-Icon.png'
import imgR from '../assests/Refer-Link.png'
import imgS from '../assests/Security-icon.png'
const Identity = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const data = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [fileSecond, setFileSecond] = useState(null);
  const [file3, setFile3] = useState(null);
  const inputRef = React.useRef(null);
  const inputRef2 = React.useRef(null);
  const inputRef3 = React.useRef(null);
  const navigate = useNavigate();

  const handlerChangeSecond = (e) => {
    console.log("2");
    e.preventDefault();
    setFileSecond(e.target.files[0]);
  };
  const handlerChange3 = (e) => {
    console.log("3");

    e.preventDefault();
    setFile3(e.target.files[0]);
  };

  const handlerProfile = () => {
    const token = localStorage.getItem("userToken");
    if(token){

      navigate("./profile");
    }
  };
  return (
    <Box>
      <IdentityNavbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          backgroundColor: "#f2f2b",
        }}
      >
        <Paper  sx={{
            width: { xs: "100%", sm: "12%", md: "10%", lg: "8%", xl: "10%" },
            

            backgroundColor: "#fff",

            display: "flex",
            flexDirection: { xs: "row", sm: "column", lg: "column" },
            gap: { xs: "0", sm: "15px" },
            mt: { xs: "15px", sm: "0", md: "0", lg: "0" },
            justifyContent: { xs: "center", sm: "start" },
            alignItems: { xl: "flex-end" },
          }}>

        <Box sx={{marginLeft:'35px',mt:'10px' ,width:{xs:'10%',sm:'50%',md:'50%',lg:'50%',xl:'50%'}}}>
            <img src={img} alt='' 
              
            />
          </Box>
          <Box sx={{marginLeft:{xs:'50px',sm:'35px',md:"35px",lg:"35px"},mt:'10px',width:{xs:'30%',sm:'50%',md:'50%',lg:'50%',xl:'50%'},cursor:'pointer'}}>
            <img  src={imgP} onClick={handlerProfile} />
          </Box>
          <Box sx={{marginLeft:'35px',mt:'10px',width:{xs:'30%',sm:'50%',md:'50%',lg:'50%',xl:'50%'}}}>
            <img   src={imgI} alt='' />
            
          </Box>
          <Box sx={{marginLeft:'35px',mt:'10px',width:{xs:'30%',sm:'50%',md:'50%',lg:'50%',xl:'50%'}}}>
          <img   src={imgR} alt='' />
          </Box>
          <Box sx={{marginLeft:'35px',mt:'10px',width:{xs:'30%',sm:'50%',md:'50%',lg:'50%',xl:'50%'},display:{xs:'none',sm:'block',md:'block',lg:'block',xl:"block"}}}>
          <img   src={imgS} alt='' />
          </Box>
        
          
        {/* </Box> */}
        </Paper>

        <Box sx={{ width:{xs:'100%',sm:'88%',md:'90%',lg:'92%',xl:'90%'}}}>
          <Box
            sx={{
              backgroundColor: " #28a0b0",
              height: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container maxWidth="xl" sx={{ width: "97%" }}>
              <Typography
                sx={{
                  fontSize: "44px",
                  lineHeight: 2.41,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Identity
              </Typography>
            </Container>
          </Box>
          <Container maxWidth='xl' sx={{width:'97%'}}>

          <Box sx={{display:'flex' ,justifyContent:'space-between'}} >
            
              <Box sx={{width:{xs:'100%',sm:'100%',md:'100%',lg:'68%',xl:'68%'}}}>
                <Stapper/>
              </Box>

            
           
              <Box sx={{width:'28%',display:{xs:'none',sm:'none',md:'none',lg:'block',xl:'block'},mt:'26px'}} >
                <VerticalStapper/>
              </Box>
          </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Identity;
