import {
  Alert,
  Box,
  Container,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Snackbar,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/UserAction";
import { setProducts } from "../store/UserSlice";
import { TextField } from "@mui/material";
import { useState } from "react";
import img from "../assests/upload.png";
import { useNavigate } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
OutlinedInput,Radio,InputLabel, Select, MenuItem,Stack,Typography, Paper,
} from "@mui/material";
import { validateSignup } from "../helper/SignUpIdentity";
import { validateSignupIdentitySecond } from "../helper/SignUpIdentitySecond";
import {
  DatePicker,DesktopDatePicker, LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';

const App = () => {
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);
  const [fileSecond, setFileSecond] = useState(null);
  const [file3, setFile3] = useState(null);
  const [step, setstep] = useState(1);

  const [errorMessage, setErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [input, setInput] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    Email: "",
    country: "",
    ZIP: "",
    state: "",
    city: "",
    addressLine1: "",
    IdentityType: "",
    drivingLicenseNumber: "",
    nationalIdentityCardNumber: "",
    passportNumber: "",
    dateOfBirth: "2017-22-11",
    isUSCitizen: false,
    isPoliticallyExposed: false,
    isClosedToPoliticallyExposed: false,
    gender: "",
    
  });
  console.log(input.firstName, "firstname");
  const data = useSelector((state) => state.user);
  const inputRef = React.useRef(null);
  const inputRef2 = React.useRef(null);
  const inputRef3 = React.useRef(null);
  const navigate = useNavigate();
  let formData = new FormData();
  formData.append("firstName", input.firstName);
  formData.append("middleName", input.middleName);
  formData.append("lastName", input.lastName);
  formData.append("Email", input.Email);
  formData.append("country", input.country);
  formData.append("ZIP", input.ZIP);
  formData.append("addressLine1", input.addressLine1);
  formData.append("identityType", input.IdentityType);
  formData.append("drivingLicenseNumber", input.drivingLicenseNumber);
  formData.append( "isClosedToPoliticallyExposed", input.isClosedToPoliticallyExposed);
  formData.append("nationalIdentityCardNumber",input.nationalIdentityCardNumber);
  formData.append("passportNumber", input.passportNumber);
  formData.append("dateOfBirth", input.dateOfBirth);
  formData.append("isUSCitizen", input.isUSCitizen);
  formData.append("isPoliticallyExposed", input.isPoliticallyExposed);

  console.log(file);
  // useeffect

  const onButtonClick = () => {
    inputRef.current.click();
  };
  const onButtonClickSecond = () => {
    inputRef2.current.click();
  };
  const onButtonClick3 = () => {
    inputRef3.current.click();
  };

  const handlerChange = (e) => {
    // formData.append("firstName", input);
    console.log("2");

    const { value, name } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });

    // setFile(e.target.files[0]);
  };
  const handlerChangeSecond = (e) => {
    console.log("1");

    e.preventDefault();
    setFileSecond(e.target.files[0]);
  };
  const handlerChangeFirst = (e) => {
    console.log("1");

    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const handlerChange3 = (e) => {
    console.log("3");

    e.preventDefault();
    setFile3(e.target.files[0]);
  };
  const dispatch = useDispatch();
  const handleNext = (e) => {
    dispatch(setProducts(formData));
  };
  const submitHandlerData = () => {
    formData.append("documentImage_Page0", file);
    formData.append("photoForFaceComparison", fileSecond);
    formData.append("documentImage_Page1", file3);
    // setformErrors(validate(formData));
    dispatch(registerUser(formData));
  };
  const handlerChangeCountry = (e) => {
    setInput({ ...input, country: e });
  };
 

  // const handlerChangeDate = (e) => {
    
  //   console.log(e, "--------");
  //   setInput({ ...input, dateOfBirth: e });
  //   console.log(e, "date");
  // };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handelclick = () => {
    const { isValidated, error } = validateSignup(input);

    if (isValidated) {
      setstep(step + 1);
      dispatch(setProducts(formData));
    } else {
      setErrorMessage(error);
      handleClick();
      return;
    }
  };
  const handelclickSecond = () => {
    const { isValidated, error } = validateSignupIdentitySecond(input);

    if (isValidated) {
      setstep(step + 1);
      dispatch(setProducts(formData));
    } else {
      setErrorMessage(error);
      handleClick();
      return;
    }
  };
  // validation
  const handlerRadio = (e, checked) => {
    console.log(e.target.name, "cehked");
    setInput({ ...input, isUSCitizen: checked });
  };

  const handlerRadioSecond = (e, checked) => {
    console.log(e.target.name, "cehked");
    setInput({ ...input, isPoliticallyExposed: checked });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
          // marginLeft:{xl:'59px'}
        }}
      >
        {/* <Container maxWidth="xl" sx={{ width: "97%" }}> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "bolder",
                color: step === 1 ? "#11434a" : "#11434a",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "20px",
                    md: "24px",
                    lg: "24px",
                    xl: "38px",
                  },
                  fontWeight: "bold",
                }}
              >
                Personal
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "20px",
                    md: "24px",
                    lg: "24px",
                    xl: "38px",
                  },
                  fontWeight: "bold",
                }}
              >
                Detail
              </Typography>
            </Box>
            <Box
              sx={{
                height: "3px",
                width: "250px",
                backgroundColor: step === 1 ? "#28a0b0" : "#11434a",
                borderRadius: "5px",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: step === 2 ? "#11434a" : "#11434a",
                opacity: step === 2 || step === 3 ? 1 : 0.5,
                fontWeight: "bolder",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "20px",
                    md: "24px",
                    lg: "24px",
                    xl: "38px",
                  },
                  fontWeight: "bold",
                }}
              >
                Identity
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "20px",
                    md: "24px",
                    lg: "24px",
                  },
                  fontWeight: "bold",
                }}
              >
                Proof
              </Typography>
            </Box>
            <Box
              sx={{
                height: "3px",
                width: "250px",
                backgroundColor: step === 2 ? "#28a0b0" : "#28a0b0",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "bolder",
                color: step === 3 ? "#11434a" : "#11434a",
                opacity: step === 3 ? 1 : 0.5,
                width: {
                  xs: "100%",
                  sm: "36%",
                  md: "18%",
                  lg: "36%",
                  xl: "24%",
                },
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "20px",
                    md: "24px",
                    lg: "24px",
                    xl: "38px",
                  },
                  fontWeight: "bold",
                }}
              >
                Photo With
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "20px",
                    md: "24px",
                    lg: "22px",
                    xl: "38px",
                  },
                  fontWeight: "bold",
                }}
              >
                ID Proof
              </Typography>
            </Box>
          </Stack>
        </Box>
        {/* </Container> */}

        <Box>
          {step === 1 ? (
            <Box sx={{ display: "flex", paddingBottom: "35px" }}>
              <Box sx={{ mt: "20px", width: { xs: "100%", lg: "100%" } }}>
                {/* <Container sx={{ width: "97%" }}> */}
                <Paper>
                  <Container
                    sx={{
                      height: {
                        xs: "0",
                        sm: "0",
                        md: "0",
                        lg: "0",
                        xl: "503px",
                      },
                    }}
                  >
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
                      <Box sx={{ width: { xs: "100%", lg: "33%" } }}>
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
                          First Name *
                        </InputLabel>

                        <OutlinedInput
                          sx={{
                            width: "100%",
                            borderRadius: "8px",
                          }}
                          onChange={handlerChange}
                          name="firstName"
                          placeholder="Enter First Name"
                          error={!!input.firstName == "" && error}
                        ></OutlinedInput>
                      </Box>
                      <Box sx={{ width: { xs: "100%", lg: "33%" } }}>
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
                          Middle Name
                        </InputLabel>
                        <OutlinedInput
                          sx={{ width: "100%" }}
                          onChange={handlerChange}
                          name="middleName"
                          placeholder="Enter Middle Name"
                          error={!!input.middleName == "" && error}
                        ></OutlinedInput>
                      </Box>
                      <Box sx={{ width: { xs: "100%", lg: "33%" } }}>
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
                          Last Name *
                        </InputLabel>
                        <OutlinedInput
                          sx={{ width: "100%" }}
                          onChange={handlerChange}
                          name="lastName"
                          placeholder="Enter Middle Name"
                          error={!!input.lastName == "" && error}
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
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "50%",
                            md: "50%",
                            lg: "50%",
                          },
                        }}
                      >
                        <InputLabel
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: 1.56,
                            color: "#092326",
                            paddingBottom: "5px",
                          }}
                        >
                          Gender *
                        </InputLabel>
                        {/* <Gender handlerChange={handlerChange} /> */}
                        <FormControl sx={{ width: "100%" }}>
                          <Select
                            name="gender"
                            onChange={handlerChange}
                            sx={{ width: "100%" }}
                            label="Grouping"
                            IconComponent={ExpandMoreIcon}
                            error={!!input.gender == "" && error}
                          >
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Male">Male</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "50%",
                            md: "50%",
                            lg: "50%",
                          },
                        }}
                      >
                        <InputLabel
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: 1.56,
                            color: "#092326",
                            paddingBottom: "5px",
                          }}
                        >
                          Date of Birth *
                        </InputLabel>
                        <Stack
                          component="form"
                          noValidate
                          spacing={3}
                          sx={{ width: "100%" }}
                        >
                           {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                              <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handlerChangeDate}
                                name="dateOfBirth"
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>  */}
                          <TextField
                            id="date"
                            name="dateOfBirth"
                            type="date"
                            defaultValue=""
                            sx={{
                              width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                lg: "100%",
                              },
                            }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={handlerChange}
                            error={!!input.dateOfBirth == "" && error} 
                          /> 
                        </Stack>
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
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "33%",
                            md: "33%",
                            lg: "33%",
                          },
                        }}
                      >
                        <InputLabel
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: 1.56,
                            color: "#092326",
                            paddingBottom: "5px",
                          }}
                        >
                          Country *
                        </InputLabel>
                        <Box sx={{ width: "100%" }}>
                          <CountryDropdown
                            style={{
                              width: "100%",
                              padding: "18px",
                              border: "1px solid rgba(0, 0, 0, 0.2)",
                              borderRadius: "5px",
                            }}
                            onChange={handlerChangeCountry}
                            name="country"
                            value={input.country}
                            error={!!input.country == "" && error}
                          />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "33%",
                            md: "33%",
                            lg: "33%",
                          },
                        }}
                      >
                        <InputLabel
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: 1.56,
                            color: "#092326",
                            paddingBottom: "5px",
                          }}
                        >
                          State / Province
                        </InputLabel>
                        <FormControl
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "100%",
                              md: "100%",
                              lg: "100%",
                            },
                          }}
                        >
                          <InputLabel id="demo-controlled-open-select-label">
                            {" "}
                            Select State/Province
                          </InputLabel>

                          <Select
                            name="state"
                            onChange={handlerChange}
                            sx={{ width: "100%" }}
                            placeholder="hddh"
                            IconComponent={ExpandMoreIcon}
                            error={!!input.state == "" && error}
                          >
                            <MenuItem value="Punjab">Punjab</MenuItem>
                            <MenuItem value="sindh">Sindh</MenuItem>
                            <MenuItem value="Balochistan">Balochistan</MenuItem>
                            <MenuItem value="Kpk">Kpk</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "33%",
                            md: "33%",
                            lg: "33%",
                          },
                        }}
                      >
                        <InputLabel
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: 1.56,
                            color: "#092326",
                            paddingBottom: "5px",
                          }}
                        >
                          City *
                        </InputLabel>
                        <FormControl
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "100%",
                              md: "100%",
                              lg: "100%",
                            },
                          }}
                        >
                          <InputLabel id="demo-controlled-open-select-label">
                            {" "}
                            Select City
                          </InputLabel>
                          <Select
                            select
                            name="city"
                            onChange={handlerChange}
                            sx={{ width: "100%" }}
                            IconComponent={ExpandMoreIcon}
                            error={!!input.city == "" && error}
                          >
                            <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                            <MenuItem value="Multan">Multan</MenuItem>
                            <MenuItem value="Lahore">Lahore</MenuItem>
                            <MenuItem value="karachi">Karachi</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>

                    {/* address */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: "20px",
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          lg: "row",
                        },
                      }}
                    >
                      <Box sx={{ width: { xs: "100%", lg: "65%" } }}>
                        <InputLabel
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: 1.56,
                            color: "#092326",
                            paddingBottom: "5px",
                          }}
                        >
                          Address *
                        </InputLabel>
                        <OutlinedInput
                          sx={{ width: "100%" }}
                          name="addressLine1"
                          onChange={handlerChange}
                          error={!!input.addressLine1 == "" && error}
                        ></OutlinedInput>
                      </Box>
                      <Box sx={{ width: { xs: "100%", lg: "32%" } }}>
                        <InputLabel
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: 1.56,
                            color: "#092326",
                            paddingBottom: "5px",
                          }}
                        >
                          Zip / Postal Code *
                        </InputLabel>
                        <OutlinedInput
                          sx={{ width: "100%" }}
                          name="ZIP"
                          onChange={handlerChange}
                          error={!!input.ZIP == "" && error}
                        ></OutlinedInput>
                      </Box>
                    </Box>
                  </Container>
                </Paper>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                    pt: 2,
                    gap: "10px",
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
                    onClick={handleNext}
                  >
                    {" "}
                    Edit
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button
                    sx={{
                      width: { xs: "100%", lg: "50%" },
                      borderRadius: "9px",
                      fontSize: "22px",
                      fontWeight: "normal",
                      color: "#fff",
                      backgroundColor: "#28a0b0",
                    }}
                    variant="outlined"
                    onClick={handelclick}
                  >
                    {" "}
                    Save and Next
                  </Button>
                </Box>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    {errorMessage}
                  </Alert>
                </Snackbar>
                {/* </Container> */}
              </Box>
            </Box>
          ) : (
            ""
          )}
          {step === 2 ? (
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  mt: "14px",
                  width: { xs: "100%", lg: "100%" },
                  paddingBottom: "30px",
                }}
              >
                <Box>
                  <Paper sx={{ width: "100%" }}>
                    <Container>
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
                        <Box
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "33%",
                              md: "33%",
                              lg: "33%",
                            },
                          }}
                        >
                          <InputLabel
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              lineHeight: 1.56,
                              color: "#092326",
                              paddingBottom: "5px",
                            }}
                          >
                            Select Identity Type *
                          </InputLabel>
                          <FormControl
                            sx={{
                              minWidth: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                lg: "100%",
                              },
                            }}
                          >
                            <Select
                              select
                              name="IdentityType"
                              onChange={handlerChange}
                              sx={{ width: "100%" }}
                              IconComponent={ExpandMoreIcon}
                              error={!!input.IdentityType == "" && error}
                            >
                              <MenuItem value="Id card">NIC</MenuItem>
                              <MenuItem value="Passport">passport</MenuItem>
                            </Select>
                          </FormControl>
                          {/* <IdentityType handlerChange={handlerChange}  /> */}
                        </Box>
                        <Box
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "33%",
                              md: "33%",
                              lg: "33%",
                            },
                          }}
                        >
                          <InputLabel
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              lineHeight: 1.56,
                              color: "#092326",
                              paddingBottom: "5px",
                            }}
                          >
                            ID expiration date *
                          </InputLabel>
                          <FormControl
                            sx={{
                              minWidth: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                lg: "100%",
                              },
                            }}
                          >
                            <Select
                              select
                              name="IdExpiration"
                              onChange={handlerChange}
                              sx={{ width: "100%" }}
                              IconComponent={ExpandMoreIcon}
                              error={!!input.IdExpiration == "" && error}
                            >
                              <MenuItem value="Male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Box
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "33%",
                              md: "33%",
                              lg: "33%",
                            },
                          }}
                        >
                          <InputLabel
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              lineHeight: 1.56,
                              color: "#092326",
                              paddingBottom: "5px",
                            }}
                          >
                            National Identity Number *
                          </InputLabel>
                          <TextField
                            sx={{
                              width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                lg: "100%",
                              },
                            }}
                            name="nationalIdentityCardNumber"
                            onChange={handlerChange}
                            error={
                              !!input.nationalIdentityCardNumber == "" && error
                            }
                          >
                            {" "}
                          </TextField>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: {
                            xs: "20px",
                            sm: "40px",
                            md: "20px",
                            lg: "20px",
                          },
                          paddingBottom: "20px",
                          flexDirection: { xs: "column", sm: "row" },
                          flexWrap: {
                            sm: "wrap",
                            md: "wrap",
                            lg: "nowrap",
                          },
                        }}
                      >
                        {/* flex */}
                        <Box sx={{ marginTop: "20px" }}>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            National ID Front Side *
                          </Typography>
                          <Box sx={{ mt: "10px" }}>
                            <Paper
                              sx={{
                                width: {
                                  xs: "100%",
                                  sm: 245,
                                  md: 270,
                                  lg: 228,
                                  xl: 314,
                                },
                                height: "290px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              '
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                onClick={onButtonClick}
                              >
                                <input
                                  ref={inputRef}
                                  type="file"
                                  id="input-file-upload"
                                  onChange={handlerChangeFirst}
                                  hidden
                                  name="documentImage_Page0"
                                />
                                <img src={img} sx={{ width: "4%" }}></img>
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  lineHeight: 1.56,
                                  mt: "15px",
                                }}
                              >
                                Upload Your Image Here
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  mt: "10px",
                                }}
                              >
                                Only Jpeg and Png formats with
                                <br />
                                max file size of 4 MB{" "}
                              </Typography>
                            </Paper>
                          </Box>
                        </Box>
                        <Box sx={{ marginTop: "20px" }}>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            National ID Front Side *
                          </Typography>

                          <Box sx={{ mt: "10px" }}>
                            <Paper
                              sx={{
                                width: {
                                  xs: "100%",
                                  sm: 245,
                                  md: 270,
                                  lg: 228,
                                  xl: 314,
                                },
                                height: "290px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                onClick={onButtonClickSecond}
                              >
                                <input
                                  ref={inputRef2}
                                  type="file"
                                  id="input-file-upload"
                                  onChange={handlerChangeSecond}
                                  hidden
                                  name="photoForFaceComparison"
                                ></input>
                                <img src={img} sx={{ width: "4%" }}></img>
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  lineHeight: 1.56,
                                  mt: "15px",
                                }}
                              >
                                Upload Your Image Here
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  mt: "10px",
                                }}
                              >
                                Only Jpeg and Png formats with
                                <br />
                                max file size of 4 MB{" "}
                              </Typography>
                            </Paper>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            marginTop: "20px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          item
                          sm={12}
                        >
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            READ INSTRUCTIONS
                          </Typography>
                          <Box sx={{ marginTop: "7px",width:{xs:'100%',sm:"100%",md:'100%',lg:'222px'} }}>
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "18px",
                                  sm: "18px",
                                  md: "18px",
                                  lg: "18px",
                                  xl: "18px",
                                },
                                lineHeight: 1.54,
                              }}
                            >
                              To avoid delays when verifying your account,
                              Please read the text below:
                              <Typography
                                sx={{
                                  marginTop: "16px",
                                  fontSize: {
                                    xs: "16px",
                                    sm: "16px",
                                    md: "16px",
                                    lg: "16px",
                                    xl: "18px",
                                  },
                                  lineHeight: 1.54,
                                }}
                              >
                                • Chosen credential must not be expired.
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "16px",
                                    sm: "16px",
                                    md: "16px",
                                    lg: "16px",
                                    xl: "18px",
                                  },
                                  lineHeight: 1.54,
                                }}
                              >
                                • Document should be in good condition and
                                clearly visible.
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "16px",
                                    sm: "16px",
                                    md: "16px",
                                    lg: "16px",
                                    xl: "18px",
                                  },
                                  lineHeight: 1.54,
                                }}
                              >
                                • Make sure that there is no light glare on the
                                card.
                              </Typography>
                              • All corners of your Id- Proof must be visible.
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Container>
                  </Paper>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                    pt: 2,
                    gap: "10px",
                    width: "100%",
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
                  >
                    {" "}
                    Edit
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button
                    sx={{
                      width: { xs: "100%", lg: "50%" },
                      borderRadius: "9px",
                      fontSize: "22px",
                      fontWeight: "normal",
                      color: "#fff",
                      backgroundColor: "#28a0b0",
                    }}
                    variant="outlined"
                    onClick={handelclickSecond}
                  >
                    {" "}
                    Save and Next
                  </Button>
                </Box>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    {errorMessage}
                  </Alert>
                </Snackbar>
              </Box>
            </Box>
          ) : (
            ""
          )}
          {step === 3 ? (
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mt: "14px", paddingBottom: "30px" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: {
                      xs: "auto",
                      sm: "auto",
                      md: "auto",
                      lg: "auto",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      width: { xs: "100%", md: "100%", xl: "100%" },
                    }}
                  >
                    <Container>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "20px",
                            flexDirection: {
                              xs: "column",
                              sm: "column",
                              md: "row",
                              lg: "row",
                            },
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                lineHeight: 1.56,
                                marginTop: {
                                  xs: "10px",
                                  lg: "20px",
                                  xl: "40px",
                                },
                              }}
                            >
                              Upload your selfie with ID *
                            </Typography>
                            <Box
                              sx={{
                                paddingTop: {
                                  xs: "20px",
                                  lg: "10px",
                                  xl: "25px",
                                },
                              }}
                            >
                              <Paper
                                sx={{
                                  width: {
                                    xs: "100%",
                                    sm: "100%",
                                    md: 483,
                                    lg: 422,
                                    xl: 632,
                                  },
                                  height: "310px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  onClick={onButtonClick3}
                                >
                                  <input
                                    ref={inputRef3}
                                    type="file"
                                    id="input-file-upload"
                                    onChange={handlerChange3}
                                    name="documentImage_Page1"
                                    hidden
                                  ></input>
                                  <img src={img} sx={{ width: "6%" }}></img>
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    lineHeight: 1.56,
                                    mt: "15px",
                                  }}
                                >
                                  Upload Your Image Here
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: "16px",
                                    fontWeight: "normal",
                                    mt: "10px",
                                  }}
                                >
                                  Only Jpeg and Png formats with
                                  <br />
                                  max file size of 4 MB{" "}
                                </Typography>
                              </Paper>
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                lineHeight: 1.56,
                                marginTop: { lg: "20px", xl: "40px" },
                              }}
                            >
                              READ INSTRUCTIONS
                            </Typography>
                            <Box >
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "18px",
                                    sm: "18px",
                                    md: "18px",
                                    lg: "18px",
                                    xl: "19px",
                                  },
                                  fontWeight: "normal",
                                  lineHeight: 1.2,
                                  paddingTop: "20px",
                                }}
                              >
                                To avoid delays when verifying your account,
                                Please read the text below:
                              </Typography>

                              <Typography
                                sx={{
                                  paddingTop: "15px",
                                  fontSize: {
                                    xs: "18px",
                                    sm: "18px",
                                    md: "18px",
                                    lg: "18px",
                                    xl: "19px",
                                  },
                                  fontWeight: "normal",
                                  lineHeight: 1.56,
                                }}
                              >
                                • Please Take a Selfie with your ID Proof
                                document, the document must be clearly visible
                                and not cover your face.
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "18px",
                                    sm: "18px",
                                    md: "18px",
                                    lg: "18px",
                                    xl: "19px",
                                  },
                                  fontWeight: "normal",
                                  lineHeight: 1.2,
                                }}
                              >
                                • Our algorithm will compare your face in the
                                selfie to the document photo.
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "18px",
                                    sm: "18px",
                                    md: "18px",
                                    lg: "18px",
                                    xl: "19px",
                                  },
                                  fontWeight: "normal",
                                  lineHeight: 1.2,
                                }}
                              >
                                • Make sure to upload a bright photo where all
                                text is clearly readable.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          paddingBottom: "10px",
                          paddingTop: { xs: "29px", sm: "0", md: "0", lg: "0" },
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <FormControlLabel
                          value="male"
                          control={
                            <Radio onChange={handlerRadio} name="isUSCitizen" />
                          }
                          label="All the personal information I have entered is correct."
                        />
                        <FormControlLabel
                          value="female"
                          control={
                            <Radio
                              onChange={handlerRadioSecond}
                              name="isPoliticallyExposed"
                            />
                          }
                          label="I certify that, I am participating in the token distribution event in the capacity of an individual (and beneficial owner) and not as an agent or representative of a third party corporate entity"
                        />
                      </Box>
                    </Container>
                  </Paper>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                    pt: 2,
                    gap: "10px",
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
                  >
                    {" "}
                    Edit
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button
                    sx={{
                      width: { xs: "100%", lg: "50%" },
                      borderRadius: "9px",
                      fontSize: "22px",
                      fontWeight: "normal",
                      color: "#fff",
                      backgroundColor: "#28a0b0",
                    }}
                    variant="outlined"
                    onClick={submitHandlerData}
                  >
                    {" "}
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default App;
