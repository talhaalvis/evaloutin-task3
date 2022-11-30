import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import IdentityNavbar from "../components/IdentityNavbar";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { InputLabel, Paper, TextField } from "@mui/material";
import Signup from "../pages/Signup";
import img from "../assests/0.png";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imgD from "../assests/Dashboard-Icon.png";
import imgI from "../assests/Identity-Icon.png";
import imgP from "../assests/Profile-Icon.png";
import imgR from "../assests/Refer-Link.png";
import imgS from "../assests/Security-icon.png";

const Identity = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.profile);
  const handlerIdentity = () => {
    navigate("/identity");
  };
  console.log(data);
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
        <Paper
          sx={{
            width: { xs: "100%", sm: "12%", md: "10%", lg: "8%", xl: "10%" },

            backgroundColor: "#fff",

            display: "flex",
            flexDirection: { xs: "row", sm: "column", lg: "column" },
            gap: { xs: "0", sm: "15px" },
            mt: { xs: "15px", sm: "0", md: "0", lg: "0" },
            justifyContent: { xs: "center", sm: "start" },
            alignItems: { xl: "flex-end" },
          }}
        >
          <Box
            sx={{
              marginLeft: "35px",
              mt: "10px",
              width: { xs: "10%", sm: "50%", md: "50%", lg: "50%", xl: "50%" },
              
            }}
          >
            <img src={imgD} alt="" />
          </Box>
          <Box
            sx={{
              marginLeft: "35px",
              mt: "10px",
              width: { xs: "30%", sm: "50%", md: "50%", lg: "50%", xl: "50%" },
            }}
          >
            <img src={imgP} />
          </Box>
          <Box
            sx={{
              marginLeft: "35px",
              mt: "10px",
              width: { xs: "30%", sm: "50%", md: "50%", lg: "50%", xl: "50%" },cursor:'pointer'
            }}
          >
            <img src={imgI} alt="" onClick={handlerIdentity} />
          </Box>
          <Box
            sx={{
              marginLeft: "35px",
              mt: "10px",
              width: { xs: "30%", sm: "50%", md: "50%", lg: "50%", xl: "50%" },
            }}
          >
            <img src={imgR} alt="" />
          </Box>
          <Box
            sx={{
              marginLeft: "35px",
              mt: "10px",
              width: { xs: "30%", sm: "50%", md: "50%", lg: "50%", xl: "50%" },
              display: {
                xs: "none",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <img src={imgS} alt="" />
          </Box>

          {/* </Box> */}
        </Paper>

        <Box
          sx={{
            width: { xs: "100%", sm: "88%", md: "90%", lg: "92%", xl: "90%" },
          }}
        >
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
                Profile
              </Typography>
            </Container>
          </Box>
          <Container maxWidth="xl" sx={{ width: "97%" }}>
            <Box sx={{ display:'flex',flexDirection: {xs:'column',sm:'column',md:'column',lg:'row'}, justifyContent: "space-between" }}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "68%",
                    xl: "68%",
                  },
                }}
              >
                <Signup />
              </Box>
              <Box
                sx={{
                  width: {xs:'100%',lg:'28%'},
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                  paddingBottom:{xs:'25px'},
                  mt: {xs:'10px',sm:'3px',md:'3px',lg:'26px'},
                }}
              >
                {/* vertical code */}
                <Box
                  sx={{
                    display: {
                      xs: "Block",
                      sm: "Block",
                      md: "Block",
                      lg: "block",
                    },
                    width: { xs: "100%", lg: "74%" },
                    mt: { xs: "10px", lg: "20px" },
                  }}
                >
                  <Box
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Paper
                      sx={{
                        width: { xs: "90%", sm: "94%", md: '40%', lg: "100%" },
                        height: { xs: 336, sm: 260, md: 320, lg: 450, xl: 470 },
                        paddingBlock: "3rem",
                        paddingInline: { xs: "1rem", lg: "2rem" },
                      }}
                      elevation={3}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Avatar
                          sx={{
                            marginBottom: "3rem",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <img src={img} />
                        </Avatar>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: {xs:'25px',sm:'25px',md:'25px',lg:'26px'},
                        }}
                      >
                        <Typography
                          variant="p"
                          sx={{
                            fontSize: { xs: "18", lg: "26px" },
                            fontWeight: "bold",
                          }}
                        >
                          Username:
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{ fontSize: { xs: "18", lg: "26px" } }}
                        >
                          {data.userProfile?.id}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "2rem",
                        }}
                      >
                        <Typography
                          variant="p"
                          sx={{
                            fontSize: { xs: "18", lg: "26px" },
                            fontWeight: "bold",
                          }}
                        >
                          status:
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{ fontSize: { xs: "18", lg: "26px" } }}
                        >
                          {data.userProfile?.IsBlocked}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "2rem",
                        }}
                      >
                        <Typography
                          variant="p"
                          sx={{
                            fontSize: { xs: "18", lg: "26px" },
                            fontWeight: "bold",
                          }}
                        >
                          User:
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{ fontSize: { xs: "18", lg: "26px" } }}
                        >
                          {data.userProfile?.FirstName}
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Identity;
