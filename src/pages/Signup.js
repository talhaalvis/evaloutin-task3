import React, { useState } from "react";

import Button from "@mui/material/Button";
import { validateSignup } from "../helper/validateSignup";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Container, FormControl } from "@mui/material";
// import CountryProfile from "../pages/CountryProfile";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction, editProfile } from "../store/UserAction";
import { CountryDropdown } from "react-country-region-selector";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import "react-toastify/dist/ReactToastify.css";
import {
OutlinedInput,FormControlLabel,Radio,InputLabel,Select,MenuItem,Stack,Typography,Paper, Snackbar, Alert,
} from "@mui/material";

const SignUpform = () => {
  const [erroe, setError] = useState(false);
  const [formValue, setformValue] = useState();
  const [check, setcheck] = useState(false);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checks, setchecks] = useState("");
  const [value, setValue] = useState();
  const [phonenumerror, setphonenumerror] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [isEditAble, setIsEditAble] = useState(true);
  const [userData, setUserData] = useState({});
  const handleClick = () => {
    setOpen(true);
  };
  // const [edit,setEdit]=useState({
  //   firstName:'',
  //   country:'',
  //   phoneNumber:'',
  //   userName:''
  // })

  const dispatch = useDispatch();
  const { loading, userProfile, error,success } = useSelector((state) => state.profile);

  console.log(loading);
  useEffect(() => {
    dispatch(userProfileAction({}));
  }, [dispatch]);
  useEffect(() => {
    setUserData(userProfile);
  }, [userProfile]);
  const handlerChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handlerChangeCountry = (e) => {
    setUserData({ ...userData, Country: e });
  };

  const handlerChangeContact = (e) => {
    setUserData({ ...userData, ContactNumber: e });
  };

  const submitHandler = () => {
    // setformErrors(validate(userData));
    const profileSave = {
      firstName: userData.FirstName,
      country: userData.Country,
      userName: userData.id,
      phoneNumber: userData.ContactNumber,
    };
    // if(success){
    //   toast.success("Save Successfully", { position: "bottom-left" });
    // }
    const { isValidated, error } = validateSignup(userData);

    if (isValidated) {
      dispatch(editProfile(profileSave));
      setUserData({FirstName:'',Email:'',id:'',Country:'',ContactNumber:""})
      dispatch(userProfileAction({}))

      // setTimeout(() => {
      //   window.location.reload(true);
      // }, 3000);
    } else {
      setErrorMessage(error);
      handleClick();
      return;
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{ marginBottom: "40px" }}>
      {/* <IdentityNavbar /> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          mt: "40px",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            flexWrap: "wrap",
            width: "100%",
            "& > :not(style)": {
              m: 1,

              margin: "auto",
            },
          }}
        >
          <Container maxWidth="xl" sx={{ width: "97%", marginBottom: "30px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                paddingTop: "20px",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  lg: "row",
                },
              }}
            >
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  Name *
                </InputLabel>
                <OutlinedInput
                  disabled={isEditAble}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  name="FirstName"
                  onChange={handlerChange}
                  value={userData?.FirstName}
                  required
                  error={!!userData?.firstName == "" && error}
                ></OutlinedInput>
              </Box>
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  Email *
                </InputLabel>
                <OutlinedInput
                  disabled={isEditAble}
                  sx={{ width: "100%" }}
                  name="Email"
                  onChange={handlerChange}
                  value={userData?.Email}
                  error={!!userData?.Email == "" && error}
                ></OutlinedInput>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                paddingTop: "20px",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  lg: "row",
                },
              }}
            >
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  Password*
                </InputLabel>
                <OutlinedInput
                  disabled={isEditAble}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  name="password"
                  type="password"
                  onChange={handlerChange}
                ></OutlinedInput>
                <p style={{ color: "red", margin: "0", paddingTop: "12px" }}>
                  {" "}
                  {formErrors.password}
                </p>
              </Box>
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  confirmPassword *
                </InputLabel>
                <OutlinedInput
                  disabled={isEditAble}
                  sx={{ width: "100%" }}
                  name="confirmPassword"
                  type="password"
                  onChange={handlerChange}
                ></OutlinedInput>
                <p style={{ color: "red", margin: "0", paddingTop: "12px" }}>
                  {formErrors.confirmPassword}
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                paddingTop: "20px",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  lg: "row",
                },
              }}
            >
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  username *
                </InputLabel>
                <OutlinedInput
                  disabled={isEditAble}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  name="id"
                  onChange={handlerChange}
                  value={userData?.id}
                  error={!!userData?.id == "" && error}
                ></OutlinedInput>
              </Box>
              {/* country code */}
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  Contact Number
                </InputLabel>
                <Box>
                  <PhoneInput
                    placeholder="Enter Phone Number"
                    value={userData?.ContactNumber}
                    name="phoneNumber"
                    id="Contact"
                    defaultCountry="PK"
                    onChange={handlerChangeContact}
                    disabled={isEditAble}
                  />
                </Box>
                <p
                  style={{
                    color: "red",
                    margin: "0",
                    paddingTop: "12px",
                  }}
                >
                  {phonenumerror}
                </p>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                paddingTop: "20px",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  lg: "row",
                },
              }}
            >
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  Country *
                </InputLabel>
                <CountryDropdown
                  value={userData?.Country}
                  disabled={isEditAble}
                  name="Country"
                  onChange={handlerChangeCountry}
                  style={{
                    padding: "18px",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "5px",
                    width: "98%",
                  }}
                />
                <p style={{ color: "red", margin: "0", paddingTop: "12px" }}>
                  {formErrors.country}
                </p>
              </Box>
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <InputLabel
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: 1.56,
                    color: "#092326",
                    paddingBottom: "5px",
                  }}
                >
                  {" "}
                  Profile Image *
                </InputLabel>
                <OutlinedInput
                  disabled={isEditAble}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  name="profileImage"
                  onChange={handlerChange}
                ></OutlinedInput>
              </Box>
            </Box>

            <FormControl>
              <FormControl
                value="female"
                control={<Radio />}
                label="I want to receive emails on new products, promotions and updates."
                sx={{ paddingTop: "20px" }}
                checked={check}
              />
            </FormControl>
          </Container>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          paddingTop: { xs: "15px", sm: "20px", md: "15px", lg: "10px",xl:'32px' },
          flexDirection: { xs: "column", sm: "row", lg: "row" },
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", lg: "50%" },
            borderRadius: "9px",
            fontSize: "22px",
            fontWeight: "normal",
            color: "#28a0b0",
            backgroundColor: "#fff",
          }}
          variant="outlined"
          onClick={() => setIsEditAble(false)}
        >
          {" "}
          Edit
        </Button>
        <Button
          sx={{
            width: { xs: "100%", lg: "50%" },
            borderRadius: "9px",
            fontSize: "22px",
            fontWeight: "normal",
            color: "#fff",
            backgroundColor: "#28a0b0",
          }}
          onClick={(e) => {
            submitHandler(e);
          }}
          variant="outlined"
        >
          {" "}
          Save
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

export default SignUpform;
