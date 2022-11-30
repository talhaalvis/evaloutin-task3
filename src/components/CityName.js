import * as React from "react";

import FormControl from "@mui/material/FormControl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControlLabel, InputLabel, Select, TextField, MenuItem} from "@mui/material";

export default function ControlledOpenSelect({ handlerChange }) {
  return (
    <div>
      <FormControlLabel
        sx={{ width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" } }}
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
        >
          <MenuItem value="Faisalabad">Faisalabad</MenuItem>
          <MenuItem value="Multan">Multan</MenuItem>
          <MenuItem value="Lahore">Lahore</MenuItem>
          <MenuItem value="karachi">Karachi</MenuItem>
        </Select>
      </FormControlLabel>
    </div>
  );
}
