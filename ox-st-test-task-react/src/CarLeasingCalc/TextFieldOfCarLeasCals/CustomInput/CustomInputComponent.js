import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const CustomInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    borderRadius: "16px",
    border: "none",
    fontSize: "30px",
    height: "59px",
    marginBottom: "0px",
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
