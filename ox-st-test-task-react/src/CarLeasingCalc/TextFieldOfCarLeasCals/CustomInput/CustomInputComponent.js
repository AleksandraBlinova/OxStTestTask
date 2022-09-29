import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const CustomInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 16,
    backgroundColor: "#F3F3F4",
    border: "none",
    fontSize: 30,
    marginBottom: 0,

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
