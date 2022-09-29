import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "./TextFieldOfCarLeasCals.css";
import { Typography } from "@mui/material";

const CustomInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 16,
    backgroundColor: "#F3F3F4",
    border: "none",
    fontSize: 30,
    fontFamily: "Nekst-Black",
    color: "#575757",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const TextFieldOfCarLeasCals = (props) => {
  console.log(props.calcParametrs);
  return (
    <div className="text-fields">
      {props.calcParametrs.map((calcParametr) => (
        <div className="text-field" key={calcParametr.id}>
          <p className="text-field-p-text">{calcParametr.name}</p>
          <CustomInput value={calcParametr.value} />
        </div>
      ))}
    </div>
  );
};

export default TextFieldOfCarLeasCals;
