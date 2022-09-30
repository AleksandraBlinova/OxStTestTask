import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const CustomInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 16,
    backgroundColor: "#F3F3F4",
    border: "none",
    fontSize: 30,
    width: 403,
    marginBottom: 0,
    fontFamily: "Nekst-Black",
    color: "#575757",
    paddingLeft: "24px",
  },
}));
