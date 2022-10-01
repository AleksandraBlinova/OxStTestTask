import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const CustomInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 16,
    border: "none",
    fontSize: 30,
    marginBottom: 0,
    fontFamily: "Nekst-Black",
    color: "#575757",
    paddingLeft: "24px",
  },

  "& .MuiInputBase-input:focus": {
    backgroundColor: "#fff",
    borderRadius: 16,
    border: "2px solid #F3F3F4",
  },
  "& .MuiInputBase-input:active": {
    backgroundColor: "#fff",
    borderRadius: 16,
  },

  "& .MuiInputBase-input:disabled": {
    backgroundColor: "#F3F3F4",
    opacity: 0.4,
  },
}));
