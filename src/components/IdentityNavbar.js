import React from "react";
import logo from "../assests/logo.png"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Image from "mui-image";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack,Typography} from "@mui/material";
const Navbar = () => {
  const navigate=useNavigate()
  const handlerLogout=()=>{    
    localStorage.removeItem('userToken')
navigate('/')


  }
  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        variant:"outined"
      }}
      position='sticky'

    >
      <Container maxWidth='xl' sx={{width:{xs:'100%',sm:'95%',md:'90%',lg:'95%',xl:'100%'}}}>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              marginTop:{ xs:'21px',sm:'21px',md:'15px',lg:"21px"},
              display: "flex",
              alighnItems: "center",
              gap: {
                xs: "13px",
                sm: "23px",
                md: "25px",
                lg: "23px",
                xl: "34px",
              },
            }}
          >
            <Box>
              <Image sx={{maxWidth:{xs:'80%',lg:'100%'}}}
               
              
                src={logo}
               
              />
            </Box>
            <Typography
              sx={{
                borderLeft: "2px solid #000000",
                opacity: "0.4",
                height: "30px",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            ></Typography>
            <Typography
              variant="p"
              sx={{ fontSize: {md:'17px',lg:'20px'}, display: { xs: "none", lg: "block" } }}
            >
              Home
            </Typography>
            <Typography
              variant="o"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                opacity: "0.7",
                fontSize: {md:'17px',lg:'20px'},
                fontFamily: "Helvetica",
              }}
            >
              Exchange
            </Typography>
            <Typography
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                opacity: "0.7",
                fontSize: {md:'17px',lg:'20px'},
                fontFamily: "Helvetica",
              }}
              variant="p"
            >
              Notifications
              <Typography>
                <ExpandMoreIcon sx={{ opacity: "0.7", paddingTop: "4px" }} />
              </Typography>
            </Typography>
            <Typography
              variant="p"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                  fontFamily: "Helvetica",
                },
                opacity: "0.7",
                fontSize: {md:'17px',lg:'20px'},
              }}
            >
              Apply to list
            </Typography>
            <Typography
              variant="p"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                opacity: "0.7",
                fontSize: {md:'17px',lg:'20px'},
                fontFamily: "Helvetica",
              }}
            >
              Contact us
            </Typography>
          </Typography>
          <Stack
            sx={{ alignItems: "center",margin:{xs:'0',sm:'0',md:'5px',lg:"0"} }}
            direction="row"
            spacing={{ xs: 1, sm: 2.5, md: 3.5, lg: 3, xl: 3.8 }}
            
          >
           
            <Typography>
              <Button
                sx={{
                  paddingBlock: ".8rem",
                  paddingInline: {
                    xs: "8px",
                    sm: "13px",
                    md: "16px",
                    lg: "15px",
                    xl: "30px",
                    fontFamily: "Helvetica",
                    color:'#000'
                  },
                  

                  fontSize: {
                    xs: "20px",
                    sm: "15px",
                    md: "15px",
                    lg: "20px",
                    xl: "20px",
                  },
                  "&:hover": {
                    backgroundColor: "#28a0b0",
                  },
                  textTransform: "none",
                }}
                variant=""
           onClick={handlerLogout}   >
                Logout
              </Button>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
};

export default Navbar;
