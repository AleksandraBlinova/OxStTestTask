import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export const CustomSliderComponent = styled(Slider)({
  color: "#FF9514",
  width: 360,
  height: 1,
  marginTop: -13,
  marginLeft: 6,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    color: "#E1E1E1",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});
