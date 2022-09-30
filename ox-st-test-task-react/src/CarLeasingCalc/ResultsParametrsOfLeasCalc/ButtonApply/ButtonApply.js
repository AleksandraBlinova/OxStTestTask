import React, { useState } from "react";
import "./ButtonApply.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const ButtonForApply = styled(Button)(({ theme }) => ({
  color: "#FFF",
  borderRadius: 40,
  boxShadow: "none",
  width: 426,
  height: 58,
  padding: 0,
  backgroundColor: "#FF9514",
  "&:hover": {
    backgroundColor: "#000",
  },
  "&:focus": {
    backgroundColor: "#575757",
  },
  "&:disabled": {
    backgroundColor: "#FF9514",
    opacity: 0.4,
    color: "#FFF",
  },
}));

const ProgressForApply = styled(CircularProgress)(({ theme }) => ({
  color: "#FFF",
}));

const ButtonApply = ({ loading }) => {
  const [ifPressed, setIfPressed] = useState(false);
  const handleChangeIfPressed = () => {
    setIfPressed(true);
  };

  return (
    <div className="button-apply-container">
      <ButtonForApply
        variant="contained"
        disabled={ifPressed}
        onClick={handleChangeIfPressed}
      >
        {loading ? (
          <ProgressForApply />
        ) : (
          <p className="button-apply-container-text">Оставить заявку</p>
        )}
      </ButtonForApply>
    </div>
  );
};

export default ButtonApply;
