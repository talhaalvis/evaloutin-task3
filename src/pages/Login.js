import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  InputLabel,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginNavbar from "../components/LoginNavbar";
import img from "../assests/cover.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/UserAction";
import { validateSignin } from "../helper/signinvalidation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { loading, error, userInfo, statuss, userToken } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  console.log(userToken);
  const handleClick = () => {
    setOpen(true);
  };
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  console.log(input);
  const navigate = useNavigate();
  const handlerChange = (e) => {
    const { value, name } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const object = {
    ...input,
    ip: {
      ip: "334.234.345.43.843",
      country_code: "pk",
      region_name: "pk",
      deviceDetails: "xyz",
      city: "city",
      Date: "123assdasdad",
    },
  };
  console.log(object);

  const handlerSubmit = (e) => {
  
    e.preventDefault();
    const { isValidated, error } = validateSignin(input);

    if (isValidated) {
      dispatch(userLogin(object));
    } else {
      setErrorMessage(error);
      handleClick();
      return;
    }
    // dispatch(userLogin(object))
    const token = localStorage.getItem("userToken");
    if (token) {
      setInterval(() => {
        navigate("/identity");
      }, 3000);
      toast.success("Login Successful", { position: "bottom-left" });
    } else if (!token) {
      navigate("/");
    }

    
  };
  // setTimeout(handlerSubmit, 3000);
  // useEffect(() => {
  //   const token = localStorage.getItem("userToken");
  //   if (token) {
  //     navigate("/identity");
  //   }
  //   else if(!token){
  //     navigate('/')
  //   }
  // }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //  submi handler

  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LoginNavbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Paper sx={{ width: { xs: "90%", lg: "750px" } }}>
          <Container>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "bold",
                lineHeight: 1.4,
                paddingTop: "20px",
                color: "#092326",
              }}
            >
              Login
            </Typography>
            <Divider sx={{ paddingBottom: "20px" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingRight: { xs: "0", sm: "10px", md: "10px", lg: "10px" },
                  paddingTop: "30px",
                  width: { xs: "100%", sm: "50%", md: "50%", lg: "50%" },
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#092326",
                  }}
                >
                  Email*
                </InputLabel>
                <TextField
                  name="email"
                  type="email"
                  onChange={handlerChange}
                  required
                  variant="outlined"
                  sx={{
                    maxWidth: "100%",
                    width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                    paddingTop: "10px",
                  }}
                ></TextField>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "30px",
                  width: { xs: "100%", sm: "50%", md: "50%", lg: "50%" },
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#092326",
                  }}
                >
                  Password *
                </InputLabel>
                <TextField
                  type="password"
                  name="password"
                  onChange={handlerChange}
                  required
                  variant="outlined"
                  sx={{
                    maxWidth: "100%",
                    width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                    paddingTop: "10px",
                  }}
                ></TextField>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "40px",
                marginBottom: "40px",
              }}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#092326" }}
              >
                Forgot Password?
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#092326" }}
              >
                Private Sale User?
              </Typography>
            </Box>
          </Container>
        </Paper>
        <Button
          sx={{
            backgroundColor: " #28a0b0",
            width: { xs: "90%", lg: "750px" },
            color: "#fff",
            fontSize: "22px",
            marginTop: "20px",
          }}
          onClick={handlerSubmit}
        >
          {" "}
          Login
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <ToastContainer position="bottom-left" />
    </Box>
  );
};

export default Login;
